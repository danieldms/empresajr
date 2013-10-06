function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gestao/desenpenho";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.desenpenho = Ti.UI.createView({
        layout: "vertical",
        id: "desenpenho"
    });
    $.__views.desenpenho && $.addTopLevelView($.__views.desenpenho);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.desenpenho.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId163 = Ti.UI.createLabel({
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
        text: "Gestão de Pessoas",
        id: "__alloyId163"
    });
    $.__views.navView.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId164"
    });
    $.__views.desenpenho.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: 100,
        layout: "horizontal",
        id: "__alloyId165"
    });
    $.__views.__alloyId164.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createImageView({
        image: "images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        top: "20",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
        left: 20,
        right: 10,
        top: 30,
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        text: "AVALIAÇÃO DE \nDESEMPENHO",
        id: "__alloyId167"
    });
    $.__views.__alloyId165.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId168"
    });
    $.__views.__alloyId164.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId169"
    });
    $.__views.__alloyId168.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "A Avaliação de Desempenho é um projeto da consultoria que fornece ferramentas que auxiliam os gestores a acompanhar o alcance dos objetivos da empresa através da mensuração do desempenho dos funcionários.\n\nEste serviço é indicado para empresas que:\n	• Desejam um sistema que auxilie os gestores a acompanhar o desempenho dos funcionários;\n	• Desejam o progresso, constante, de seus funcionários tanto profissional quanto pessoal, através da identificação dos pontos fortes e fracos de cada colaborador;\n	• Buscam otimizar o alcance de resultados da empresa por meio da melhoria do desempenho dos funcionários.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId170"
    });
    $.__views.__alloyId164.add($.__views.__alloyId170);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;