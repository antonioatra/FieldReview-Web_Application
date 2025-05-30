const Notification = require("../models/notification");
const UserNotification = require("../models/userNotification");

exports.store = async (req, res) => {
    try {
        const { title, description, users } = req.body;

        const notification = await Notification.create({ title, description });

        if (users && users.length > 0) {
            for (const user_id of users) {
                if (user_id) { // Garante que user_id é válido antes de criar a notificação
                    await UserNotification.create({
                        user_id,
                        notification_id: notification.id
                    });
                }
            }
        }
        res.status(201).json({ message: 'Notificação criada com sucesso', notification });
    } catch (err) {
        console.error("Erro ao criar notificação:", err);
        res.status(500).json({ error: 'Erro ao criar notificação' });
    }
};

exports.show = async (req, res) => {
    try {
        const notifications = await Notification.findAll();
        res.status(200).json(notifications);
    } catch (err) {
        console.error("Erro ao buscar notificações:", err);
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
        console.error("Erro ao buscar notificação por ID:", err);
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
        console.error("Erro ao atualizar notificação:", err);
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
        console.error("Erro ao deletar notificação:", err);
        res.status(500).json({ error: 'Erro ao deletar notificação' });
    }
};