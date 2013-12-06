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
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.pesquisa.add($.__views.navView);
    $.__views.__alloyId211 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId211"
    });
    $.__views.navView.add($.__views.__alloyId211);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId211.add($.__views.button);
    $.__views.__alloyId212 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId212"
    });
    $.__views.button.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
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
        text: "Consultoria Marketing",
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId214"
    });
    $.__views.pesquisa.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
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
        id: "__alloyId217"
    });
    $.__views.__alloyId215.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId218"
    });
    $.__views.__alloyId214.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "A Pesquisa de Mercado é um ramo da consultoria que, através da coleta de dados sobre o ambiente externo e interno, possibilita um suporte para as decisões de marketing, ampliando a sua efetividade.\n\nEste serviço é indicado para empresas que:\n\n	• Desejam conhecer um mercado específico;\n	• Desejam saber se há mercado para seu produto/serviço.\n	• Desejam saber se o negócio é viável dentro dos moldes pensados.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId220"
    });
    $.__views.__alloyId214.add($.__views.__alloyId220);
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