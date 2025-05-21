const Trilha = require("../models/trilha");

exports.store = async (req,res) => {
    await Trilha.create(req.body);
    console.log(req.body);
    res.redirect("/trilhas");
};

exports.update = async (req,res) => {
    const { id } = req.params;
    await Trilha.update(id, req.body);
    res.redirect("/trilhas");
};

exports.destroy = async (req,res) => {
    const { id } = req.params;
    await Trilha.delete(id);
    res.redirect("/trilhas");
};

exports.show = async (req, res) => {
    const { id } = req.params;
    const trilha = await Trilha.findById(id);
    res.json(trilha);
}
