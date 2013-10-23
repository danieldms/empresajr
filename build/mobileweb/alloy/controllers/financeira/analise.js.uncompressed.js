function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "financeira/analise";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.analise = Ti.UI.createView({
        layout: "vertical",
        id: "analise"
    });
    $.__views.analise && $.addTopLevelView($.__views.analise);
    $.__views.navView = Ti.UI.createView({
        height: "44dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "/lightbg.png",
        id: "navView"
    });
    $.__views.analise.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId146 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId146"
    });
    $.__views.button.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
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
        text: "Consultoria Financeira",
        id: "__alloyId147"
    });
    $.__views.navView.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId148"
    });
    $.__views.analise.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: 100,
        layout: "horizontal",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        top: "20",
        id: "__alloyId150"
    });
    $.__views.__alloyId149.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        left: 20,
        right: 10,
        top: 30,
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        text: "ANÁLISE FINANCEIRA",
        id: "__alloyId151"
    });
    $.__views.__alloyId149.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId152"
    });
    $.__views.__alloyId148.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId153"
    });
    $.__views.__alloyId152.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Este serviço de consultoria voltado para a análise do desempenho da empresa, através de seus relatórios financeiros e contábeis. Ideal para fornecer insumos que auxiliem na tomada de decisão e para que o gestor conheça a real situação da empresa.\n\nEste serviço é indicado para empresas que:\n	• Buscam por análises mais embasadas para conhecer a real situação da mesma.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId154"
    });
    $.__views.__alloyId148.add($.__views.__alloyId154);
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