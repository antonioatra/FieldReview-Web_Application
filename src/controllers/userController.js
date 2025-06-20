const Users = require('../models/user');

exports.store = async (req, res) => {
  try {
    const result = await Users.create(req.body);
    res.status(201).json({ message: 'User created successfully', user: result.rows[0] });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Usuário com esse email já existe.' });
    }
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

exports.show = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};

exports.showById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    // Se o campo nao for passado, manter ele com o valor atual
    const currentUser = await Users.findById(id);
    if (!currentUser) return res.status(404).json({ error: 'Usuário não encontrado.' });
    req.body.name = req.body.name || currentUser.nome;
    req.body.email = req.body.email || currentUser.email;
    req.body.role = req.body.role || currentUser.cargo;

    const result = await Users.update(id, req.body);
    res.status(200).json({ message: 'Atualizado com Sucesso', user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário', details: err.message });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.delete(id);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
};
