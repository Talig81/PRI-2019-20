var mongoose = require('mongoose')

var ficheiroSchema = new mongoose.Schema({
    data: String,
    desc: String,
    name: String,
    path: String,
    mimetype: String,
    size: String,
})

module.exports = mongoose.model('ficheiro',ficheiroSchema);