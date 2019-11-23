  
var Obra = require('../models/obras')

module.exports.consultarCompositorDuracao = (compositor, duracao) =>{
    return Obra
            .find({compositor: compositor, duracao:{$gte: duracao}})
            .exec()
}

module.exports.listar = () =>{
    return Obra
            .find()
            .exec()
}

module.exports.consultarAno = ano =>{
    return Obra
            .find({anoCriacao: ano})
            .exec()
}

module.exports.consultarPeriodo = periodo =>{
    return Obra
            .find({periodo:periodo})
            .exec()
}

module.exports.consultar = id =>{
    return Obra
            .findOne({_id: id})
            .exec()
}