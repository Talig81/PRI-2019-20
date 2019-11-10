var Filme = require('./models/filmes');

const Filmes = module.exports;

Filmes.listar=() => {
    return Filme.find().exec();
}

Filmes.consultar= id => {
    return Filme.findOne({_id: id}).exec();
}

Filmes.inserir= filme=>{
    var novo = new Filme(filme)
    return novo.save();
}

Filmes.delete = id =>{
    return Filme.deleteOne({_id: id}).exec();
}