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

var url = "http://162.243.4.229/servidor/empresajr/processa.php";

var usuario = [];

var result = {};

var xhr = Ti.Network.createHTTPClient();

exports.login = function(username, password, _callback) {
    if (0 == usuario.length) {
        var params = {
            username: username,
            password: password,
            type: "mobile",
            "class": "login"
        };
        doPost(params, _callback);
    }
};

exports.logout = function() {
    usuario = {};
};

exports.url = url;

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