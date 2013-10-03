var url = "http://192.168.0.11/empresajr/servidor/processa.php";

var usuario = [];

var result = {};

var xhr = Ti.Network.createHTTPClient();

exports.login = function(username, password, _callback) {
    if (0 == usuario.length) {
        xhr.open("POST", url);
        var params = {
            username: username,
            password: password,
            type: "mobile",
            "class": "login"
        };
        xhr.send(params);
        xhr.onload = function(e) {
            if (null != e) {
                var json = JSON.parse(this.responseText);
                _callback && _callback(json);
            }
        };
    }
};

exports.logout = function() {
    usuario = {};
};

exports.getProjeto = function(_id, _callback) {
    if (null != _id) {
        xhr.open("POST", url);
        var params = {
            usuarios_id: _id,
            type: "mobile",
            "class": "getProjeto"
        };
        xhr.send(params);
        xhr.onload = function(e) {
            if (null != e) {
                var json = JSON.parse(this.responseText);
                _callback && _callback(json);
            }
        };
    }
};

exports.getUsuario = usuario;