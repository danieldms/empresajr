function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gestao/pesquisa";
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
    $.__views.__alloyId170 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId170"
    });
    $.__views.pesquisa.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId171"
    });
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId172"
    });
    $.__views.__alloyId171.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        left: "140dp",
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        height: "100dp",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "PESQUISA DE \nCLIMA ORGANIZACIONAL",
        id: "__alloyId173"
    });
    $.__views.__alloyId171.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId174"
    });
    $.__views.__alloyId170.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "A pesquisa de clima Organizacional visa proporcionar a análise do ambiente interno da organização, bem como o conjunto de condições que caracterizam o estado de satisfação ou insatisfação dos funcionários na empresa.\n\nEste serviço é indicado para empresas que:\n\n	• Avaliar a satisfação dos colaboradores em relação ao ambiente organizacional;\n	• Busquem traçar ações que permitam a manutenção de um bom clima para o trabalho, revertendo quadros de insatisfação.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId176"
    });
    $.__views.__alloyId170.add($.__views.__alloyId176);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;