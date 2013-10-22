function doPost(params, _callback) {
    xhr.onload = function(e) {
        if (null != e) {
            var json = JSON.parse(this.responseText);
            _callback && _callback(json);
        }
    };
    xhr.open("POST", url);
    xhr.send(params);
}

var url = "http://162.243.4.229/servidor/empresajr/processa.php";

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