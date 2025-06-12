const Notification = require('../models/notification');
const User = require('../models/user');

exports.store = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const result = await Notification.create({ titulo: title, descricao: description });
    const notification = result.rows[0];
    let users = [];

    if (userId) {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      users.append(user);
    } else {
      const allUsers = await User.findAll();
      users = allUsers;
    }

    for (const user of users) {
      await Notification.addUsers({ userId: user.id, notificationId: notification.id });
    }
    return res.status(201).json({ message: 'Notification created successfully.', notification });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.', details: err.message });
  }
};

exports.show = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar notificações' });
  }
};

exports.showById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ error: 'Notificação não encontrada' });
    }
    res.status(200).json({ message: 'Notificação retornada com sucesso', notification });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar notificação' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ error: 'Notificação não encontrada' });
    }

    await Notification.update(id, req.body);
    res.status(200).json({ message: 'Notificação atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar notificação' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ error: 'Notificação não encontrada' });
    }

    await User.deleteByNotification(id);
    await Notification.delete(id);

    res.status(200).json({ message: 'Notificação deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar notificação' });
  }
};

exports.showByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await Notification.findByUserId(userId);
    if (!notifications || notifications.length === 0) {
      return res
        .status(200)
        .json({ message: 'Nenhuma notificação encontrada para este usuário', notifications: [] });
    }
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar notificações do usuário' });
  }
};
