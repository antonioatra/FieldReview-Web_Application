const Question = require('../models/question');
const Option = require('../models/options');

exports.store = async (req, res) => {
  //Chama o model que tem a função de criar perguntas
  try {
    const { moduleId, statement, points, options } = req.body;

    const question = await Question.create({moduleId, statement, points});

    if(!question){
         return res.status(500).json({error: "Erro ao criar pergunta" }) // Verifica se a pergunta foi criada
    }


    const promises = options.map(option => { // Espera as opções serem criadas
        return Option.create({
            idQuestion: question.id,
            text: option.text,
            isCorrect: option.isCorrect
        })
    });

    const optionsCreated = await Promise.all(promises);

    const formattedOptions = optionsCreated.map(opt => opt.rows[0]);

    res.status(201).json({
        question: question,
        options: formattedOptions
    }); // retorna a perguna e suas opções
    } catch (err) {
        console.error("Erro encontrado: ", err);
        res.status(500).json({error: "Erro ao criar pergunt: "});
    }
};

exports.showById = async (req, res) => {
  // chama o model para apresentar Questions de acordo com o id
  try {
    const { id } = req.params; // chama o id como parâmetro
    const question = await Question.findById(id);

    res.json(question.rows[0]); // redireciona a Question com o respectivo id
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar a pergunta' });
  }
};

exports.showByModuleId = async (req, res) => {
  try {
    const id = req.params.id;
    const question = await Question.findByModuloId({ moduleId: id });
    if (!question) {
      return res.status(404).json({ message: 'Esse módulo não contém perguntas' });
    }
    res.json(question.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar a pergunta' });
  }
};

exports.update = async (req, res) => {
  // chama o model que atualiza as Questions
  try {
    const { id } = req.params;

    // Verifica se a pergunta existe
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: 'Pergunta não encontrada' });
    }

    // Preenche com os dados existentes caso um campo nao for passado
    const { statement, points } = req.body;
    const updatedData = {
      statement: statement || question.rows[0].enunciado,
      points: points || question.rows[0].pontos,
    };
    // Atualiza a pergunta com os dados fornecidos
    const updatedQuestion = await Question.update(id, updatedData);

    res.json({ message: 'Pergunta atualizada com sucesso', data: updatedQuestion });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar a pergunta', details: err.message });
  }
};

exports.destroy = async (req, res) => {
  // chama o model que deleta as Questions
  try {
    const { id } = req.params;
    await Question.delete(id);

    res.json({ message: 'Pergunta excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir a pergunta' });
  }
};
