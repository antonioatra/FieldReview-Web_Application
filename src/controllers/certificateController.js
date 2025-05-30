const Certificate = require("../models/certificate") // Chama o model da entidade certificado

exports.store = async(req, res) => { // Chama a função que cria os certificados
    try {
        const certificate = await Certificate.create(req.body); // Criando os certificados
        res.status(201).json(certificate); // Retorna a entidade criada
    } catch (err) {
        res.status(500).json({error: "Erro ao criar certificado"}); // Responde com mensagem de erro caso um ocorra
    }
};

exports.showByUserId = async(req, res) => { // Chama a função que mostra os certificados do usuário
    try {
    const certificate = await Certificate.findByUserId(req.body);
    if(certificate.rows.length === 0) {
        res.status(404).json({message: "Esse usuário não tem certificados"})
    }
    res.status(200).json(certificate);
    } catch (err) {
        res.status(500).json({error: "Erro ao pegar trilhas do Usuário"})
    }
};

exports.update = async(req, res) => { // Chama a função que atualiza os certificados
    try {
        const {id} = req.params;
        await Certificate.update(req.body, id);
    
        res.status(200).json({message: "Certificado atualizado"});
    } catch (err) {
        res.status(500).json({error: "Erro ao atualizar certificado"})
    }
};

