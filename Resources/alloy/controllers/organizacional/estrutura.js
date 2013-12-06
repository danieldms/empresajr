function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "organizacional/estrutura";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.estrutura = Ti.UI.createView({
        layout: "vertical",
        id: "estrutura"
    });
    $.__views.estrutura && $.addTopLevelView($.__views.estrutura);
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.estrutura.add($.__views.navView);
    $.__views.__alloyId251 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId251"
    });
    $.__views.navView.add($.__views.__alloyId251);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId251.add($.__views.button);
    $.__views.__alloyId252 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId252"
    });
    $.__views.button.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
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
        id: "__alloyId253"
    });
    $.__views.__alloyId251.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId254"
    });
    $.__views.estrutura.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId255"
    });
    $.__views.__alloyId254.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
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
        text: "ESTRUTURAÇÃO \nORGANIZACIONAL",
        id: "__alloyId257"
    });
    $.__views.__alloyId255.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId258"
    });
    $.__views.__alloyId254.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Este ramo da consultoria empresarial consiste em uma análise geral da estrutura organizacional, para que seja estabelecido o modelo mais eficiente de gestão. Envolve a elaboração de ferramentas que auxiliam a execução e o acompanhamento das atividades da empresa.\n\nEste serviço é indicado para empresas que:\n\n	• Necessitem de uma sistematização dos fluxos e rotinas e de uma padronização das atividades;\n	• Tenham funcionários (ou setores) sobrecarregados de atividades;\n	• Identifiquem ociosidade de funcionários ou setores;\n	• Cuja estrutura interna não acompanhou a velocidade de crescimento da organização.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId260"
    });
    $.__views.__alloyId254.add($.__views.__alloyId260);
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