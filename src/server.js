require('dotenv').config();
const express = require('express');
const axios = require('axios');

const path = require('path');

const app = express();

// Configuração do EJS
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // para forms
app.use(express.static(path.join(__dirname, 'public'))); // arquivos estáticos (css, js, imagens)

// Importando rotas da API
const userRoutes = require('./routes/api/user');
const trailRoutes = require('./routes/api/trail');
const moduleRoutes = require('./routes/api/module');
const searchRoutes = require('./routes/api/search');

app.use('/api/user', userRoutes);
app.use('/api/trail', trailRoutes);
app.use('/api/module', moduleRoutes);
app.use('/api/search', searchRoutes);

// Rotas da aplicação FrontEnd
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
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
  });
});

app.get('/trail/:id', (req, res) => {
  const trailId = req.params.id;
  res.render('trail', {
    id: trailId,
    title: 'Título da Trilha',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  });
});

app.get('/help', (req, res) => {
  const mock = [
    {
      title: 'Exemplo de Título',
      description:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboreis nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off',
    },
    {
      title: 'Exemplo de Título',
      description:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboreis nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off',
    },
    {
      title: 'Exemplo de Título',
      description:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboreis nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off',
    },
    {
      title: 'Exemplo de Título',
      description:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboreis nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off',
    },
  ];

  res.render('help', {
    results: mock,
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
