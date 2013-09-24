function Controller() {
    function setRegion() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mapa";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        text: "Localização",
        id: "title"
    });
    $.__views.navView.add($.__views.title);
    $.__views.__alloyId88 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId88"
    });
    $.__views.mapa.add($.__views.__alloyId88);
    var __alloyId89 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId89,
        id: "mapview",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "false",
        height: "250",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.__alloyId88.add($.__views.mapview);
    setRegion ? $.__views.mapview.addEventListener("complete", setRegion) : __defers["$.__views.mapview!complete!setRegion"] = true;
    $.__views.__alloyId90 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId90"
    });
    $.__views.__alloyId88.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Endereço",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Av. Reitor Miguel Calmon, s/n, Vale do Canela - Escola de Administração da Ufba, no térreo - Salvador/BA - Tel (71) 3245-0757",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId92"
    });
    $.__views.__alloyId88.add($.__views.__alloyId92);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    $.mapview.region = {
        latitude: 37.390749,
        longitude: -122.081651,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    __defers["$.__views.mapview!complete!setRegion"] && $.__views.mapview.addEventListener("complete", setRegion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;