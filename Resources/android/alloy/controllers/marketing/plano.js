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
    $.__views.headers = Ti.UI.createView({
        id: "headers"
    });
    $.__views.plano.add($.__views.headers);
    $.__views.__alloyId184 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId184"
    });
    $.__views.plano.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
        left: "140dp",
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        height: "100dp",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "PLANO DE \nMARKETING",
        id: "__alloyId187"
    });
    $.__views.__alloyId185.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId188"
    });
    $.__views.__alloyId184.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId189"
    });
    $.__views.__alloyId188.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "O plano de Marketing é um serviço de consultoria que consiste na definição de objetivos para orientar os passos da organização e na criação de táticas, estratégias e planos de ação para direcionar o produto ou serviço ao mercado.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam definir estratégias de atuação no mercado;\n	• Querem identificar suas principais ameaças, oportunidades, potencialidades e fraquezas;\n	• Desejam obter dados estratégicos sobre o produto e/ou serviço;\n	• Desejam posicionar-se competitivamente.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId190"
    });
    $.__views.__alloyId184.add($.__views.__alloyId190);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;