const Question = require("../models/pergunta");
const Option = require ("../models/")

exports.store = async(req, res) => {  //chama o model que tem a função de criar perguntas
     await Question.create(req.body);

    res.redirect("/question"); // redireciona para a rota Question
};

exports.showById = async(req, res) => { // chama o model para apresentar Questions de acordo com o id
    const {id} = req.params; // chama o id como parâmetro
    const question = await Question.findById(id); 

    res.json(question); // redireciona a Question com o respectivo id
};

exports.showByModuloId = async(req, res) => {
    const question = await Question.findByModuloId(req.body);
    res.json(question);
};

exports.update = async(req, res) => { // chama o model que atualiza as Questions
    const {id} = req.params;
    const question = await Question.update(id, req.body);

    res.json(question);
};

exports.destroy = async(req, res) => { // chama o model que deleta as Questions
    const {id} = req.params;
    const question = await Question.delete(id);

    res.json(question);
};

