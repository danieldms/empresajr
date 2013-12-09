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
    $.__views.headers = Ti.UI.createView({
        id: "headers"
    });
    $.__views.estudo.add($.__views.headers);
    $.__views.__alloyId194 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId194"
    });
    $.__views.estudo.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
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
        id: "__alloyId197"
    });
    $.__views.__alloyId195.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId198"
    });
    $.__views.__alloyId194.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "O Estudo de Viabilidade consiste em um projeto de consultoria baseado em análises de pesquisa de mercado e de estudo financeiro, que aponta as possibilidades de sucesso ou insucesso de um empreendimento.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam saber se há espaço no mercado para seu novo produto/serviço;\n	• Desejam saber se o negócio é viável dentro dos moldes pensados.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId200"
    });
    $.__views.__alloyId194.add($.__views.__alloyId200);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;