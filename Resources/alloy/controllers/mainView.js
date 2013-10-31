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
    $.__views.__alloyId108 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId108"
    });
    $.__views.button.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        text: "MENU",
        left: "55dp",
        color: "#2276be",
        id: "__alloyId109"
    });
    $.__views.navView.add($.__views.__alloyId109);
    var __alloyId110 = [];
    $.__views.view = Ti.UI.createView({
        id: "view",
        ignore: "true"
    });
    __alloyId110.push($.__views.view);
    $.__views.__alloyId111 = Ti.UI.createImageView({
        image: "/images/outros/home_empresajr.png",
        width: "200",
        height: "48",
        top: "70",
        id: "__alloyId111"
    });
    $.__views.view.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        layout: "vertical",
        ignore: "true",
        id: "__alloyId112"
    });
    __alloyId110.push($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "SOLUÇÃO EM",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "FINANÇAS",
        id: "__alloyId114"
    });
    $.__views.__alloyId112.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#115a98",
        left: 30,
        top: 5,
        right: 50,
        text: "EXAME APURADO DA SITUAÇÃO FINANCEIRA DA ORGANIZAÇÃO E UM MELHOR GERENCIAMENTO.",
        id: "__alloyId115"
    });
    $.__views.__alloyId112.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createImageView({
        image: "/images/outros/financeira.png",
        width: "150",
        height: "159",
        top: "20",
        id: "__alloyId116"
    });
    $.__views.__alloyId112.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        layout: "vertical",
        ignore: "true",
        id: "__alloyId117"
    });
    __alloyId110.push($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "CONSULTORIA",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "ORGANIZACIONAL",
        id: "__alloyId119"
    });
    $.__views.__alloyId117.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#115a98",
        left: 30,
        top: 5,
        right: 50,
        text: "ANÁLISE GERAL DA ORGANIZAÇÃO PARA QUE SE ESTABELEÇA UM MODELO DE ESTRUTURA MAIS ADEQUADO.",
        id: "__alloyId120"
    });
    $.__views.__alloyId117.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createImageView({
        image: "/images/outros/home_icon1.png",
        width: "150",
        height: "179",
        top: "20",
        id: "__alloyId121"
    });
    $.__views.__alloyId117.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        layout: "vertical",
        ignore: "true",
        id: "__alloyId122"
    });
    __alloyId110.push($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: 30,
        text: "SOLUÇÃO",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#115a98",
        left: 30,
        top: "0",
        text: "EM MARKETING",
        id: "__alloyId124"
    });
    $.__views.__alloyId122.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#115a98",
        left: 30,
        top: 5,
        right: 50,
        text: "PESQUISAS DE MERCADO E ESTUDO EXPLORATÓRIOS, ELABORAÇÃO DE PLANOS DE MARKETING.",
        id: "__alloyId125"
    });
    $.__views.__alloyId122.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createImageView({
        image: "/images/outros/home_icon2.png",
        width: "150",
        height: "194",
        top: "20",
        id: "__alloyId126"
    });
    $.__views.__alloyId122.add($.__views.__alloyId126);
    $.__views.scrollview = Ti.UI.createScrollableView({
        views: __alloyId110,
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