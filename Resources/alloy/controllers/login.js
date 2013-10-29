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
    $.__views.navView = Ti.UI.createView({
        height: "44dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "/lightbg.png",
        id: "navView"
    });
    $.__views.login.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId90 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId90"
    });
    $.__views.button.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        height: "46dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "#FFF",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            x: "0dp",
            y: "1dp"
        },
        text: "SAC",
        id: "__alloyId91"
    });
    $.__views.navView.add($.__views.__alloyId91);
    $.__views.scrollview = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        id: "scrollview",
        scrollingEnabled: "true"
    });
    $.__views.login.add($.__views.scrollview);
    $.__views.__alloyId92 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100",
        layout: "horizontal",
        id: "__alloyId92"
    });
    $.__views.scrollview.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createImageView({
        image: "/images/outros/header_login.png",
        height: "60",
        width: "60",
        left: "10",
        top: "20",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.label = Ti.UI.createLabel({
        left: 20,
        right: 10,
        top: "20",
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        text: "ACOMPANHE O \nANDAMENTO DO SEU \nPROJETO",
        id: "label",
        width: "auto"
    });
    $.__views.__alloyId92.add($.__views.label);
    $.__views.__alloyId94 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId94"
    });
    $.__views.scrollview.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "LOGIN",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        backgroundColor: "#eeeeee",
        left: "20",
        right: "20",
        top: "20",
        height: "162",
        layout: "vertical",
        id: "__alloyId96"
    });
    $.__views.scrollview.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        top: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Usuário:",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.username = Ti.UI.createTextField({
        width: 180,
        top: "10",
        left: "20",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "username"
    });
    $.__views.__alloyId97.add($.__views.username);
    $.__views.__alloyId99 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "10",
        id: "__alloyId99"
    });
    $.__views.__alloyId96.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Senha:",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
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
    $.__views.__alloyId99.add($.__views.senha);
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
    $.__views.__alloyId96.add($.__views.entrar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.button.addEventListener("click", function() {
        Ti.App.fireEvent("app:toggle", null);
    });
    $.button.addEventListener("touchstart", function() {
        this.backgroudColor = "#000";
        this.opacity = .2;
    });
    $.senha.addEventListener("return", function() {
        login();
    });
    $.button.addEventListener("touchend", function() {
        this.backgroudColor = "transparent";
        this.opacity = 1;
    });
    $.entrar.addEventListener("click", function() {
        login();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;