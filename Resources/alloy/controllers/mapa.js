function Controller() {
    function traceRoute() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (e.error) {
                alert("HFL cannot get your current location");
                return;
            }
            cur = [ e.coords.latitude, e.coords.longitude ];
        });
        Titanium.Platform.openURL("https://maps.google.com/maps?saddr=" + cur + "&daddr=-12.995626,-38.520156&f=d&sensor=false&doflg=ptm&hl=en&dirflg=d&output=embed");
    }
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
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.mapa.add($.__views.navView);
    $.__views.__alloyId132 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId132"
    });
    $.__views.navView.add($.__views.__alloyId132);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId132.add($.__views.button);
    $.__views.__alloyId133 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId133"
    });
    $.__views.button.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
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
        id: "__alloyId134"
    });
    $.__views.__alloyId132.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId135"
    });
    $.__views.mapa.add($.__views.__alloyId135);
    $.__views.mapview = Ti.UI.createView({
        id: "mapview",
        height: "80%",
        ignore: "true"
    });
    $.__views.__alloyId135.add($.__views.mapview);
    $.__views.__alloyId136 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: "20",
        color: "#8a8a8a",
        text: "Endereço",
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createButton({
        title: "Rota",
        right: "5dp",
        backgroundColor: "transparent",
        color: "#",
        id: "__alloyId138"
    });
    $.__views.__alloyId136.add($.__views.__alloyId138);
    traceRoute ? $.__views.__alloyId138.addEventListener("click", traceRoute) : __defers["$.__views.__alloyId138!click!traceRoute"] = true;
    $.__views.__alloyId139 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Av. Reitor Miguel Calmon, s/n, Vale do Canela - Escola de Administração da Ufba, no térreo - Salvador/BA - Tel (71) 3245-0757",
        left: "10",
        right: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId139"
    });
    $.__views.__alloyId135.add($.__views.__alloyId139);
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
    Ti.API.info("iPhone OS");
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
        ignore: true,
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
    });
    $.mapview.add(mapa);
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    Titanium.Geolocation.purpose = "Directions";
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (!e.success || e.error) {
            alert("Error - " + JSON.stringify(e.error));
            return;
        }
    });
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    var cur;
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            alert("HFL cannot get your current location");
            return;
        }
        cur = [ e.coords.latitude, e.coords.longitude ];
    });
    __defers["$.__views.__alloyId138!click!traceRoute"] && $.__views.__alloyId138.addEventListener("click", traceRoute);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;