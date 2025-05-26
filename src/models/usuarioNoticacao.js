const db = require("../config/database");




module.exports = {
    async create(data) {
        return db.insert("usuario_notificacao", data);
    },

    async findUsuariosByNotificacao(id_notificacao) {
        return db.query(
            "SELECT u.* FROM usuario u INNER JOIN usuario_notificacao un ON u.id = un.id_usuario WHERE un.id_notificacao = ?",
            [id_notificacao]
        );
    },

    async deleteByNotificacao(id_notificacao) {
        return db.query("DELETE FROM usuario_notificacao WHERE id_notificacao = ?", [id_notificacao]);
    }
};









