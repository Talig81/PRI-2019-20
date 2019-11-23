var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

router.get('/', function (req, res, next) {
    var ano = req.query.ano
    var compositor = req.query.compositor
    var duracao = req.query.duracao
    var periodo = req.query.periodo

    if (compositor && duracao) {
        axios.get('http://localhost:3000/api/obras?compositor' + compositor + '&duracao' + duracao)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }

    else if (ano) {
        axios.get('http://localhost:3000/api/obras?ano' + ano)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }

    else if (periodo) {
        axios.get('http://localhost:3000/api/obras?periodo' + periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }

    else {
        Obras.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

router.get('/:idObra', function (req, res) {
    Obras.consultar(req.params.idObra)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;