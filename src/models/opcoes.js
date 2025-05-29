const pool = require("../config/database");

module.exports = { 
    async create(data) {
        const query = "INSERT INTO opcoes (texto, eh_correta) VALUES($1, $2)";
        
    }
}