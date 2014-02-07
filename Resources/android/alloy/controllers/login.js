function Controller() {
    function login() {
        if (null != $.username.value && null != $.senha.value) {
            Ti.App.fireEvent("app:preload", null);
            Alloy.Globals.Util.login($.username.value, $.senha.value, processa);
        }
    }
    function processa(e) {
        Ti.App.fireEvent("app:preload", null);
        if (null != e) if ("error" != e.type) if (e.projeto.count > 0) {
            Alloy.Globals.Usuario = e;
            setProjeto();
        } else alert(e.projeto.message); else alert(e.message);
    }
    function setProjeto() {
        Ti.App.fireEvent("app:setLayout", {
            layout: "sac",
            title: "SAC",
            swipe: false
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createView({
        layout: "vertical",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.headers = Ti.UI.createView({
        id: "headers"
    });
    $.__views.login.add($.__views.headers);
    $.__views.scrollview = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        id: "scrollview",
        scrollingEnabled: "true"
    });
    $.__views.login.add($.__views.scrollview);
    $.__views.__alloyId94 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId94"
    });
    $.__views.scrollview.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createImageView({
        image: "/images/outros/header_login.png",
        height: "60",
        width: "60",
        left: "10",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        left: "90",
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        height: "100dp",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "ACOMPANHE O \nANDAMENTO DO SEU \nPROJETO",
        width: "auto",
        id: "__alloyId96"
    });
    $.__views.__alloyId94.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId97"
    });
    $.__views.scrollview.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "LOGIN",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        backgroundColor: "#eeeeee",
        left: "20",
        right: "20",
        top: "20",
        height: "162",
        layout: "vertical",
        id: "__alloyId99"
    });
    $.__views.scrollview.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        top: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Usuário:",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.username = Ti.UI.createTextField({
        width: 180,
        top: "10",
        left: "20",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "username"
    });
    $.__views.__alloyId100.add($.__views.username);
    $.__views.__alloyId102 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "10",
        id: "__alloyId102"
    });
    $.__views.__alloyId99.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Senha:",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.senha = Ti.UI.createTextField({
        width: 180,
        top: "10",
        left: "29",
        borderWidth: 0,
        borderColor: "#FFF",
        passwordMask: "true",
        returnKeyType: Ti.UI.RETURNKEY_GO,
        id: "senha"
    });
    $.__views.__alloyId102.add($.__views.senha);
    $.__views.entrar = Ti.UI.createButton({
        left: 10,
        bottom: 10,
        right: 10,
        height: 40,
        borderColor: "#2155bb",
        font: {
            fontWeight: "bold"
        },
        borderRadius: 0,
        backgroundColor: "transparent",
        color: "white",
        backgroundImage: "/back_button.png",
        title: "ENTRAR",
        id: "entrar"
    });
    $.__views.__alloyId99.add($.__views.entrar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    $.senha.addEventListener("return", function() {
        login();
    });
    $.entrar.addEventListener("click", function() {
        login();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;