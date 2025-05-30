const Question = require("../models/question");
const Option = require ("../models/options")

exports.store = async(req, res) => {  //Chama o model que tem a função de criar perguntas
    try {
    const {moduleId, statement, points, options} = req.body;

    const question = await Question.create(moduleId, statement, points);
    if(!question){
         return res.status(500).json({error: "Erro ao criar pergunta"}) // Verifica se a pergunta foi criada
    }
    const promises = options.map(option => { // Espera as opções serem criadas
        return Option.create({
            questionId: question.id,
            text: option.text,
            isCorrect: option.isCorrect
        })
    });

    const optionsCreated = await Promise.all(promises);

    res.json({
        question: question,
        options: optionsCreated
    }); // retorna a perguna e suas opções
    } catch (err) {
        res.status(500).json({error: "Erro ao criar pergunta"});
    }
};

exports.showById = async(req, res) => { // chama o model para apresentar Questions de acordo com o id
    try {
    const {id} = req.params; // chama o id como parâmetro
    const question = await Question.findById(id); 

    res.json(question); // redireciona a Question com o respectivo id
    } catch (err) {
        res.status(500).json({error: "Erro ao retornar a pergunta"})
    }
};

exports.showByModuleId = async(req, res) => {
    try {
    const {moduleId} = req.body;
    const question = await Question.findByModuloId(moduleId);
    if(!question) {
        return res.status(404).json({message: "Esse módulo não contém perguntas"})
    }
    res.json(question);
    } catch (err) {
        res.status(500).json({error: "Erro ao retornar a pergunta"})
    }
};

exports.update = async(req, res) => { // chama o model que atualiza as Questions
    try {
    const {id} = req.params;
    const question = await Question.update(id, req.body);

    res.json(question);
    } catch (err) {
        res.status(500).json({error: "Erro ao atualizar a pergunta"})
    }
};

exports.destroy = async(req, res) => { // chama o model que deleta as Questions
    try {
    const {id} = req.params;
    const question = await Question.delete(id);

    res.json(question);
    } catch (err) {
        res.status(500).json({error: "Erro ao excluir a pergunta"})
    }
};

