const Users = require("../models/usuario"); // Chama o model

exports.store = async(req, res) => { // Chama a função que cria usuários
    await Users.create(req.body);
    res.redirect("/user");
};

exports.show = async(req, res) => {
    const users = await Users.findAll();
    res.json(users);
};

exports.showById = async(req, res) => {
    const { id } = req.params;
    const users = await Users.findById(id);
   
    res.json(users);
};

exports.update = async(req, res) => {
    const { id } = req.params;
    await Users.update(id, req.body);

    res.redirect("/user");
};

exports.destroy = async(req, res) => {
    const { id } = req.params;
    await Users.delete(id);

    res.redirect("/user");
};