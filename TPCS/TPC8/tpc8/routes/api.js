var express = require('express');
var router = express.Router();
const fs = require('fs')
var Ficheiros = require('../controllers/ficheiros.js')
var Ficheiro = require('../models/ficheiro.js')

var multer = require('multer')
var upload = multer({dest: 'uploads/'})

/* GET users listing. */
router.get('/ficheiros', function(req, res, next) {
  Ficheiros.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
});

router.post('/ficheiros', upload.array('ficheiro'), function(req,res){
  for(var i = 0; i < req.files.length; i++){
      var oldPath = __dirname + '/../' + req.files[i].path
      var newPath = __dirname + '/../data/' + req.files[i].originalname
      
      fs.rename(oldPath, newPath, function (err) {
          if (err) throw err
      })

      if(req.files[i].mimetype.startsWith('image')){
          var imagePath = __dirname + '/../public/images/' + req.files[i].originalname
          ncp(newPath, imagePath, function (err) {
              if (err) {
                console.error(err);
              }
              console.log('Done!');
          });
          
      }
  var data1 = new Date()

  var novoFicheiro= new Ficheiro({
    data: data1.toISOString,
    desc: req.body.desc,
    name: req.file.originalname,
    path: newPath,
    mimetype: req.file.mimetype,
    size: req.file.size,

  });
  novoFicheiro.save(function(err,ficheiro){
    if(err) res.jsonp(err)
    else
      console.log(ficheiro+'foi gravado com sucesso')
  })
})

module.exports = router;
