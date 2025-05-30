const Trail = require('../models/trail');
const User = require('../models/user');

exports.store = async (req, res) => {
  try {
    const result = await Trail.create(req.body);
    res.status(201).json({ message: 'Titulo Criado com sucesso', trail: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar trilha' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    await Trail.update(id, req.body);
    res.status(200).json({ message: 'Trilha atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar uma trilha' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Trail.delete(id);
    res.status(200).json({ message: 'Trilha deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar trilha' });
  }
};

exports.showById = async (req, res) => {
  try {
    const { id } = req.params;
    const trail = await Trail.findById(id);
    if (!trail) return res.status(404).json({ error: 'ID não encontrado.' });
    res.status(200).json({ message: 'Trail returned successfully', trail });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar trilha' });
  }
};

exports.showAll = async (req, res) => {
  try {
    const trail = await Trail.findAll();
    res.json(trail);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar trilhas' });
  }
};

exports.assignTrail = async (req, res) => {
  const { id: trailId, userId } = req.params;
  const { deadline } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const trail = await Trail.findById(trailId);
    if (!trail) return res.status(404).json({ error: 'Trilha não encontrada' });

    const result = await Trail.assignToUser({
      idTrail: trailId,
      idUser: userId,
      deadline,
      status: 'pendente',
    });
    res.status(201).json({ message: 'Trilha atribuída com sucesso', assignment: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atribuir trilha' });
  }
};
