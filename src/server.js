require('dotenv').config();
const express = require('express');

const path = require('path');

const app = express();

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
const questionRoutes = require('./routes/api/question');
const optionRoutes = require('./routes/api/options');

app.use('/api/user', userRoutes);
app.use('/api/trail', trailRoutes);
app.use('/api/module', moduleRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/option', optionRoutes);

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
  });
});

app.get('/trail/:idTrail/:idModule/module', (req, res) => {
  //passar os ids
  const idTrail = req.params.idTrail;
  const idModule = req.params.idModule;

  res.render('adm/module', {
    idTrail: idTrail,
    idModule: idModule
  })

});

app.get('/trail/:idTrail/module', (req, res) => {
  //passar os ids
  const idTrail = req.params.idTrail;
  const idModule = null;

  res.render('adm/module', {
    idTrail: idTrail,
    idModule: idModule
  })

});

app.get('/trail/:idTrail/:idModule/module', (req, res) => {
  //passar os ids
  const idTrail = req.params.idTrail;
  const idModule = req.params.idModule;

  res.render('adm/Module', {
    idTrail: idTrail,
    idModule: idModule
  })

});

app.get('/trail/:idTrail/module', (req, res) => {
  //passar os ids
  const idTrail = req.params.idTrail;
  const idModule = null;

  res.render('adm/Module', {
    idTrail: idTrail,
    idModule: idModule
  })

});

app.get('/trail/:idTrail/:idModule', (req, res) => {
  const trailId = req.params.idTrail;
  const moduleId = req.params.idModule;
  res.render('user/trail', {
    idTrail: trailId,
    idModule: moduleId,
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
