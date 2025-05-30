const Trail = require("../models/trilha"); // Pega o model da entidade trilha

exports.store = async (req,res) => { // Chama a função que cria trilhas
    await Trail.create(req.body); // Espera que ela seja criada
    res.redirect("/trilhas"); // Redireciona para o endpoint de trilha
};

exports.update = async (req,res) => { // Chama a função que atualiza trilhas
    const { id } = req.params;
    await Trail.update(id, req.body);
    res.redirect("/trilhas");
};

exports.destroy = async (req,res) => { // Chama a função que deleta trilhas
    const { id } = req.params;
    await Trail.delete(id);
    res.redirect("/trilhas");
};

exports.showById = async (req, res) => { // Chama a função que mostra as trilhas por id
    const { id } = req.params;
    const trail = await Trail.findById(id);
    res.json(trail);
};

exports.showAll = async (req, res) => { // Chama a função que mostra todas as trilhas
    const trail = await Trail.findAll();
    res.json(trail);
};
