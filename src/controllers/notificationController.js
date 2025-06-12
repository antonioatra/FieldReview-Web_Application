const Notification = require("../models/notification");
const UserNotification = require("../models/user");


exports.store = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const result = await Notificacao.create({ titulo: title, descricao: description });
    const notification = result.rows[0];
    let users = [];

    if (userId) {
      const userResult = await Usuario.findById(userId);
      const user = userResult.rows[0];
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      users = [user];
    } else { const allUsers = await Usuario.findAll();
             users = allUsers.rows;
    }

    for (const user of users) {
      await Notificacao.addUsers({ id_usuario: user.id, id_notificacao: notification.id });
    }
    return res.status(201).json({ message: 'Notification created successfully.', notification });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
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

        // Get related users
        const users = await UserNotification.findUser(id);
        res.status(200).json({ message: 'Notificação retornada com sucesso', notification: { ...notification, users } });
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

        await UserNotification.deleteByNotification(id);
        await Notification.delete(id);

        res.status(200).json({ message: 'Notificação deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar notificação' });
    }
};