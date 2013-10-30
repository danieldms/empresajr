function Controller() {
    function mobileMap() {
        var empresa = Titanium.Map.createAnnotation({
            latitude: -12.995626,
            longitude: -38.520156,
            title: "Empresa JR.",
            subtitle: "Av. Reitor Miguel Calmon, s/n, Vale do Canela - Escola de Administração da Ufba, no térreo - Salvador/BA - Tel (71) 3245-0757",
            pincolor: Titanium.Map.ANNOTATION_RED,
            animate: true
        });
        var mapa = Titanium.Map.createView({
            id: "mapview",
            mapType: Titanium.Map.SATELLITE_TYPE,
            region: {
                latitude: -12.995626,
                longitude: -38.520156,
                latitudeDelta: .01,
                longitudeDelta: .01
            },
            animate: true,
            regionFit: true,
            userLocation: true,
            annotations: [ empresa ],
            height: "100%",
            width: "100%",
            top: 0,
            left: 0
        });
        $.mapview.add(mapa);
    }
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
        height: "44dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "/lightbg.png",
        id: "navView"
    });
    $.__views.mapa.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId127 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId127"
    });
    $.__views.button.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
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
        id: "__alloyId128"
    });
    $.__views.navView.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId129"
    });
    $.__views.mapa.add($.__views.__alloyId129);
    $.__views.mapview = Ti.UI.createView({
        id: "mapview",
        height: "300dp"
    });
    $.__views.__alloyId129.add($.__views.mapview);
    $.__views.__alloyId130 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Endereço",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Av. Reitor Miguel Calmon, s/n, Vale do Canela - Escola de Administração da Ufba, no térreo - Salvador/BA - Tel (71) 3245-0757",
        left: "10",
        right: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId132"
    });
    $.__views.__alloyId129.add($.__views.__alloyId132);
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
    Ti.API.info("mobileweb");
    mobileMap();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;