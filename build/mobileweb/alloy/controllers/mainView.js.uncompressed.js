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
    $.__views.__alloyId97 = Ti.UI.createLabel({
        text: "MENU",
        left: "55dp",
        color: "#2276be",
        id: "__alloyId97"
    });
    $.__views.navView.add($.__views.__alloyId97);
    var __alloyId98 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical"
    });
    __alloyId98.push($.__views.view1);
    $.__views.__alloyId99 = Ti.UI.createImageView({
        image: "images/outros/home_empresajr.png",
        width: "200",
        height: "48",
        top: "70",
        left: "40",
        id: "__alloyId99"
    });
    $.__views.view1.add($.__views.__alloyId99);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical"
    });
    __alloyId98.push($.__views.view2);
    $.__views.__alloyId100 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "CONSULTORIA",
        id: "__alloyId100"
    });
    $.__views.view2.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "ORGANIZACIONAL",
        id: "__alloyId101"
    });
    $.__views.view2.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#115a98",
        left: 30,
        top: 5,
        right: 50,
        text: "ANÁLISE GERAL DA ORGANIZAÇÃO PARA QUE SE ESTABELEÇA UM MODELO DE ESTRUTURA MAIS ADEQUADO.",
        id: "__alloyId102"
    });
    $.__views.view2.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createImageView({
        image: "images/outros/home_icon1.png",
        width: "150",
        height: "179",
        top: "20",
        id: "__alloyId103"
    });
    $.__views.view2.add($.__views.__alloyId103);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical"
    });
    __alloyId98.push($.__views.view3);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "SOLUÇÃO",
        id: "__alloyId104"
    });
    $.__views.view3.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "EM MARKETING",
        id: "__alloyId105"
    });
    $.__views.view3.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#115a98",
        left: 30,
        top: 5,
        right: 50,
        text: "PESQUISAS DE MERCADO E ESTUDO EXPLORATÓRIOS, ELABORAÇÃO DE PLANOS DE MARKETING.",
        id: "__alloyId106"
    });
    $.__views.view3.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createImageView({
        image: "images/outros/home_icon2.png",
        width: "150",
        height: "194",
        top: "20",
        id: "__alloyId107"
    });
    $.__views.view3.add($.__views.__alloyId107);
    $.__views.scrollview = Ti.UI.createScrollableView({
        views: __alloyId98,
        id: "scrollview",
        showPagingControl: "true",
        backgroundImage: "images/outros/background.png"
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