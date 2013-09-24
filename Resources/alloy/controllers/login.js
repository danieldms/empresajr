function Controller() {
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
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.login.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        text: "SAC",
        id: "title"
    });
    $.__views.navView.add($.__views.title);
    $.__views.scrollview = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        id: "scrollview",
        scrollingEnabled: "true"
    });
    $.__views.login.add($.__views.scrollview);
    $.__views.__alloyId71 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100",
        layout: "horizontal",
        id: "__alloyId71"
    });
    $.__views.scrollview.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createImageView({
        image: "images/outros/header_login.png",
        height: "60",
        width: "60",
        left: "10",
        top: "20",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.label = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        left: 20,
        right: 10,
        top: "20",
        color: "#115a98",
        text: "ACOMPANHE O \nANDAMENTO DO SEU \nPROJETO",
        id: "label",
        width: "auto"
    });
    $.__views.__alloyId71.add($.__views.label);
    $.__views.__alloyId73 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId73"
    });
    $.__views.scrollview.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "LOGIN",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        backgroundColor: "#eeeeee",
        left: "20",
        right: "20",
        top: "20",
        height: "162",
        layout: "vertical",
        id: "__alloyId75"
    });
    $.__views.scrollview.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        top: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Usuário:",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.username = Ti.UI.createTextField({
        width: 180,
        top: "10",
        left: "20",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "username"
    });
    $.__views.__alloyId76.add($.__views.username);
    $.__views.__alloyId78 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "10",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Senha:",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.senha = Ti.UI.createTextField({
        width: 180,
        top: "10",
        left: "20",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "senha"
    });
    $.__views.__alloyId78.add($.__views.senha);
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
        backgroundImage: "back_button.png",
        title: "ENTRAR",
        id: "entrar"
    });
    $.__views.__alloyId75.add($.__views.entrar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    $.entrar.addEventListener("click", function() {
        Ti.App.fireEvent("app:setLayout", {
            layout: "sac",
            swipe: true
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;