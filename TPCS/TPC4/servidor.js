var http = require('http')
var fs = require('fs');
var url = require('url');
var nanoid = require('nanoid');
var jsonfile = require('jsonfile');


var arras = [...Array(448).keys()];

var myserver = http.createServer(function (req, res) {
    var pathN = parseInt(url.parse(req.url).pathname.split('/')[1]);
    var pathDHT = req.url.split('/')[1];
    console.log(req.method + ' - ' + req.url);
    if (req.method == 'GET') {
        if (req.url == '/w3.css') {
            fs.readFile("w3.css", (erro, dados) => {
                if (!erro) {
                    res.writeHead(200, { 'Content-type': 'text/css' })
                    res.write(dados);
                }
                else {
                    res.writeHead(200, { 'Content-type': 'text/plain' })
                    res.write(pug.renderFile("Erro na leitura w3.css"));
                }
                res.end();
            })
        }


        if (req.url == '/') {
            fs.readFile('./project.html', null, function (error, dat) {
                if (!error) {
                    res.writeHead(200, { 'Content-type': 'text/html; charset-utf-8' });
                    res.write(dat);
                    res.end();
                }
                else {
                    res.writeHead(200, { 'Content-type': 'text/plain' });
                    res.end("Erro " + erro);
                }
                res.end;
            })
        }
        if(pathDHT == 'doc2html.xsl'){
            fs.readFile('doc2html.xsl',function(erro, dados){
                if(!erro){
                    console.log("ola");
                res.writeHead(200, {'Content-type': 'text/xsl'});
                res.write(dados);
                }
                else{
                    result.writeHead(200, {'Content-Type':'text/plain'});
                    result.write('Error reading doc2html ');
                }
                res.end();
        });
    }
        
        if(arras.includes(pathN)){
            fs.readFile('./data/doc'+pathN+'.xml',function(erro, dados){
                if(!erro){
                    console.log("ola2");
                res.writeHead(200, { 'Content-type': 'text/xml;charset=utf-8' });
                res.write(dados);
                res.end();
                }
                else{
                    result.writeHead(200, {'Content-Type':'text/plain'});
                    result.write('Error reading doc.xml');
                }
                res.end();
            })
            
        }
       
}});
console.log("Servidor a escuta na porta 3022");

myserver.listen(3022);  