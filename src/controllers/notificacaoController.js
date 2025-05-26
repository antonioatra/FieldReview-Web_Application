const Notificacao = require("../models/notificacaoModels");
const UsuarioNotificacao = require("../models/usuarioNotificacao");

exports.store = async (req, res) => {
    const { titulo, descricao, usuarios } = req.body;

    const notificacao = await Notificacao.create({ titulo, descricao });

    if (usuarios && usuarios.length > 0) {
        for (const id_usuario of usuarios) {
            await UsuarioNotificacao.create({
                id_usuario,
                id_notificacao: notificacao.id
            });
        }
    }

    res.redirect("/notificacoesModels");
};
exports.show = async (req, res) => {
    const notificacoes = await Notificacao.findAll();
    res.json(notificacoes);
};