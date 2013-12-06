function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "organizacional/padronizacao";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.padronizacao = Ti.UI.createView({
        layout: "vertical",
        id: "padronizacao"
    });
    $.__views.padronizacao && $.addTopLevelView($.__views.padronizacao);
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.padronizacao.add($.__views.navView);
    $.__views.__alloyId261 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId261"
    });
    $.__views.navView.add($.__views.__alloyId261);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId261.add($.__views.button);
    $.__views.__alloyId262 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId262"
    });
    $.__views.button.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
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
        text: "Consultoria Organizacional",
        id: "__alloyId263"
    });
    $.__views.__alloyId261.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId264"
    });
    $.__views.padronizacao.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId266"
    });
    $.__views.__alloyId265.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
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
        text: "PADRONIZAÇÃO DE \nPROCESSESOS",
        id: "__alloyId267"
    });
    $.__views.__alloyId265.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId268"
    });
    $.__views.__alloyId264.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Padronização de Processos é um projeto oferecido pela consultoria Organizacional que tem o objetivo de melhorar o fluxo de informação da empresa, assim como garantir que as atividades ocorram de uma forma pré-estabelecida.\n\nEste serviço é indicado para empresas que:\n\n	• Não possuem uma definição bem estabelecida dos seus processos;\n	• Necessitem de ferramentas que auxiliem no controle.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId270"
    });
    $.__views.__alloyId264.add($.__views.__alloyId270);
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