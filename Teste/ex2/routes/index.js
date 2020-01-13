var express = require('express');
var router = express.Router();
var axios = require('axios')

var apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"

/* GET home page. */
router.get('/', function(req, res) {
  url = "http://clav-api.dglab.gov.pt/api/tipologias?apikey=" + apiKey 
  axios.get(url).then(dados => {
    res.render('index',{lista: dados.data})
  })
  
});

router.get('/getId/:id',function(req,res){
  url = "http://clav-api.dglab.gov.pt/api/tipologias/" +req.params.id+"?info=completa&apikey=" + apiKey
  url2 = "http://clav-api.dglab.gov.pt/api/tipologias/" +req.params.id+"/elementos" +"?apikey=" + apiKey
  url3 = "http://clav-api.dglab.gov.pt/api/tipologias/" +req.params.id+"/intervencao/dono" +"?apikey=" + apiKey
  axios.get(url).then(dados => {
    axios.get(url2).then(dados2=>{
      axios.get(url3).then(dados3=>{
        var elementos = {elementos: dados2.data}
        
        var donos = {donos: dados3.data}
        var final = Object.assign({},dados.data,elementos,donos);
  
        res.render('tipologia',{tipologia: final})
      })
    })
    
  })
})

router.get('/getEnt/:id',function(req,res){
  url = "http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id+ "?apikey=" + apiKey
  axios.get(url).then(dados=>{
    console.log(dados.data)
    res.render('entidade',{entidade: dados.data})
  })
})

module.exports = router;
