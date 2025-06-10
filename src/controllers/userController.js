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
  console.log('Current User ID:', req.user.id);
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
    // Ensure users can only update their own profile unless they're consultor
    if (req.user.id !== parseInt(id) && req.user.role !== 'consultor') {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    const result = await Users.update(id, req.body);
    res.status(200).json({ message: 'Atualizado com Sucesso', user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
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
