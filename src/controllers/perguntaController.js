const Pergunta = require("../models/pergunta");

exports.store = async(req, res) => {  //chama o model que tem a função de criar perguntas
    await Pergunta.create(req.body);

    res.redirect("/pergunta"); // redireciona para a rota pergunta
};

exports.showById = async(req, res) => { // chama o model para apresentar perguntas de acordo com o id
    const {id} = req.params; // chama o id como parâmetro
    const pergunta = await Pergunta.findById(id); 

    res.json(pergunta); // redireciona a pergunta com o respectivo id
};

exports.showByModuloId = async(req, res) => {
    const pergunta = await Pergunta.findByModuloId(req.body);
    res.json(pergunta);
};

exports.update = async(req, res) => { // chama o model que atualiza as perguntas
    const {id} = req.params;
    const pergunta = await Pergunta.update(id, req.body);

    res.json(pergunta);
};

exports.destroy = async(req, res) => { // chama o model que deleta as perguntas
    const {id} = req.params;
    const pergunta = await Pergunta.delete(id);

    res.json(pergunta);
};

