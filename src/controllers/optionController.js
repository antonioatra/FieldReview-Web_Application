const Option = require ('../models/options');

exports.showByQuestionId = async (req, res) => {
    try{
        const id = req.params.id;
        const options = await Option.findByQuestionId({questionId: id});    

        if(!options){
            return res.status(404).json({message: 'Essa pergunta não tem opções'});
        }

        return res.json(options);

    } catch (err) {
        res.status(500).json({ error: 'Erro ao encontrar opções da pergunta ', err});
    }

}