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
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.plano.add($.__views.navView);
    $.__views.__alloyId241 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId241"
    });
    $.__views.navView.add($.__views.__alloyId241);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId241.add($.__views.button);
    $.__views.__alloyId242 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId242"
    });
    $.__views.button.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
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
        text: "Quer Abrir seu Negócio?",
        id: "__alloyId243"
    });
    $.__views.__alloyId241.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId244"
    });
    $.__views.plano.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId245"
    });
    $.__views.__alloyId244.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId246"
    });
    $.__views.__alloyId245.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createLabel({
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
        id: "__alloyId247"
    });
    $.__views.__alloyId245.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId248"
    });
    $.__views.__alloyId244.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId249"
    });
    $.__views.__alloyId248.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "O Plano de Negócios é um projeto da consultoria que norteia o início ou expansão de qualquer negócio e projeta seus resultados futuros.\n\nEste serviço é indicado para empresas que:\n\n	• Desejem a estruturação total de um futuro empreendimento;\n	• Desejem analisar a viabilidade econômica - financeira do futuro empreendimento.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId250"
    });
    $.__views.__alloyId244.add($.__views.__alloyId250);
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