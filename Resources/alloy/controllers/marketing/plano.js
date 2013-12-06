function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "marketing/plano";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.plano = Ti.UI.createView({
        layout: "vertical",
        id: "plano"
    });
    $.__views.plano && $.addTopLevelView($.__views.plano);
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.plano.add($.__views.navView);
    $.__views.__alloyId221 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId221"
    });
    $.__views.navView.add($.__views.__alloyId221);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId221.add($.__views.button);
    $.__views.__alloyId222 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId222"
    });
    $.__views.button.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
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
        text: "Consultoria Marketing",
        id: "__alloyId223"
    });
    $.__views.__alloyId221.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId224"
    });
    $.__views.plano.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
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
        text: "PLANO DE \nMARKETING",
        id: "__alloyId227"
    });
    $.__views.__alloyId225.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId228"
    });
    $.__views.__alloyId224.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "O plano de Marketing é um serviço de consultoria que consiste na definição de objetivos para orientar os passos da organização e na criação de táticas, estratégias e planos de ação para direcionar o produto ou serviço ao mercado.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam definir estratégias de atuação no mercado;\n	• Querem identificar suas principais ameaças, oportunidades, potencialidades e fraquezas;\n	• Desejam obter dados estratégicos sobre o produto e/ou serviço;\n	• Desejam posicionar-se competitivamente.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId230"
    });
    $.__views.__alloyId224.add($.__views.__alloyId230);
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