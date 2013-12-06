function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "negocio/estudo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.estudo = Ti.UI.createView({
        layout: "vertical",
        id: "estudo"
    });
    $.__views.estudo && $.addTopLevelView($.__views.estudo);
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.estudo.add($.__views.navView);
    $.__views.__alloyId231 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId231"
    });
    $.__views.navView.add($.__views.__alloyId231);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId231.add($.__views.button);
    $.__views.__alloyId232 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId232"
    });
    $.__views.button.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createLabel({
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
        text: "Quer Abrir seu Negócio?",
        id: "__alloyId233"
    });
    $.__views.__alloyId231.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId234"
    });
    $.__views.estudo.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId235"
    });
    $.__views.__alloyId234.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        id: "__alloyId236"
    });
    $.__views.__alloyId235.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        left: "140dp",
        right: 10,
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        height: "100dp",
        verticalAlign: "center",
        text: "ESTUDO DE \nVIABILIDADE",
        id: "__alloyId237"
    });
    $.__views.__alloyId235.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId238"
    });
    $.__views.__alloyId234.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "O Estudo de Viabilidade consiste em um projeto de consultoria baseado em análises de pesquisa de mercado e de estudo financeiro, que aponta as possibilidades de sucesso ou insucesso de um empreendimento.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam saber se há espaço no mercado para seu novo produto/serviço;\n	• Desejam saber se o negócio é viável dentro dos moldes pensados.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId240"
    });
    $.__views.__alloyId234.add($.__views.__alloyId240);
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
    $.button.addEventListener("touchend", function() {
        this.backgroudColor = "transparent";
        this.opacity = 1;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;