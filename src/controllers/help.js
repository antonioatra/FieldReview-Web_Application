const Help = require("../models/helpModel");

exports.store = async(req, res) => {
    await Help.create(req.body);
    res.redirect("/help");
}
exports.show =  async(req, res) => {
    const help = await Help.select();
    res.json(help)
};
exports.update = async(req,res) => {
    const { id } = req.params;
    await Help.update(req.body, req.params.id);
    res.resdirect("/help")
};
exports.destroy = async(req, res) => {
    const {id} = req.params;
    await Help.delete(id);
    res.redirect("/help");

}