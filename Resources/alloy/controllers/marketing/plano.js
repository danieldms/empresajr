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
        height: "44dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "/lightbg.png",
        id: "navView"
    });
    $.__views.plano.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId202 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId202"
    });
    $.__views.button.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
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
        id: "__alloyId203"
    });
    $.__views.navView.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId204"
    });
    $.__views.plano.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: 100,
        layout: "horizontal",
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        top: "20",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        left: 20,
        right: 10,
        top: 30,
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        text: "PLANO DE \nMARKETING",
        id: "__alloyId207"
    });
    $.__views.__alloyId205.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId208"
    });
    $.__views.__alloyId204.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "O plano de Marketing é um serviço de consultoria que consiste na definição de objetivos para orientar os passos da organização e na criação de táticas, estratégias e planos de ação para direcionar o produto ou serviço ao mercado.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam definir estratégias de atuação no mercado;\n	• Querem identificar suas principais ameaças, oportunidades, potencialidades e fraquezas;\n	• Desejam obter dados estratégicos sobre o produto e/ou serviço;\n	• Desejam posicionar-se competitivamente.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId210"
    });
    $.__views.__alloyId204.add($.__views.__alloyId210);
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