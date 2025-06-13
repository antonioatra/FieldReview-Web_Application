require('dotenv').config();
const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const axios = require('axios');

// Configuração do Express
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // para forms
app.use(express.static(path.join(__dirname, '../public'))); // arquivos estáticos (css, js, imagens)

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Importando rotas da API
const userRoutes = require('./routes/api/user');
const authRoutes = require('./routes/api/auth'); // Added auth routes
const trailRoutes = require('./routes/api/trail');
const moduleRoutes = require('./routes/api/module');
const helpRoutes = require('./routes/api/help');
const searchRoutes = require('./routes/api/search');
const notificationRoutes = require('./routes/api/notification');
const questionRoutes = require('./routes/api/question');
const optionRoutes = require('./routes/api/options');

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/trail', trailRoutes);
app.use('/api/module', moduleRoutes);
app.use('/api/help', helpRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/notification', notificationRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/option', optionRoutes);

// Rotas da aplicação FrontEnd
app.get('/', authMiddleware(), async (req, res) => {
  try {
    // Buscar dados das APIs
    const trailsResponse = await axios.get('http://localhost:3000/api/trail');
    const userTrailsResponse = await axios.get(
      `http://localhost:3000/api/trail/user/${req.user.id}`,
    );
    const usersResponse = await axios.get('http://localhost:3000/api/user');
    const notificationsResponse = await axios.get(
      `http://localhost:3000/api/notification/user/${req.user.id}`,
    );

    const trails = trailsResponse.data;
    const userTrails = userTrailsResponse.data.trails;

    const userList = usersResponse.data;

    const notifications = notificationsResponse.data;

    // Processar ranking
    const sortedRank = userList.sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
    const userPosition = sortedRank.findIndex((u) => u.id === req.user.id);

    // Buscar módulos para cada trilha
    const trailModules = await Promise.all(
      trails.map(async (trail) => {
        try {
          const modulesResponse = await axios.get(
            `http://localhost:3000/api/module/trail/${trail.id}`,
          );
          const data = modulesResponse.data;
          console.log(data[0].id);

          return {
            trailId: trail.id,
            moduleCount: modulesResponse.data.length,
            firstId: data[0].id
          };
        } catch (error) {
          console.error(`Erro ao buscar módulos da trilha ${trail.id}:`, error.message);
          return {
            trailId: trail.id,
            moduleCount: 0,
            firstId: null
          };
        }
      }),
    );

    // Filtrar trilhas disponíveis que nao estao atribuidas ao usuário
    const availableTrails = trails.filter((trail) => {
      return !userTrails.some((userTrail) => userTrail.id_trilha === trail.id);
    });

    res.render('home', {
      userTrails: userTrails,
      availableTrails: availableTrails,
      trailModules: trailModules,
      ranking: sortedRank,
      userPosition,
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: error,
    });
  }
});

// Página de registro
app.get('/register', (req, res) => {
  res.render('register', { error: null });
});
//Página de login
app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.get('/search', async (req, res) => {
  const searchTerm = req.query.searchTerm; // Extract searchTerm from URL query
  let helpResults = [];
  let trailResults = [];
  let error = null;

  if (!searchTerm) {
    // Se nenhum termo for passado, voltar para a página inicial
    return res.redirect('/');
  }

  try {
    // Fetch help results
    const response = await axios.get('http://localhost:3000/api/search', {
      data: {
        searchTerm: searchTerm,
      },
    });

    helpResults = response.data.help;
    trailResults = response.data.modules;
  } catch (err) {
    error = 'Erro ao buscar resultados';
  }

  // Renderizar a página de busca com os resultados
  res.render('search', {
    helpResults,
    trailResults,
    searchTerm,
    error,
    user: req.user,
  });
});

// Rota para edição de trilha - deve vir ANTES da rota mais genérica
app.get('/trail/edit/:id', async (req, res) => {
  const { id } = req.params;
  const editMode = true;
  const response = await axios.get(`http://localhost:3000/api/trail/${id}`);
  const trail = response.data;
  res.render('trailEdit', { editMode, trail });
});

// Página da trilha específica
app.get('/trail/:idTrail/:idModule', async (req, res) => {
  const trailId = req.params.idTrail;
  const moduleId = req.params.idModule;

  res.render('user/trail', {
    idTrail: trailId,
    idModule: moduleId,
    title: 'Título da Trilha',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: req.user,
  });
});

app.get('/help', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/help');

    res.render('help', {
      results: response.data.help || [],
      user: req.user,
    });
  } catch (error) {
    console.error('Erro ao buscar dados de help:', error);

    res.render('help', {
      results: [],
      user: req.user,
    });
  }
});

app.get('/dashboard', authMiddleware(), async (req, res) => {
  let users = [];
  let trails = [];
  let trailModules = [];
  let userTrails = [];

  const tab = req.query.tab || 'usuarios'; // Pega a aba ativa da query string

  try {
    const response = await axios.get(`http://localhost:3000/api/user`);
    users = response.data.filter((user) => user.cargo === 'user');

    const trailsResponse = await axios.get('http://localhost:3000/api/trail');
    trails = trailsResponse.data;

    const userTrailsResponse = await axios.get(
      `http://localhost:3000/api/trail/user/${req.user.id}`,
    );
    userTrails = userTrailsResponse.data.trails;

    // Buscar módulos para cada trilha
    trailModules = await Promise.all(
      trails.map(async (trail) => {
        try {
          const modulesResponse = await axios.get(
            `http://localhost:3000/api/module/trail/${trail.id}`,
          );
          return {
            trailId: trail.id,
            moduleCount: modulesResponse.data.length,
          };
        } catch (error) {
          console.error(`Erro ao buscar módulos da trilha ${trail.id}:`, error.message);
          return {
            trailId: trail.id,
            moduleCount: 0,
          };
        }
      }),
    );
  } catch (err) {
    console.error('Erro ao renderizar dashboard:', err);
    res.status(500).send('Erro interno do servidor');
  }

  const availableTrails = trails.filter((trail) => {
    return !userTrails.some((userTrail) => userTrail.id_trilha === trail.id);
  });

  res.render('dashboard', {
    users: users,
    activeTab: tab,
    trails: trails,
    trailModules: trailModules,
    availableTrails: availableTrails,
    userTrails: userTrails,
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;