function Controller() {
    function touchStart() {
        this.backgroundColor = "#000";
    }
    function touchEnd() {
        this.backgroundColor = "transparent";
    }
    function clickMenu() {
        if (null == this.subView) {
            var layout = null;
            layout = "true" === this.restrito ? "login" : this.id;
            Ti.App.fireEvent("app:setLayout", {
                layout: layout
            });
            layout = null;
            null != currentMenu && currentMenu != this && (currentMenu.backgroundColor = "transparent");
            currentMenu = this;
        } else {
            var t = Ti.UI.create2DMatrix();
            var spin = Titanium.UI.createAnimation({
                duration: 100
            });
            if ("sub_mkt" == this.subView) var sub = $.sub_mkt;
            if ("false" === this.toggle) {
                this.toggle = "true";
                t = t.rotate(180);
                sub.setHeight(160);
                spin.transform = t;
                this.children[1].animate(spin);
            } else {
                this.toggle = "false";
                t = t.rotate(0);
                sub.setHeight(0);
                spin.transform = t;
                this.children[1].animate(spin);
            }
        }
    }
    function swipe(direct) {
        if (direct != direction && "left" == direction) {
            $.main.animate({
                left: 260,
                duration: 400
            });
            direction = "right";
        }
        if (direct != direction && "right" == direction) {
            $.main.animate({
                left: 0,
                duration: 400
            });
            direction = "left";
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: true,
        fullscreen: false,
        navBarHidden: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menuView = Ti.UI.createView({
        width: 260,
        left: 0,
        top: 0,
        zIndex: 0,
        height: "100%",
        backgroundColor: "#1E1E1E",
        layout: "vertical",
        id: "menuView"
    });
    $.__views.index.add($.__views.menuView);
    $.__views.menuNavView = Ti.UI.createView({
        backgroundColor: "#042745",
        height: 44,
        left: 0,
        top: 0,
        id: "menuNavView"
    });
    $.__views.menuView.add($.__views.menuNavView);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        image: "images/icons/casa.png",
        width: "22",
        height: "22",
        left: "10",
        top: "13",
        id: "__alloyId32"
    });
    $.__views.menuNavView.add($.__views.__alloyId32);
    $.__views.titlenav = Ti.UI.createLabel({
        color: "#FFF",
        left: 40,
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        top: 15,
        text: "Menu",
        id: "titlenav"
    });
    $.__views.menuNavView.add($.__views.titlenav);
    $.__views.__alloyId33 = Ti.UI.createView({
        height: "20",
        width: "100%",
        backgroundColor: "#6a6967",
        layout: "horizontal",
        id: "__alloyId33"
    });
    $.__views.menuView.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        image: "images/icons/oculos.png",
        height: "10",
        top: "5",
        width: "22",
        left: "10",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 5,
        font: {
            fontSize: 11
        },
        top: 4,
        text: "SERVIÇOS DE CONSULTORIA",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.menuContentView = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        id: "menuContentView",
        layout: "vertical",
        scrollingEnabled: "true"
    });
    $.__views.menuView.add($.__views.menuContentView);
    $.__views.consultoriafinanceira = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        id: "consultoriafinanceira",
        subheight: "80"
    });
    $.__views.menuContentView.add($.__views.consultoriafinanceira);
    clickMenu ? $.__views.consultoriafinanceira.addEventListener("click", clickMenu) : __defers["$.__views.consultoriafinanceira!click!clickMenu"] = true;
    touchStart ? $.__views.consultoriafinanceira.addEventListener("touchstart", touchStart) : __defers["$.__views.consultoriafinanceira!touchstart!touchStart"] = true;
    $.__views.__alloyId36 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        top: 12,
        text: "Financeira",
        id: "__alloyId36"
    });
    $.__views.consultoriafinanceira.add($.__views.__alloyId36);
    $.__views.img = Ti.UI.createImageView({
        width: 10,
        height: 6,
        left: 10,
        top: 20,
        anchorPoint: {
            x: .5,
            y: .5
        },
        id: "img",
        visible: "false",
        image: "images/icons/expand.png"
    });
    $.__views.consultoriafinanceira.add($.__views.img);
    $.__views.__alloyId37 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId37"
    });
    $.__views.menuContentView.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId38"
    });
    $.__views.menuContentView.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_mkt",
        id: "__alloyId39"
    });
    $.__views.menuContentView.add($.__views.__alloyId39);
    clickMenu ? $.__views.__alloyId39.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId39!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId39.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId39!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId39.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId39!touchend!touchEnd"] = true;
    $.__views.__alloyId40 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        top: 12,
        text: "Marketing",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.img = Ti.UI.createImageView({
        width: 10,
        height: 6,
        left: 10,
        top: 20,
        anchorPoint: {
            x: .5,
            y: .5
        },
        id: "img",
        image: "images/icons/expand.png"
    });
    $.__views.__alloyId39.add($.__views.img);
    $.__views.sub_mkt = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_mkt"
    });
    $.__views.menuContentView.add($.__views.sub_mkt);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId41"
    });
    $.__views.sub_mkt.add($.__views.__alloyId41);
    $.__views.planomkt = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        sub: "false",
        id: "planomkt",
        swipe: "false"
    });
    $.__views.sub_mkt.add($.__views.planomkt);
    clickMenu ? $.__views.planomkt.addEventListener("click", clickMenu) : __defers["$.__views.planomkt!click!clickMenu"] = true;
    $.__views.__alloyId42 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12
        },
        top: 12,
        text: "Plano MKT",
        id: "__alloyId42"
    });
    $.__views.planomkt.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId43"
    });
    $.__views.sub_mkt.add($.__views.__alloyId43);
    $.__views.pesquisamkt = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        sub: "false",
        id: "pesquisamkt"
    });
    $.__views.sub_mkt.add($.__views.pesquisamkt);
    clickMenu ? $.__views.pesquisamkt.addEventListener("click", clickMenu) : __defers["$.__views.pesquisamkt!click!clickMenu"] = true;
    $.__views.__alloyId44 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12
        },
        top: 12,
        text: "Pesquisa de mercado",
        id: "__alloyId44"
    });
    $.__views.pesquisamkt.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId45"
    });
    $.__views.sub_mkt.add($.__views.__alloyId45);
    $.__views.estudomkt = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        sub: "false",
        id: "estudomkt"
    });
    $.__views.sub_mkt.add($.__views.estudomkt);
    clickMenu ? $.__views.estudomkt.addEventListener("click", clickMenu) : __defers["$.__views.estudomkt!click!clickMenu"] = true;
    $.__views.__alloyId46 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12
        },
        top: 12,
        text: "Estudo de viabilidade",
        id: "__alloyId46"
    });
    $.__views.estudomkt.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 2,
        font: {
            fontSize: 10
        },
        top: 12,
        text: "(mercadológico e financeiro)",
        id: "__alloyId47"
    });
    $.__views.estudomkt.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId48"
    });
    $.__views.sub_mkt.add($.__views.__alloyId48);
    $.__views.negociosmkt = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        sub: "false",
        id: "negociosmkt"
    });
    $.__views.sub_mkt.add($.__views.negociosmkt);
    clickMenu ? $.__views.negociosmkt.addEventListener("click", clickMenu) : __defers["$.__views.negociosmkt!click!clickMenu"] = true;
    $.__views.__alloyId49 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12
        },
        top: 12,
        text: "Plano de negócios",
        id: "__alloyId49"
    });
    $.__views.negociosmkt.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId50"
    });
    $.__views.menuContentView.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId51"
    });
    $.__views.menuContentView.add($.__views.__alloyId51);
    $.__views.organizacional = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        id: "organizacional",
        subheight: "80"
    });
    $.__views.menuContentView.add($.__views.organizacional);
    clickMenu ? $.__views.organizacional.addEventListener("click", clickMenu) : __defers["$.__views.organizacional!click!clickMenu"] = true;
    touchStart ? $.__views.organizacional.addEventListener("touchstart", touchStart) : __defers["$.__views.organizacional!touchstart!touchStart"] = true;
    $.__views.__alloyId52 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        top: 12,
        text: "Organizacional",
        id: "__alloyId52"
    });
    $.__views.organizacional.add($.__views.__alloyId52);
    $.__views.img = Ti.UI.createImageView({
        width: 10,
        height: 6,
        left: 10,
        top: 20,
        anchorPoint: {
            x: .5,
            y: .5
        },
        id: "img",
        visible: "false",
        image: "images/icons/expand.png"
    });
    $.__views.organizacional.add($.__views.img);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId53"
    });
    $.__views.menuContentView.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId54"
    });
    $.__views.menuContentView.add($.__views.__alloyId54);
    $.__views.sobre = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        id: "sobre"
    });
    $.__views.menuContentView.add($.__views.sobre);
    clickMenu ? $.__views.sobre.addEventListener("click", clickMenu) : __defers["$.__views.sobre!click!clickMenu"] = true;
    touchStart ? $.__views.sobre.addEventListener("touchstart", touchStart) : __defers["$.__views.sobre!touchstart!touchStart"] = true;
    $.__views.__alloyId55 = Ti.UI.createImageView({
        image: "images/icons/sobre.png",
        left: "10",
        width: "21",
        height: "20",
        top: "10",
        id: "__alloyId55"
    });
    $.__views.sobre.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        top: 12,
        text: "Sobre a Empresa Jr.",
        id: "__alloyId56"
    });
    $.__views.sobre.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId57"
    });
    $.__views.menuContentView.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId58"
    });
    $.__views.menuContentView.add($.__views.__alloyId58);
    $.__views.sac = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        id: "sac",
        restrito: "true"
    });
    $.__views.menuContentView.add($.__views.sac);
    clickMenu ? $.__views.sac.addEventListener("click", clickMenu) : __defers["$.__views.sac!click!clickMenu"] = true;
    touchStart ? $.__views.sac.addEventListener("touchstart", touchStart) : __defers["$.__views.sac!touchstart!touchStart"] = true;
    $.__views.__alloyId59 = Ti.UI.createImageView({
        image: "images/icons/SAC.png",
        left: "10",
        width: "16",
        height: "20",
        top: "10",
        id: "__alloyId59"
    });
    $.__views.sac.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        top: 12,
        text: "SAC",
        id: "__alloyId60"
    });
    $.__views.sac.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId61"
    });
    $.__views.menuContentView.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId62"
    });
    $.__views.menuContentView.add($.__views.__alloyId62);
    $.__views.mapa = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        id: "mapa"
    });
    $.__views.menuContentView.add($.__views.mapa);
    clickMenu ? $.__views.mapa.addEventListener("click", clickMenu) : __defers["$.__views.mapa!click!clickMenu"] = true;
    touchStart ? $.__views.mapa.addEventListener("touchstart", touchStart) : __defers["$.__views.mapa!touchstart!touchStart"] = true;
    $.__views.__alloyId63 = Ti.UI.createImageView({
        image: "images/icons/mapa.png",
        left: "10",
        width: "15",
        height: "20",
        top: "10",
        id: "__alloyId63"
    });
    $.__views.mapa.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        top: 12,
        text: "Mapa de Localização",
        id: "__alloyId64"
    });
    $.__views.mapa.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId65"
    });
    $.__views.menuContentView.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId66"
    });
    $.__views.menuContentView.add($.__views.__alloyId66);
    $.__views.faleconosco = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        id: "faleconosco"
    });
    $.__views.menuContentView.add($.__views.faleconosco);
    clickMenu ? $.__views.faleconosco.addEventListener("click", clickMenu) : __defers["$.__views.faleconosco!click!clickMenu"] = true;
    touchStart ? $.__views.faleconosco.addEventListener("touchstart", touchStart) : __defers["$.__views.faleconosco!touchstart!touchStart"] = true;
    $.__views.__alloyId67 = Ti.UI.createImageView({
        image: "images/icons/faleconosco.png",
        left: "9",
        width: "23",
        height: "20",
        top: "10",
        id: "__alloyId67"
    });
    $.__views.faleconosco.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontFamily: "DIN-BoldAlternate"
        },
        top: 12,
        text: "Fale Conosco",
        id: "__alloyId68"
    });
    $.__views.faleconosco.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId69"
    });
    $.__views.menuContentView.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId70"
    });
    $.__views.menuContentView.add($.__views.__alloyId70);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: "#FFF",
        layout: "vertical",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentView = null;
    var currentMenu = null;
    var direction = "left";
    var backView = Ti.UI.createView({
        height: "50dp",
        width: "50dp",
        left: 0
    });
    var backbutton = Ti.UI.createImageView({
        height: "15dp",
        width: "25dp",
        image: "images/icons/menu.png"
    });
    backView.addEventListener("click", function() {
        Ti.App.fireEvent("app:swipe");
    });
    backView.addEventListener("touchstart", function() {
        this.backgroundColor = "#000";
        this.opacity = .2;
    });
    backView.addEventListener("touchend", function() {
        this.backgroundColor = "transparent";
        this.opacity = 1;
    });
    backView.add(backbutton);
    var args = {
        backview: backView
    };
    $.index.addEventListener("swipe", function(e) {
        ("left" == e.direction || "right" == e.direction) && swipe(e.direction);
    });
    Ti.App.addEventListener("app:swipe", function() {
        "left" == direction ? swipe("right") : swipe("left");
    });
    Ti.App.addEventListener("app:setLayout", function(e) {
        var view = Alloy.createController(e.layout, args).getView();
        $.main.add(view);
        $.main.remove(currentView);
        currentView = view;
        view = null;
        null == e.swipe && Ti.App.fireEvent("app:swipe", null);
    });
    if (null == currentView) {
        currentView = Alloy.createController("mainView", args).getView();
        $.main.add(currentView);
    }
    Ti.UI.Android && ($.index.windowSoftInputMode = Ti.UI.Android.SOFT_INPUT_ADJUST_PAN);
    $.index.open();
    __defers["$.__views.consultoriafinanceira!click!clickMenu"] && $.__views.consultoriafinanceira.addEventListener("click", clickMenu);
    __defers["$.__views.consultoriafinanceira!touchstart!touchStart"] && $.__views.consultoriafinanceira.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId39!click!clickMenu"] && $.__views.__alloyId39.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId39!touchstart!touchStart"] && $.__views.__alloyId39.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId39!touchend!touchEnd"] && $.__views.__alloyId39.addEventListener("touchend", touchEnd);
    __defers["$.__views.planomkt!click!clickMenu"] && $.__views.planomkt.addEventListener("click", clickMenu);
    __defers["$.__views.pesquisamkt!click!clickMenu"] && $.__views.pesquisamkt.addEventListener("click", clickMenu);
    __defers["$.__views.estudomkt!click!clickMenu"] && $.__views.estudomkt.addEventListener("click", clickMenu);
    __defers["$.__views.negociosmkt!click!clickMenu"] && $.__views.negociosmkt.addEventListener("click", clickMenu);
    __defers["$.__views.organizacional!click!clickMenu"] && $.__views.organizacional.addEventListener("click", clickMenu);
    __defers["$.__views.organizacional!touchstart!touchStart"] && $.__views.organizacional.addEventListener("touchstart", touchStart);
    __defers["$.__views.sobre!click!clickMenu"] && $.__views.sobre.addEventListener("click", clickMenu);
    __defers["$.__views.sobre!touchstart!touchStart"] && $.__views.sobre.addEventListener("touchstart", touchStart);
    __defers["$.__views.sac!click!clickMenu"] && $.__views.sac.addEventListener("click", clickMenu);
    __defers["$.__views.sac!touchstart!touchStart"] && $.__views.sac.addEventListener("touchstart", touchStart);
    __defers["$.__views.mapa!click!clickMenu"] && $.__views.mapa.addEventListener("click", clickMenu);
    __defers["$.__views.mapa!touchstart!touchStart"] && $.__views.mapa.addEventListener("touchstart", touchStart);
    __defers["$.__views.faleconosco!click!clickMenu"] && $.__views.faleconosco.addEventListener("click", clickMenu);
    __defers["$.__views.faleconosco!touchstart!touchStart"] && $.__views.faleconosco.addEventListener("touchstart", touchStart);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;