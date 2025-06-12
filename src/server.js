require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

// Configuração do EJS
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // para forms
app.use(express.static(path.join(__dirname, '../public'))); // arquivos estáticos (css, js, imagens)

// Importando rotas da API
const userRoutes = require('./routes/api/user');
const trailRoutes = require('./routes/api/trail');
const moduleRoutes = require('./routes/api/module');
const searchRoutes = require('./routes/api/search');
const notificationRoutes = require('./routes/api/notification');

app.use('/api/user', userRoutes);
app.use('/api/trail', trailRoutes);
app.use('/api/module', moduleRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/notification', notificationRoutes);

// Página de login
app.get('/login', (req, res) => {
  res.render('login');
});

// Página de registro
app.get('/register', (req, res) => {
  res.render('register');
});

// Página de busca
app.get('/search', (req, res) => {
  const mock = [];
  res.render('search', {
    results: mock,
  });
});

// Página da trilha específica
app.get('/trail/:id', (req, res) => {
  const trailId = req.params.id;

  res.render('trail');
});

// Página de ajuda
app.get('/help', (req, res) => {
  res.render('help');
});

// Dashboard do usuário
app.get('/', async (req, res) => {
  try {
    const userId = '32221db5-1bc8-4ec2-8a29-b163a639a82a';

    // Buscar dados das APIs
    const trailsResponse = await axios.get('http://localhost:3000/api/trail');
    const userTrailsResponse = await axios.get(`http://localhost:3000/api/trail/user/${userId}`);
    const usersResponse = await axios.get('http://localhost:3000/api/user');
    const notificationsResponse = await axios.get(
      `http://localhost:3000/api/notification/user/${userId}`,
    );

    const trails = trailsResponse.data;
    const userTrails = userTrailsResponse.data.trails;

    const userList = usersResponse.data;

    const notifications = notificationsResponse.data;

    // Processar ranking
    const sortedRank = userList.sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
    const userPosition = sortedRank.findIndex((u) => u.id === userId);

    // Buscar módulos para cada trilha
    const trailModules = await Promise.all(
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
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
