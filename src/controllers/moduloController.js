const Module = require("../Modules/modulo"); // chama o model da entidade módulo

exports.store = async(req, res) => { // Chama a função que cria módulos
    await Module.create(req.body); // Espera que seja criada
 res.redirect("/module"); //Redireciona para o endpoint de módulo
};

exports.showById =async(req, res) => { // Chama a função que pega os módulos por id
    const {id} = req.params;
    const mod = await Module.findById(id);
    res.json(mod);
};

exports.showByTraildId = async(req, res) => { // Chama a função que pega módulos pelo id da trilha 
    const mod = await Module.findByTrailId(req.body);
    res.json(mod)
};

exports.showByUserId = async(req, res) => { // Chama a função que pega módulos a pelo id do usuário
    const mod = await Module.findByUserId(req.body);
    res.json(mod);
};

exports.update = async(req, res) => {// Chama a função que atualiza módulos
    const {id} = req.params;
    await Module.update(id, req.body);
    res.redirect("/module");
};

exports.destroy = async (req, res) =>  { // Chama a função que deleta módulos
    const {id} = req.params;
    await Module.delete(id);
    res.redirect("/module");
};