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
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.desempenho.add($.__views.navView);
    $.__views.__alloyId191 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId191"
    });
    $.__views.navView.add($.__views.__alloyId191);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId191.add($.__views.button);
    $.__views.__alloyId192 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId192"
    });
    $.__views.button.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
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
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId194"
    });
    $.__views.desempenho.add($.__views.__alloyId194);
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
        left: "10",
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
        text: "AVALIAÇÃO DE \nDESEMPENHO",
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
        text: "A Avaliação de Desempenho é um projeto da consultoria que fornece ferramentas que auxiliam os gestores a acompanhar o alcance dos objetivos da empresa através da mensuração do desempenho dos funcionários.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam um sistema que auxilie os gestores a acompanhar o desempenho dos funcionários;\n	• Desejam o progresso, constante, de seus funcionários tanto profissional quanto pessoal, através da identificação dos pontos fortes e fracos de cada colaborador;\n	• Buscam otimizar o alcance de resultados da empresa por meio da melhoria do desempenho dos funcionários.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId200"
    });
    $.__views.__alloyId194.add($.__views.__alloyId200);
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