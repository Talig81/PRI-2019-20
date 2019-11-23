$(function() {
    var cont = 1

    $("#mais1").click(e => {
        e.preventDefault()
        cont++;
        var campo = $('<div></div>', {class: 'w3-container', id: 'f' + cont})
        var desc = $('<div></div>', {class: 'w3-cell-row', id: 'desc' + cont})
        var descLabel = $('<label class="w3-cell">Descrição:</label>')
        var descInput = $('<input/>', {class: 'w3-input-w3-cell', type: "file", name: "desc" + cont})
        var ficheiro = $('<div></div>', {class: 'w3-cell-row', id: 'ficheiro' + cont})
        var ficheiroLabel = $('<label class="w3-cell">Ficheiro:</label>')
        var ficheiroInput = $('<input/>', {class: 'w3-input w3-cell', type: "text", name: "ficheiro" + cont})
        $("#lista").append(campo)
        $("#f"+cont).append(desc)
        $("#desc"+cont).append(descLabel, descInput)
        $("#f"+cont).append(ficheiro)
        $("#ficheiro"+cont).append(ficheiroLabel, ficheiroInput)
    })
})