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
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.sac.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId129 = Ti.UI.createLabel({
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
        id: "__alloyId129"
    });
    $.__views.navView.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId130"
    });
    $.__views.sac.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Seu Projeto",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        height: "120",
        width: "100%",
        layout: "horizontal",
        id: "__alloyId133"
    });
    $.__views.__alloyId130.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        layout: "vertical",
        width: "80",
        left: "0",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createImageView({
        image: "/ooo.png",
        width: "50",
        height: "50",
        left: "10",
        top: "10",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "PREVISTO",
        top: "15",
        left: "10",
        id: "__alloyId136"
    });
    $.__views.__alloyId134.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "REALIZADO",
        left: "10",
        top: "5",
        id: "__alloyId137"
    });
    $.__views.__alloyId134.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        left: "0",
        width: "200",
        id: "__alloyId138"
    });
    $.__views.__alloyId133.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        text: "Titulo do projeto 2000",
        top: "10",
        left: "0",
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "DEADLINE",
        top: "5",
        left: "0",
        id: "__alloyId140"
    });
    $.__views.__alloyId138.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "12/08/2013",
        left: "0",
        id: "__alloyId141"
    });
    $.__views.__alloyId138.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        width: "200",
        backgroundColor: "#F5F5F5",
        top: "13",
        height: "17",
        left: "0",
        layout: "vertical",
        id: "__alloyId142"
    });
    $.__views.__alloyId138.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createView({
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
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        text: "80%",
        color: "#FFF",
        top: "-16",
        font: "{fontSize: 10}",
        id: "__alloyId144"
    });
    $.__views.__alloyId142.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
        width: "200",
        backgroundColor: "#F5F5F5",
        top: "4",
        height: "17",
        left: "0",
        layout: "vertical",
        id: "__alloyId145"
    });
    $.__views.__alloyId138.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
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
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        text: "80%",
        color: "#FFF",
        top: "-16",
        font: "{fontSize: 10}",
        id: "__alloyId147"
    });
    $.__views.__alloyId145.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId148"
    });
    $.__views.__alloyId130.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;