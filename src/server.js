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
    
    let notifications = [];
    try {
      const notificationsResponse = await axios.get(
        `http://localhost:3000/api/notification/user/${req.user.id}`,
      );
      notifications = Array.isArray(notificationsResponse.data) ? notificationsResponse.data : [];
    } catch (notificationError) {
      console.log("Erro ao buscar notificações:", notificationError.message);
      notifications = [];
    }

    const trails = trailsResponse.data;
    const userTrails = userTrailsResponse.data.trails;

    const userList = usersResponse.data;

    // Processar ranking
    const sortedRank = userList.sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
    const userPosition = sortedRank.findIndex((u) => u.id === req.user.id);

    // Buscar módulos para cada trilha e enriquecer as trilhas com informações de módulos
    const enrichedTrails = await Promise.all(
      trails.map(async (trail) => {
        try {
          const modulesResponse = await axios.get(
            `http://localhost:3000/api/module/trail/${trail.id}`,
          );
          const modules = modulesResponse.data;
          
          // Adicionar contagem de módulos e o ID do primeiro módulo à trilha
          return {
            ...trail,
            moduleCount: modules.length,
            firstModuleId: modules.length > 0 ? modules[0].id : null
          };
        } catch (error) {
          console.error(`Erro ao buscar módulos da trilha ${trail.id}:`, error.message);
          return {
            ...trail,
            moduleCount: 0,
            firstModuleId: null,
            firstId: null,
          };
        }
      }),
    );

    // Enriquecer as trilhas do usuário com informações dos módulos e progresso
    const enrichedUserTrails = await Promise.all(
      userTrails.map(async userTrail => {
        // Encontrar a trilha correspondente entre as trilhas enriquecidas
        const matchingTrail = enrichedTrails.find(trail => trail.id === userTrail.id_trilha);
        
        if (matchingTrail) {
          // Buscar progresso da trilha para o usuário
          let progress = 0;
          try {
            const progressResponse = await axios.get(
              `http://localhost:3000/api/trail/progress/${req.user.id}/${userTrail.id_trilha}`
            );
            progress = progressResponse.data.progress || 0;
          } catch (error) {
            console.error(`Erro ao buscar progresso da trilha ${userTrail.id_trilha}:`, error.message);
          }

          return {
            ...userTrail,
            id: userTrail.id_trilha, // ID importante para o link
            nome: matchingTrail.nome,
            descricao: matchingTrail.descricao,
            imagem: matchingTrail.imagem,
            titulo: matchingTrail.titulo, // Adicionado título
            moduleCount: matchingTrail.moduleCount,
            firstModuleId: matchingTrail.firstModuleId,
            progress: progress // Progresso calculado
          };
        }
        
        return {
          ...userTrail,
          id: userTrail.id_trilha, // ID importante para o link
          moduleCount: 0,
          firstModuleId: null,
          progress: 0
        };
      })
    );

    // Filtrar trilhas disponíveis que não estão atribuídas ao usuário e adicionar progresso
    const availableTrails = await Promise.all(
      enrichedTrails
        .filter((trail) => {
          return !userTrails.some((userTrail) => userTrail.id_trilha === trail.id);
        })
        .map(async (trail) => {
          // Buscar progresso da trilha para o usuário
          let progress = 0;
          try {
            const progressResponse = await axios.get(
              `http://localhost:3000/api/trail/progress/${req.user.id}/${trail.id}`
            );
            progress = progressResponse.data.progress || 0;
          } catch (error) {
            console.error(`Erro ao buscar progresso da trilha ${trail.id}:`, error.message);
          }

          return {
            ...trail,
            progress: progress
          };
        })
    );

    // Buscar trilhas concluídas
    let completedTrails = [];
    try {
      const completedTrailsResponse = await axios.get(
        `http://localhost:3000/api/trail/completed/${req.user.id}`
      );
      completedTrails = completedTrailsResponse.data.completedTrails || [];
    } catch (error) {
      console.log("Erro ao buscar trilhas concluídas:", error.message);
      completedTrails = [];
    }

    // Gerar uma lista simplificada de trailModules para compatibilidade com o template existente
    const trailModules = enrichedTrails.map(trail => ({
      trailId: trail.id,
      moduleCount: trail.moduleCount,
      firstId: trail.firstModuleId // Usando o nome consistente
    }));

    res.render('home', {
      userTrails: enrichedUserTrails,
      availableTrails: availableTrails,
      completedTrails: completedTrails,
      trailModules: trailModules, // mantido para compatibilidade
      ranking: sortedRank,
      userPosition,
      notifications,
    });
  } catch (error) {
    console.error('Erro na página inicial:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: error.message,
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

// Rota para CRIAR nova trilha (sem ID)
app.get('/trail/edit', (req, res) => {
  const editMode = false;
  const trail = null; // Sem trilha existente
  res.render('trailEdit', { editMode, trail});
});

// Rota para edição de trilha - deve vir ANTES da rota mais genérica
app.get('/trail/edit/:id', async (req, res) => {
  const { id } = req.params;
  const editMode = true;
  try {
    const response = await axios.get(`${req.protocol}://${req.get('host')}/api/trail/${id}`);
    const trail = response.data.trail; // Extrair o objeto trail da resposta
    res.render('trailEdit', { editMode, trail });
  } catch (error) {
    console.error('Erro ao buscar trilha:', error);
    res.status(500).send('Erro ao carregar trilha');
  }
});

// Página da trilha específica
app.get('/trail/:idTrail/:idModule', authMiddleware(), async (req, res) => {
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

app.get('/helpAdmin', authMiddleware(), async(req,res) => {
   try {
    const response = await axios.get('http://localhost:3000/api/help');

    res.render('helpAdmin', {
      results: response.data.help || [],
    });
  } catch (error) {
    console.error('Erro ao buscar dados de help:', error);

    res.render('helpAdmin', {
      results: [],
    });
  }
})

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
    user: req.user,
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
