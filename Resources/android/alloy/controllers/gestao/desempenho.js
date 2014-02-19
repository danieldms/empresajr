function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gestao/desempenho";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.desempenho = Ti.UI.createView({
        layout: "vertical",
        id: "desempenho"
    });
    $.__views.desempenho && $.addTopLevelView($.__views.desempenho);
    $.__views.__alloyId163 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId163"
    });
    $.__views.desempenho.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId164"
    });
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId165"
    });
    $.__views.__alloyId164.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createLabel({
        left: "140dp",
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        height: "100dp",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "AVALIAÇÃO DE \nDESEMPENHO",
        id: "__alloyId166"
    });
    $.__views.__alloyId164.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId167"
    });
    $.__views.__alloyId163.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "A Avaliação de Desempenho é um projeto da consultoria que fornece ferramentas que auxiliam os gestores a acompanhar o alcance dos objetivos da empresa através da mensuração do desempenho dos funcionários.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam um sistema que auxilie os gestores a acompanhar o desempenho dos funcionários;\n	• Desejam o progresso, constante, de seus funcionários tanto profissional quanto pessoal, através da identificação dos pontos fortes e fracos de cada colaborador;\n	• Buscam otimizar o alcance de resultados da empresa por meio da melhoria do desempenho dos funcionários.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId169"
    });
    $.__views.__alloyId163.add($.__views.__alloyId169);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;