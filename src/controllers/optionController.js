const Option = require('../models/options');

exports.store = async (req, res) => {
    try {
        const result = await Option.create(req.body);
        res.status(201).json({ message: 'Opção criada com sucesso', option: result.rows[0] });
    } catch(err) {
        res.status(500).json({error: 'Erro ao criar opções'});
        console.error('Erro encontrado na criação das opções: ', err);
    }
}

exports.showByQuestionId = async (req, res) => {
    try {
        const id = req.params.id;
        const options = await Option.findByQuestionId({ questionId: id });

        if (!options.rows || options.rows.length === 0) {
            return res.status(404).json({ message: 'Essa pergunta não tem opções' });
        }

        return res.json('Opções retornadas:', options.rows);

    } catch (err) {
        res.status(500).json({ error: 'Erro ao encontrar opções da pergunta ', err });
    }

}