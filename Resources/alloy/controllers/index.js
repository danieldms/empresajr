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
            layout = "true" === this.restrito && null == Alloy.Globals.Usuario ? "login" : this.source;
            Ti.App.fireEvent("app:setLayout", {
                layout: layout
            });
            layout = null;
            null != currentMenu && currentMenu != this && (currentMenu.backgroundColor = "transparent");
            currentMenu = this;
        } else {
            var t = Ti.UI.create2DMatrix();
            var sub = null;
            var spin = Titanium.UI.createAnimation({
                duration: 100
            });
            "sub_mkt" == this.subView ? sub = $.sub_mkt : "sub_fin" == this.subView ? sub = $.sub_fin : "sub_org" == this.subView ? sub = $.sub_org : "sub_gestao" == this.subView && (sub = $.sub_gestao);
            if ("false" === this.toggle) {
                this.toggle = "true";
                t = t.rotate(180);
                sub.setHeight(sub.expand);
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
    function toggleSlide() {
        if ("reset" == direction) {
            direction = "right";
            $.main.animate(animateRight);
        } else {
            direction = "reset";
            $.main.animate(animateReset);
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
        backgroundColor: "#105a99",
        exitOnClose: true,
        fullscreen: false,
        navBarHidden: true,
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
        layout: "horizontal",
        id: "menuNavView"
    });
    $.__views.menuView.add($.__views.menuNavView);
    $.__views.__alloyId18 = Ti.UI.createImageView({
        image: "images/icons/casa.png",
        width: "22",
        height: "22",
        left: "10",
        top: "12",
        id: "__alloyId18"
    });
    $.__views.menuNavView.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        color: "#FFF",
        left: "5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        top: "5",
        height: "46dp",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            x: "0dp",
            y: "1dp"
        },
        text: "Menu",
        id: "__alloyId19"
    });
    $.__views.menuNavView.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: "20",
        width: "100%",
        backgroundColor: "#6a6967",
        layout: "horizontal",
        id: "__alloyId20"
    });
    $.__views.menuView.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        image: "images/icons/oculos.png",
        height: "10",
        top: "5",
        width: "22",
        left: "10",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 5,
        font: {
            fontSize: 11,
            fontFamily: "Arial"
        },
        top: 4,
        text: "SERVIÇOS DE CONSULTORIA",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.menuContentView = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        id: "menuContentView",
        layout: "vertical",
        scrollingEnabled: "true"
    });
    $.__views.menuView.add($.__views.menuContentView);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_fin",
        id: "__alloyId23"
    });
    $.__views.menuContentView.add($.__views.__alloyId23);
    clickMenu ? $.__views.__alloyId23.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId23!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId23.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId23!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId23.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId23!touchend!touchEnd"] = true;
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Financeira",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
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
    $.__views.__alloyId23.add($.__views.img);
    $.__views.sub_fin = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_fin",
        expand: "120"
    });
    $.__views.menuContentView.add($.__views.sub_fin);
    $.__views.__alloyId25 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId25"
    });
    $.__views.sub_fin.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "financeira/estrutura",
        id: "__alloyId26"
    });
    $.__views.sub_fin.add($.__views.__alloyId26);
    clickMenu ? $.__views.__alloyId26.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId26!click!clickMenu"] = true;
    $.__views.__alloyId27 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Estrutura Financeira",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId28"
    });
    $.__views.sub_fin.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "financeira/analise",
        id: "__alloyId29"
    });
    $.__views.sub_fin.add($.__views.__alloyId29);
    clickMenu ? $.__views.__alloyId29.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId29!click!clickMenu"] = true;
    $.__views.__alloyId30 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Análise Financeira",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId31"
    });
    $.__views.sub_fin.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "financeira/estudo",
        id: "__alloyId32"
    });
    $.__views.sub_fin.add($.__views.__alloyId32);
    clickMenu ? $.__views.__alloyId32.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId32!click!clickMenu"] = true;
    $.__views.__alloyId33 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Estudo de Viabilidade",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId34"
    });
    $.__views.menuContentView.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId35"
    });
    $.__views.menuContentView.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_mkt",
        id: "__alloyId36"
    });
    $.__views.menuContentView.add($.__views.__alloyId36);
    clickMenu ? $.__views.__alloyId36.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId36!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId36.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId36!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId36.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId36!touchend!touchEnd"] = true;
    $.__views.__alloyId37 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Marketing",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
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
    $.__views.__alloyId36.add($.__views.img);
    $.__views.sub_mkt = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_mkt",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_mkt);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId38"
    });
    $.__views.sub_mkt.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "marketing/plano",
        id: "__alloyId39"
    });
    $.__views.sub_mkt.add($.__views.__alloyId39);
    clickMenu ? $.__views.__alloyId39.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId39!click!clickMenu"] = true;
    $.__views.__alloyId40 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Plano de Marketing",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId41"
    });
    $.__views.sub_mkt.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "marketing/pesquisa",
        id: "__alloyId42"
    });
    $.__views.sub_mkt.add($.__views.__alloyId42);
    clickMenu ? $.__views.__alloyId42.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId42!click!clickMenu"] = true;
    $.__views.__alloyId43 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Pesquisa de Mercado",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId44"
    });
    $.__views.menuContentView.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId45"
    });
    $.__views.menuContentView.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_org",
        id: "__alloyId46"
    });
    $.__views.menuContentView.add($.__views.__alloyId46);
    clickMenu ? $.__views.__alloyId46.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId46!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId46.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId46!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId46.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId46!touchend!touchEnd"] = true;
    $.__views.__alloyId47 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Organizacional",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
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
    $.__views.__alloyId46.add($.__views.img);
    $.__views.sub_org = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_org",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_org);
    $.__views.__alloyId48 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId48"
    });
    $.__views.sub_org.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "organizacional/estrutura",
        id: "__alloyId49"
    });
    $.__views.sub_org.add($.__views.__alloyId49);
    clickMenu ? $.__views.__alloyId49.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId49!click!clickMenu"] = true;
    $.__views.__alloyId50 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Estrutura Organizacional",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId51"
    });
    $.__views.sub_org.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "organizacional/padronizacao",
        id: "__alloyId52"
    });
    $.__views.sub_org.add($.__views.__alloyId52);
    clickMenu ? $.__views.__alloyId52.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId52!click!clickMenu"] = true;
    $.__views.__alloyId53 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Padronização de Processos",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId54"
    });
    $.__views.menuContentView.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId55"
    });
    $.__views.menuContentView.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_gestao",
        id: "__alloyId56"
    });
    $.__views.menuContentView.add($.__views.__alloyId56);
    clickMenu ? $.__views.__alloyId56.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId56!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId56.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId56!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId56.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId56!touchend!touchEnd"] = true;
    $.__views.__alloyId57 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Gestão de Pessoas",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
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
    $.__views.__alloyId56.add($.__views.img);
    $.__views.sub_gestao = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_gestao",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_gestao);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId58"
    });
    $.__views.sub_gestao.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "organizacional/estrutura",
        id: "__alloyId59"
    });
    $.__views.sub_gestao.add($.__views.__alloyId59);
    clickMenu ? $.__views.__alloyId59.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId59!click!clickMenu"] = true;
    $.__views.__alloyId60 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Avaliação de Desempenho",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId61"
    });
    $.__views.sub_gestao.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "organizacional/padronizacao",
        id: "__alloyId62"
    });
    $.__views.sub_gestao.add($.__views.__alloyId62);
    clickMenu ? $.__views.__alloyId62.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId62!click!clickMenu"] = true;
    $.__views.__alloyId63 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Pesquisa de Clima Organizacional",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId64"
    });
    $.__views.menuContentView.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId65"
    });
    $.__views.menuContentView.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "sobre",
        id: "__alloyId66"
    });
    $.__views.menuContentView.add($.__views.__alloyId66);
    clickMenu ? $.__views.__alloyId66.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId66!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId66.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId66!touchstart!touchStart"] = true;
    $.__views.__alloyId67 = Ti.UI.createImageView({
        image: "images/icons/sobre.png",
        left: "10",
        width: "21",
        height: "20",
        top: "10",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Sobre a Empresa Jr.",
        id: "__alloyId68"
    });
    $.__views.__alloyId66.add($.__views.__alloyId68);
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
    $.__views.__alloyId71 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        restrito: "true",
        source: "sac",
        id: "__alloyId71"
    });
    $.__views.menuContentView.add($.__views.__alloyId71);
    clickMenu ? $.__views.__alloyId71.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId71!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId71.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId71!touchstart!touchStart"] = true;
    $.__views.__alloyId72 = Ti.UI.createImageView({
        image: "images/icons/SAC.png",
        left: "10",
        width: "16",
        height: "20",
        top: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "SAC",
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId74"
    });
    $.__views.menuContentView.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId75"
    });
    $.__views.menuContentView.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "mapa",
        id: "__alloyId76"
    });
    $.__views.menuContentView.add($.__views.__alloyId76);
    clickMenu ? $.__views.__alloyId76.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId76!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId76.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId76!touchstart!touchStart"] = true;
    $.__views.__alloyId77 = Ti.UI.createImageView({
        image: "images/icons/mapa.png",
        left: "10",
        width: "15",
        height: "20",
        top: "10",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Mapa de Localização",
        id: "__alloyId78"
    });
    $.__views.__alloyId76.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId79"
    });
    $.__views.menuContentView.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId80"
    });
    $.__views.menuContentView.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "faleconosco",
        id: "__alloyId81"
    });
    $.__views.menuContentView.add($.__views.__alloyId81);
    clickMenu ? $.__views.__alloyId81.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId81!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId81.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId81!touchstart!touchStart"] = true;
    $.__views.__alloyId82 = Ti.UI.createImageView({
        image: "images/icons/faleconosco.png",
        left: "9",
        width: "23",
        height: "20",
        top: "10",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Fale Conosco",
        id: "__alloyId83"
    });
    $.__views.__alloyId81.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId84"
    });
    $.__views.menuContentView.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId85"
    });
    $.__views.menuContentView.add($.__views.__alloyId85);
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
    $.__views.__alloyId86 = Ti.UI.createView({
        width: "100%",
        zIndex: "10",
        height: "0%",
        top: "0",
        left: "0",
        backgroundColor: "",
        id: "__alloyId86"
    });
    $.__views.index.add($.__views.__alloyId86);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentView = null;
    var currentMenu = null;
    var direction = "reset";
    var touchStartX = 0;
    var buttonPressed = false;
    var touchRightStarted = false;
    var animateRight = Ti.UI.createAnimation({
        left: 250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateReset = Ti.UI.createAnimation({
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var backView = Ti.UI.createView({
        height: "50dp",
        width: "50dp",
        left: 0
    });
    Ti.UI.createView({
        width: 1,
        height: "50dp",
        top: 0,
        right: 1,
        backgroundColor: "##0C376E"
    });
    Ti.UI.createView({
        width: 1,
        height: "50dp",
        top: 0,
        right: 0,
        backgroundColor: "#303030"
    });
    var backbutton = Ti.UI.createImageView({
        height: "15dp",
        width: "25dp",
        image: "images/icons/menu.png"
    });
    backView.addEventListener("touchstart", function() {
        this.backgroundColor = "#000";
        this.opacity = .2;
    });
    backView.addEventListener("touchend", function() {
        this.backgroundColor = "transparent";
        this.opacity = 1;
        if (!touchRightStarted) {
            buttonPressed = true;
            toggleSlide(null);
        }
    });
    backView.add(backbutton);
    var args = {
        backview: backView
    };
    $.main.addEventListener("touchstart", function(e) {
        touchStartX = e.x;
    });
    $.main.addEventListener("touchend", function() {
        if (buttonPressed) {
            buttonPressed = false;
            return;
        }
        if ($.main.left >= 150 && touchRightStarted) {
            direction = "right";
            $.main.animate(animateRight);
        } else if (150 >= $.main.left) {
            direction = "reset";
            $.main.animate(animateReset);
        }
        touchRightStarted = false;
    });
    $.main.addEventListener("touchmove", function(e) {
        if ("mapview" != e.source.id) {
            var coords = $.main.convertPointToView({
                x: e.x,
                y: e.y
            }, $.index);
            var newLeft = coords.x - touchStartX;
            touchRightStarted && 250 >= newLeft && newLeft >= 0 ? $.main.left = newLeft : touchRightStarted && 0 > newLeft ? $.main.left = 0 : touchRightStarted && newLeft > 250 && ($.main.left = 250);
            newLeft > 5 && !touchRightStarted && (touchRightStarted = true);
        }
    });
    Ti.App.addEventListener("app:setLayout", function(e) {
        var view = Alloy.createController(e.layout, args).getView();
        $.main.add(view);
        $.main.remove(currentView);
        currentView = view;
        view = null;
        null == e.swipe && toggleSlide();
    });
    if (null == currentView) {
        currentView = Alloy.createController("mainView", args).getView();
        $.main.add(currentView);
    }
    $.index.open();
    __defers["$.__views.__alloyId23!click!clickMenu"] && $.__views.__alloyId23.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId23!touchstart!touchStart"] && $.__views.__alloyId23.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId23!touchend!touchEnd"] && $.__views.__alloyId23.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId26!click!clickMenu"] && $.__views.__alloyId26.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId29!click!clickMenu"] && $.__views.__alloyId29.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId32!click!clickMenu"] && $.__views.__alloyId32.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId36!click!clickMenu"] && $.__views.__alloyId36.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId36!touchstart!touchStart"] && $.__views.__alloyId36.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId36!touchend!touchEnd"] && $.__views.__alloyId36.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId39!click!clickMenu"] && $.__views.__alloyId39.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId42!click!clickMenu"] && $.__views.__alloyId42.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId46!click!clickMenu"] && $.__views.__alloyId46.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId46!touchstart!touchStart"] && $.__views.__alloyId46.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId46!touchend!touchEnd"] && $.__views.__alloyId46.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId49!click!clickMenu"] && $.__views.__alloyId49.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId52!click!clickMenu"] && $.__views.__alloyId52.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId56!click!clickMenu"] && $.__views.__alloyId56.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId56!touchstart!touchStart"] && $.__views.__alloyId56.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId56!touchend!touchEnd"] && $.__views.__alloyId56.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId59!click!clickMenu"] && $.__views.__alloyId59.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId62!click!clickMenu"] && $.__views.__alloyId62.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId66!click!clickMenu"] && $.__views.__alloyId66.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId66!touchstart!touchStart"] && $.__views.__alloyId66.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId71!click!clickMenu"] && $.__views.__alloyId71.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId71!touchstart!touchStart"] && $.__views.__alloyId71.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId76!click!clickMenu"] && $.__views.__alloyId76.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId76!touchstart!touchStart"] && $.__views.__alloyId76.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId81!click!clickMenu"] && $.__views.__alloyId81.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId81!touchstart!touchStart"] && $.__views.__alloyId81.addEventListener("touchstart", touchStart);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;