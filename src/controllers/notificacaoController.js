const Notification = require("../models/notification");
const UserNotification = require("../models/userNotification");

exports.store = async (req, res) => {
    const { title, description, users } = req.body;

    const notification = await Notification.create({ title, description });

    if (users && users.length > 0) {
        for (const user_id of users) {
            if (user_id) {  // Pra garantir que user_id é válido antes de criar a notificação
                await UserNotification.create({
                    user_id,
                    notification_id: notification.id
                });
            }
        }
    }

    res.redirect("/notification");
};

exports.show = async (req, res) => {
    const notifications = await Notification.findAll();
    res.json(notifications);
};

exports.showById = async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.findById(id);

    // Get related users
    const users = await UserNotification.findUser(id);
    res.json({ ...notification, users });
};

exports.update = async (req, res) => {
    const { id } = req.params;
    await Notification.update(id, req.body);
    res.redirect("/notification");
};

exports.destroy = async (req, res) => {
    const { id } = req.params;

    await UserNotification.deleteByNotification(id);
    await Notification.delete(id);

    res.redirect("/notification");
};