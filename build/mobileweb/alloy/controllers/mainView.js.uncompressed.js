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
        height: "44dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "/lightbg.png",
        id: "navView"
    });
    $.__views.mainView.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId98 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId98"
    });
    $.__views.button.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        text: "MENU",
        left: "55dp",
        color: "#2276be",
        id: "__alloyId99"
    });
    $.__views.navView.add($.__views.__alloyId99);
    var __alloyId100 = [];
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical"
    });
    __alloyId100.push($.__views.view);
    $.__views.__alloyId101 = Ti.UI.createImageView({
        image: "/images/outros/home_empresajr.png",
        width: "200",
        height: "48",
        top: "70",
        left: "40",
        id: "__alloyId101"
    });
    $.__views.view.add($.__views.__alloyId101);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical"
    });
    __alloyId100.push($.__views.view);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "CONSULTORIA",
        id: "__alloyId102"
    });
    $.__views.view.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "ORGANIZACIONAL",
        id: "__alloyId103"
    });
    $.__views.view.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#115a98",
        left: 30,
        top: 5,
        right: 50,
        text: "ANÁLISE GERAL DA ORGANIZAÇÃO PARA QUE SE ESTABELEÇA UM MODELO DE ESTRUTURA MAIS ADEQUADO.",
        id: "__alloyId104"
    });
    $.__views.view.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createImageView({
        image: "/images/outros/home_icon1.png",
        width: "150",
        height: "179",
        top: "20",
        id: "__alloyId105"
    });
    $.__views.view.add($.__views.__alloyId105);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical"
    });
    __alloyId100.push($.__views.view);
    $.__views.__alloyId106 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "SOLUÇÃO",
        id: "__alloyId106"
    });
    $.__views.view.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "EM MARKETING",
        id: "__alloyId107"
    });
    $.__views.view.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#115a98",
        left: 30,
        top: 5,
        right: 50,
        text: "PESQUISAS DE MERCADO E ESTUDO EXPLORATÓRIOS, ELABORAÇÃO DE PLANOS DE MARKETING.",
        id: "__alloyId108"
    });
    $.__views.view.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createImageView({
        image: "/images/outros/home_icon2.png",
        width: "150",
        height: "194",
        top: "20",
        id: "__alloyId109"
    });
    $.__views.view.add($.__views.__alloyId109);
    $.__views.scrollview = Ti.UI.createScrollableView({
        views: __alloyId100,
        id: "scrollview",
        showPagingControl: "true",
        backgroundImage: "/images/outros/background.png"
    });
    $.__views.mainView.add($.__views.scrollview);
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