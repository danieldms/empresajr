function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "marketing/pesquisa";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.pesquisa = Ti.UI.createView({
        layout: "vertical",
        id: "pesquisa"
    });
    $.__views.pesquisa && $.addTopLevelView($.__views.pesquisa);
    $.__views.headers = Ti.UI.createView({
        id: "headers"
    });
    $.__views.pesquisa.add($.__views.headers);
    $.__views.__alloyId180 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId180"
    });
    $.__views.pesquisa.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
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
        text: "PESQUISA DE\nMERCADO",
        id: "__alloyId183"
    });
    $.__views.__alloyId181.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId184"
    });
    $.__views.__alloyId180.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "A Pesquisa de Mercado é um ramo da consultoria que, através da coleta de dados sobre o ambiente externo e interno, possibilita um suporte para as decisões de marketing, ampliando a sua efetividade.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam conhecer um mercado específico;\n	• Desejam saber se há mercado para seu produto/serviço.\n	• Desejam saber se o negócio é viável dentro dos moldes pensados.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId186"
    });
    $.__views.__alloyId180.add($.__views.__alloyId186);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;