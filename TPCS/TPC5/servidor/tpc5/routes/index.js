var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");

var myDB = __dirname + '/../bd/alunos.json';

/* GET home page. */
router.get('/', function (req, res, next) {
  jsonfile.readFile(myDB, (erro, data) => {
    if (!erro) {
      res.render('index', { lista: data });
    }
  })

});

router.get('/alunos', function (req, res, next) {
  jsonfile.readFile(myDB, (erro, data) => {
    if (!erro) {
      res.render('index', { lista: data });
    }
  })

});

router.get('/alunos/:idAluno', function (req, res) {
  var id = req.params.idAluno;
  jsonfile.readFile(myDB, (erro, data) => {
    if (!erro) {
      var iden = data.findIndex(c => c.id == id);
      if (iden > -1) {
        res.render('aluno',{aluno: data[iden], lista: data[iden].notas.split(",")});
      }

    }
  });
})


router.post('/alunos', function (req, res, next) {
  var registo = req.body
  var id = req.params.id
  jsonfile.readFile(myDB, (erro, data) => {
    if (!erro) {
      console.log('BD ')
      data.push(registo);
      jsonfile.writeFile(myDB, data, erro => {
        if (erro) console.log(erro)
        else console.log('BD atualizada')
      })


    }
    res.render('index', { lista: data });
  })


})

router.post('/alunos/:id/notas', function(req,res) {
  var bd = req.body
  var id = req.params.id  
  console.log(bd);
  jsonfile.readFile(myDB, (erro, data) => {
    if (!erro) {
      var iden = data.findIndex(c => c.id == id);
      console.log(data[iden])
      jsonfile.writeFile(myDB, data[iden], erro => {
        if (erro) console.log(erro)
        else console.log('BD atualizada')
      })
    }
    res.render('aluno',{aluno: data[iden]})
  })
  
})

router.delete('/alunos/:idAluno', function (req, res) {
  var id = req.params.idAluno;
  jsonfile.readFile(myDB, (erro, data) => {
    if (!erro) {
      var iden = data.findIndex(c => c.id == id);
      if (iden > -1) {
        data.splice(iden, 1)
        jsonfile.writeFile(myDB, data, erro => {
          if (erro) console.log(erro)
          else console.log('BD atualizada')
        })
      }

    }
    res.render('index', { lista: data });
  })
})
module.exports = router;
