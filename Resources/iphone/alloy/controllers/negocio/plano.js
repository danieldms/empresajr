function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "negocio/plano";
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
    $.__views.__alloyId199 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId199"
    });
    $.__views.plano.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
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
        text: "PLANO DE \nNEGÓCIOS",
        id: "__alloyId202"
    });
    $.__views.__alloyId200.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId203"
    });
    $.__views.__alloyId199.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId204"
    });
    $.__views.__alloyId203.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "O Plano de Negócios é um projeto da consultoria que norteia o início ou expansão de qualquer negócio e projeta seus resultados futuros.\n\nEste serviço é indicado para empresas que:\n\n	• Desejem a estruturação total de um futuro empreendimento;\n	• Desejem analisar a viabilidade econômica - financeira do futuro empreendimento.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId205"
    });
    $.__views.__alloyId199.add($.__views.__alloyId205);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;