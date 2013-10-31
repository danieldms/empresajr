function doPost(params, _callback) {
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status && null != xhr.responseText) {
            var json = JSON.parse(xhr.responseText);
            _callback && _callback(json);
        }
    };
    var data = "?";
    for (var prop in params) data += prop + "=" + params[prop] + "&";
    xhr.open("POST", url + data);
    xhr.send();
}

var url = "http://empresajr.com/app/processa.php";

var result = {};

var xhr = Ti.Network.createHTTPClient();

exports.login = function(username, password, _callback) {
    var params = {
        username: username,
        password: password,
        type: "mobile",
        "class": "login"
    };
    doPost(params, _callback);
};

exports.sendQuestionario = function(data, _callback) {
    doPost(data, _callback);
};

exports.getProjeto = function(_id, _callback) {
    var params = {
        usuarios_id: _id,
        type: "mobile",
        "class": "getProjeto"
    };
    doPost(params, _callback);
};

exports.newSac = function(nome, assunto, email, telefone, mensagem, _callback) {
    var params = {
        nome: nome,
        assunto: assunto,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        type: "mobile",
        "class": "newSac"
    };
    doPost(params, _callback);
};

exports.newComentario = function(descricao, projetos_id, usuarios_id, _callback) {
    var params = {
        descricao: descricao,
        projetos_id: projetos_id,
        usuarios_id: usuarios_id,
        type: "mobile",
        "class": "newComentario"
    };
    doPost(params, _callback);
};