var Publicacoes = require('../models/publicacoes')

module.exports.listar = () => {
    return Publicacoes.find({},{id: 1, title: 1, year: 1, type: 1, _id: 0}).exec();
}

module.exports.getId = id =>{
    return Publicacoes.findOne({id: id}).exec();
}

module.exports.getTypes = () =>{
    return Publicacoes.distinct('type').exec()
}

module.exports.getType = type =>{
    return Publicacoes.find({type: type}).exec()
}

module.exports.getTypeYear = (type,year) => {
    return Publicacoes.find({type: type,year:{$gt: year}}).exec()
}

module.exports.getAutores = () =>{
    return Publicacoes.aggregate([{$unwind: "$authors"},{$group: {_id: "$authors"}},{$sort: {_id: 1}}]).exec()
}



module.exports.getPubs = author =>{
    return Publicacoes.aggregate([{$match:{authors: author}},{$unwind: "$authors"}]).exec();
}