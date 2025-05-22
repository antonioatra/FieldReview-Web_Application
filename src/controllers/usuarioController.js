const Usuario = require("../models/usuario");

exports.store = async(req, res) => {
    await Usuario.create(req.body);
    res.redirect("/user");
};

exports.show = async(req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
};

exports.showById = async(req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
   
    res.json(usuario);
};

exports.update = async(req, res) => {
    const { id } = req.params;
    await Usuario.update(id, req.body);

    res.redirect("/user");
};

exports.destroy = async(req, res) => {
    const { id } = req.params;
    await Usuario.delete(id);

    res.redirect("/user");
}