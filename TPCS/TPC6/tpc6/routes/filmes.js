var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3006/api/filmes')
    .then(dados => {
      res.render('filmes', {lista : dados.data});
    })
    .catch(erro => {
      res.render('error', {error : erro})
    })
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:3006/api/filmes/' + req.params.id)
    .then(dados => {
      res.render('filmes-get', {filme : dados.data});
    })
    .catch(erro => {
      res.render('error', {error : erro})
    })
});

router.get('/inserir', function(req, res, next){
  res.render('filmes-inserir');
})

router.post('/', function(req, res){
  axios.post('http://localhost:3006/api/filmes', req.body)
    .then(dados => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error', {error : erro})
    })
})

router.delete('/:id', function(req, res, next){
  axios.delete('http://localhost:3006/api/filmes/' + req.params.id)
  .then(dados => {
    res.redirect('/')
  })
  .catch(erro => {
    res.render('error', {error : erro})
  })
})

module.exports = router;
