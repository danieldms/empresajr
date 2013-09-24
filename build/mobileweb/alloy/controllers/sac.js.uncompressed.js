function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sac";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.sac = Ti.UI.createView({
        layout: "vertical",
        id: "sac"
    });
    $.__views.sac && $.addTopLevelView($.__views.sac);
    $.__views.__alloyId114 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId114"
    });
    $.__views.sac.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Seu Projeto",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        height: "120",
        width: "100%",
        layout: "horizontal",
        id: "__alloyId117"
    });
    $.__views.__alloyId114.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        layout: "vertical",
        width: "80",
        left: "0",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createImageView({
        image: "/ooo.png",
        width: "50",
        height: "50",
        left: "10",
        top: "10",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "PREVISTO",
        top: "15",
        left: "10",
        id: "__alloyId120"
    });
    $.__views.__alloyId118.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "REALIZADO",
        left: "10",
        top: "5",
        id: "__alloyId121"
    });
    $.__views.__alloyId118.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        left: "0",
        width: "200",
        id: "__alloyId122"
    });
    $.__views.__alloyId117.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        text: "Titulo do projeto 2000",
        top: "10",
        left: "0",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "DEADLINE",
        top: "5",
        left: "0",
        id: "__alloyId124"
    });
    $.__views.__alloyId122.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        text: "12/08/2013",
        left: "0",
        id: "__alloyId125"
    });
    $.__views.__alloyId122.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        width: "200",
        backgroundColor: "#F5F5F5",
        top: "9",
        height: "15",
        left: "0",
        layout: "vertical",
        id: "__alloyId126"
    });
    $.__views.__alloyId122.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: 0,
                y: "50%"
            },
            endPoint: {
                x: "100%",
                y: "50%"
            },
            colors: [ {
                color: "#125a95",
                offset: 0
            }, {
                color: "#4898dd",
                offset: 1
            } ],
            height: 10,
            left: 0
        },
        width: "80%",
        height: "15",
        top: "0",
        left: "0",
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        text: "80%",
        color: "#FFF",
        top: "-17",
        id: "__alloyId128"
    });
    $.__views.__alloyId126.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createView({
        width: "200",
        backgroundColor: "#F5F5F5",
        top: "4",
        height: "15",
        left: "0",
        layout: "vertical",
        id: "__alloyId129"
    });
    $.__views.__alloyId122.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: 0,
                y: "50%"
            },
            endPoint: {
                x: "100%",
                y: "50%"
            },
            colors: [ {
                color: "#125a95",
                offset: 0
            }, {
                color: "#1c5bc4",
                offset: 1
            } ],
            height: 10,
            left: 0
        },
        width: "80%",
        height: "15",
        left: "0",
        top: "0",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        text: "80%",
        color: "#FFF",
        top: "-17",
        id: "__alloyId131"
    });
    $.__views.__alloyId129.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId132"
    });
    $.__views.__alloyId114.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;