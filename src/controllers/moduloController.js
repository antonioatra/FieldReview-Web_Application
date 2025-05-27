const Modulo = require("../models/modulo");

exports.store = async(req, res) => {
    await Modulo.create(req.body);
    res.redirect("/module"); 
};

exports.showById =async(req, res) => {
    const {id} = req.params;
    const modulo = await Modulo.findById(id);
    res.json(modulo);
};

exports.showByTraildId = async(req, res) => {
    const modulo = await Modulo.findByTrailId(req.body);
    res.json(modulo)
};

exports.showByUserId = async(req, res) => {
    const modulo = await Modulo.findByUserId(req.body);
    res.json(modulo);
};

exports.update = async(req, res) => {
    const {id} = req.params;
    await Modulo.update(id, req.body);
    res.redirect("/module");
};

exports.destroy = async (req, res) =>  {
    const {id} = req.params;
    await Modulo.delete(id);
    res.redirect("/module");
};