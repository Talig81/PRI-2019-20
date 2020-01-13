var express = require('express');
var router = express.Router();
var Publicacoes = require('../controllers/publicacoes')


router.get('/pubs', function (req, res) {

    if (req.query.type && req.query.year) {
        Publicacoes.getTypeYear(req.query.type, req.query.year).then(dados => {
            res.status(200).jsonp(dados);
        }).catch(error => {
            res.status(500).jsonp(error);
        })
    }
    else if (req.query.type) {
        Publicacoes.getType(req.query.type).then(dados => {
            res.status(200).jsonp(dados);
        }).catch(error => {
            res.status(500).jsonp(error);
        })
    }
    else if (req.query.autor) {
        Publicacoes.getPubs(req.query.autor).then(dados => {
            res.status(200).jsonp(dados);
        }).catch(error => {
            res.status(500).jsonp(error);
        })
    }
    else {
        Publicacoes.listar().then(dados => {
            res.status(200).jsonp(dados);
        }).catch(error => {
            res.status(500).jsonp(error);
        })
    }
})

router.get('/pubs/:id', function (req, res) {

    Publicacoes.getId(req.params.id).then(dados => {
        res.status(200).jsonp(dados);
    }).catch(error => {
        res.status(500).jsonp(error);
    })
})

router.get('/types', function (req, res) {
    Publicacoes.getTypes().then(dados => {
        res.status(200).jsonp(dados)
    }).catch(error => {
        res.status(500).jsonp(error)
    })
})

router.get('/autores', function (req, res) {
    Publicacoes.getAutores().then(dados => {
        res.status(200).jsonp(dados);
    }).catch(error => {
        res.status(500).jsonp(error);
    })
})


module.exports = router;