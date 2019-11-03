function apagaItem(ident){
    console.log("vou apagar");
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error))
}

function redirectar(ident){
    console.log("vou rederecionalo");
    window.location.assign('/alunos');
}