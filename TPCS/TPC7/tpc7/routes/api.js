var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

router.get('/obras', function(req, res) {
    Obras.listar()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
  });

router.get('/obras/:idObra', function(req, res){
    Obras.consultar(req.params.idObra)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/ano', function(req, res){
    Obras.consultarAno(req.params.ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/compositorAno', function(req, res){
    Obras.consultarCompositorDuracao(req.params.compositorAno)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/periodo', function(req, res){
    Obras.consultarPeriodo(req.params.periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})