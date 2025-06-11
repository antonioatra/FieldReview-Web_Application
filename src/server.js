require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

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
const searchRoutes = require('./routes/api/search');

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/trail', trailRoutes);
app.use('/api/module', moduleRoutes);
app.use('/api/search', searchRoutes);

// Rotas da aplicação FrontEnd
app.get('/', authMiddleware(), (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.get('/register', (req, res) => {
  res.render('register', { error: null });
});

app.get('/search', (req, res) => {
  const mock = [
    {
      title: 'Exemplo de Título',
      description:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboreis nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off',
    },
  ];

  res.render('search', {
    results: mock,
    user: req.user,
  });
});

app.get('/trail/:id', (req, res) => {
  const trailId = req.params.id;
  res.render('user/trail', {
    id: trailId,
    title: 'Título da Trilha',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: req.user,
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
    user: req.user,
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
