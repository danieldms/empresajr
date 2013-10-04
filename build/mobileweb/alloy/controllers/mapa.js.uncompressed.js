function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mapa";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapa = Ti.UI.createView({
        layout: "vertical",
        id: "mapa"
    });
    $.__views.mapa && $.addTopLevelView($.__views.mapa);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.mapa.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId97 = Ti.UI.createLabel({
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
        text: "Localização",
        id: "__alloyId97"
    });
    $.__views.navView.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId98"
    });
    $.__views.mapa.add($.__views.__alloyId98);
    var __alloyId99 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId99,
        id: "mapview",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "false",
        height: "250",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.__alloyId98.add($.__views.mapview);
    $.__views.__alloyId100 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId100"
    });
    $.__views.__alloyId98.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Endereço",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Av. Reitor Miguel Calmon, s/n, Vale do Canela - Escola de Administração da Ufba, no térreo - Salvador/BA - Tel (71) 3245-0757",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId102"
    });
    $.__views.__alloyId98.add($.__views.__alloyId102);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;