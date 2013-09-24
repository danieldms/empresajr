function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mainView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mainView = Ti.UI.createView({
        layout: "vertical",
        id: "mainView"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.mainView.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        height: "46dp",
        color: "#FFF",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            x: "0dp",
            y: "1dp"
        },
        text: "Empresa Jr.",
        id: "__alloyId80"
    });
    $.__views.navView.add($.__views.__alloyId80);
    var __alloyId81 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundImage: "images/outros/background.png",
        layout: "vertical"
    });
    __alloyId81.push($.__views.view1);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "CONSULTORIA",
        id: "__alloyId82"
    });
    $.__views.view1.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "ORGANIZACIONAL",
        id: "__alloyId83"
    });
    $.__views.view1.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#115a98",
        left: 30,
        top: 10,
        right: 50,
        text: "ANÁLISE GERAL DA ORGANIZAÇÃO PARA QUE SE ESTABELEÇA UM MODELO DE ESTRUTURA MAIS ADEQUADO.",
        id: "__alloyId84"
    });
    $.__views.view1.add($.__views.__alloyId84);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundImage: "images/outros/background.png",
        layout: "vertical"
    });
    __alloyId81.push($.__views.view2);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "SOLUÇÃO",
        id: "__alloyId85"
    });
    $.__views.view2.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "EM MARKETING",
        id: "__alloyId86"
    });
    $.__views.view2.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#115a98",
        left: 30,
        top: 10,
        right: 50,
        text: "PESQUISAS DE MERCADO E ESTUDO EXPLORATÓRIOS, ELABORAÇÃO DE PLANOS DE MARKETING.",
        id: "__alloyId87"
    });
    $.__views.view2.add($.__views.__alloyId87);
    $.__views.scrollview = Ti.UI.createScrollableView({
        views: __alloyId81,
        id: "scrollview",
        showPagingControl: "true"
    });
    $.__views.mainView.add($.__views.scrollview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;