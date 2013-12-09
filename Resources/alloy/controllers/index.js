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
                layout: layout,
                title: this.title
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
            "sub_mkt" == this.subView ? sub = $.sub_mkt : "sub_fin" == this.subView ? sub = $.sub_fin : "sub_org" == this.subView ? sub = $.sub_org : "sub_gestao" == this.subView ? sub = $.sub_gestao : "sub_abrir" == this.subView && (sub = $.sub_abrir);
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
        left: 0,
        top: 0,
        layout: "horizontal",
        id: "menuNavView"
    });
    $.__views.menuView.add($.__views.menuNavView);
    $.__views.itemsMenu = Ti.UI.createView({
        id: "itemsMenu",
        layout: "horizontal"
    });
    $.__views.menuNavView.add($.__views.itemsMenu);
    $.__views.__alloyId17 = Ti.UI.createImageView({
        image: "/images/icons/casa.png",
        width: "22dp",
        height: "22dp",
        left: "10",
        top: "13dp",
        id: "__alloyId17"
    });
    $.__views.itemsMenu.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
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
        id: "__alloyId18"
    });
    $.__views.itemsMenu.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        height: "20",
        width: "100%",
        backgroundColor: "#6a6967",
        layout: "horizontal",
        id: "__alloyId19"
    });
    $.__views.menuView.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        image: "/images/icons/oculos.png",
        height: "10",
        top: "5",
        width: "22",
        left: "10",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 5,
        font: {
            fontSize: 11,
            fontFamily: "Arial"
        },
        top: 4,
        text: "SERVIÇOS DE CONSULTORIA",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.menuContentView = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        id: "menuContentView",
        layout: "vertical",
        scrollingEnabled: "true"
    });
    $.__views.menuView.add($.__views.menuContentView);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_fin",
        id: "__alloyId22"
    });
    $.__views.menuContentView.add($.__views.__alloyId22);
    clickMenu ? $.__views.__alloyId22.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId22!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId22.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId22!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId22.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId22!touchend!touchEnd"] = true;
    $.__views.__alloyId23 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Financeira",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
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
        image: "/images/icons/expand.png"
    });
    $.__views.__alloyId22.add($.__views.img);
    $.__views.sub_fin = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_fin",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_fin);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId24"
    });
    $.__views.sub_fin.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "financeira/estrutura",
        title: "Consultoria Financeira",
        id: "__alloyId25"
    });
    $.__views.sub_fin.add($.__views.__alloyId25);
    clickMenu ? $.__views.__alloyId25.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId25!click!clickMenu"] = true;
    $.__views.__alloyId26 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Estruturação Financeira",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId27"
    });
    $.__views.sub_fin.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "financeira/analise",
        title: "Consultoria Financeira",
        id: "__alloyId28"
    });
    $.__views.sub_fin.add($.__views.__alloyId28);
    clickMenu ? $.__views.__alloyId28.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId28!click!clickMenu"] = true;
    $.__views.__alloyId29 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Análise Financeira",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId30"
    });
    $.__views.menuContentView.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId31"
    });
    $.__views.menuContentView.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_mkt",
        id: "__alloyId32"
    });
    $.__views.menuContentView.add($.__views.__alloyId32);
    clickMenu ? $.__views.__alloyId32.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId32!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId32.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId32!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId32.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId32!touchend!touchEnd"] = true;
    $.__views.__alloyId33 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Marketing",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
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
        image: "/images/icons/expand.png"
    });
    $.__views.__alloyId32.add($.__views.img);
    $.__views.sub_mkt = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_mkt",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_mkt);
    $.__views.__alloyId34 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId34"
    });
    $.__views.sub_mkt.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "marketing/plano",
        title: "Consultoria Marketing",
        id: "__alloyId35"
    });
    $.__views.sub_mkt.add($.__views.__alloyId35);
    clickMenu ? $.__views.__alloyId35.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId35!click!clickMenu"] = true;
    $.__views.__alloyId36 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Plano de Marketing",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId37"
    });
    $.__views.sub_mkt.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "marketing/pesquisa",
        title: "Consultoria Marketing",
        id: "__alloyId38"
    });
    $.__views.sub_mkt.add($.__views.__alloyId38);
    clickMenu ? $.__views.__alloyId38.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId38!click!clickMenu"] = true;
    $.__views.__alloyId39 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Pesquisa de Mercado",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId40"
    });
    $.__views.menuContentView.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId41"
    });
    $.__views.menuContentView.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_org",
        id: "__alloyId42"
    });
    $.__views.menuContentView.add($.__views.__alloyId42);
    clickMenu ? $.__views.__alloyId42.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId42!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId42.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId42!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId42.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId42!touchend!touchEnd"] = true;
    $.__views.__alloyId43 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Organizacional",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
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
        image: "/images/icons/expand.png"
    });
    $.__views.__alloyId42.add($.__views.img);
    $.__views.sub_org = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_org",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_org);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId44"
    });
    $.__views.sub_org.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "organizacional/estrutura",
        title: "Consultoria Organizacional",
        id: "__alloyId45"
    });
    $.__views.sub_org.add($.__views.__alloyId45);
    clickMenu ? $.__views.__alloyId45.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId45!click!clickMenu"] = true;
    $.__views.__alloyId46 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Estrutura Organizacional",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId47"
    });
    $.__views.sub_org.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "organizacional/padronizacao",
        title: "Consultoria Organizacional",
        id: "__alloyId48"
    });
    $.__views.sub_org.add($.__views.__alloyId48);
    clickMenu ? $.__views.__alloyId48.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId48!click!clickMenu"] = true;
    $.__views.__alloyId49 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Padronização de Processos",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
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
    $.__views.__alloyId52 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_gestao",
        id: "__alloyId52"
    });
    $.__views.menuContentView.add($.__views.__alloyId52);
    clickMenu ? $.__views.__alloyId52.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId52!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId52.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId52!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId52.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId52!touchend!touchEnd"] = true;
    $.__views.__alloyId53 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Gestão de Pessoas",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
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
        image: "/images/icons/expand.png"
    });
    $.__views.__alloyId52.add($.__views.img);
    $.__views.sub_gestao = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_gestao",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_gestao);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId54"
    });
    $.__views.sub_gestao.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "gestao/desempenho",
        title: "Gestão de Pessoas",
        id: "__alloyId55"
    });
    $.__views.sub_gestao.add($.__views.__alloyId55);
    clickMenu ? $.__views.__alloyId55.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId55!click!clickMenu"] = true;
    $.__views.__alloyId56 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Avaliação de Desempenho",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId57"
    });
    $.__views.sub_gestao.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "gestao/pesquisa",
        title: "Gestão de Pessoas",
        id: "__alloyId58"
    });
    $.__views.sub_gestao.add($.__views.__alloyId58);
    clickMenu ? $.__views.__alloyId58.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId58!click!clickMenu"] = true;
    $.__views.__alloyId59 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Pesquisa de Clima Organizacional",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId60"
    });
    $.__views.menuContentView.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId61"
    });
    $.__views.menuContentView.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        subView: "sub_abrir",
        id: "__alloyId62"
    });
    $.__views.menuContentView.add($.__views.__alloyId62);
    clickMenu ? $.__views.__alloyId62.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId62!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId62.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId62!touchstart!touchStart"] = true;
    touchEnd ? $.__views.__alloyId62.addEventListener("touchend", touchEnd) : __defers["$.__views.__alloyId62!touchend!touchEnd"] = true;
    $.__views.__alloyId63 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: "10",
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Quer abrir seu negócio",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
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
        image: "/images/icons/expand.png"
    });
    $.__views.__alloyId62.add($.__views.img);
    $.__views.sub_abrir = Ti.UI.createView({
        backgroundColor: "#302c2b",
        layout: "vertical",
        height: "0",
        id: "sub_abrir",
        expand: "80"
    });
    $.__views.menuContentView.add($.__views.sub_abrir);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId64"
    });
    $.__views.sub_abrir.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "negocio/plano",
        title: "Quer abrir seu negócio?",
        id: "__alloyId65"
    });
    $.__views.sub_abrir.add($.__views.__alloyId65);
    clickMenu ? $.__views.__alloyId65.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId65!click!clickMenu"] = true;
    $.__views.__alloyId66 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Plano de negócios",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#b1b0ac",
        width: "100%",
        id: "__alloyId67"
    });
    $.__views.sub_abrir.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "negocio/estudo",
        title: "Quer abrir seu negócio?",
        id: "__alloyId68"
    });
    $.__views.sub_abrir.add($.__views.__alloyId68);
    clickMenu ? $.__views.__alloyId68.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId68!click!clickMenu"] = true;
    $.__views.__alloyId69 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 12,
            fontFamily: "Arial"
        },
        top: 12,
        text: "Estudo de Viabilidade",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId70"
    });
    $.__views.menuContentView.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId71"
    });
    $.__views.menuContentView.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "sobre",
        title: "Sobre",
        id: "__alloyId72"
    });
    $.__views.menuContentView.add($.__views.__alloyId72);
    clickMenu ? $.__views.__alloyId72.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId72!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId72.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId72!touchstart!touchStart"] = true;
    $.__views.__alloyId73 = Ti.UI.createImageView({
        image: "/images/icons/sobre.png",
        left: "10",
        width: "21",
        height: "20",
        top: "10",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Sobre a Empresa Jr.",
        id: "__alloyId74"
    });
    $.__views.__alloyId72.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId75"
    });
    $.__views.menuContentView.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId76"
    });
    $.__views.menuContentView.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        restrito: "true",
        source: "sac",
        title: "SAC",
        id: "__alloyId77"
    });
    $.__views.menuContentView.add($.__views.__alloyId77);
    clickMenu ? $.__views.__alloyId77.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId77!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId77.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId77!touchstart!touchStart"] = true;
    $.__views.__alloyId78 = Ti.UI.createImageView({
        image: "/images/icons/SAC.png",
        left: "10",
        width: "16",
        height: "20",
        top: "10",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "SAC",
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId80"
    });
    $.__views.menuContentView.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId81"
    });
    $.__views.menuContentView.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "mapa",
        title: "Localização",
        id: "__alloyId82"
    });
    $.__views.menuContentView.add($.__views.__alloyId82);
    clickMenu ? $.__views.__alloyId82.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId82!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId82.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId82!touchstart!touchStart"] = true;
    $.__views.__alloyId83 = Ti.UI.createImageView({
        image: "/images/icons/mapa.png",
        left: "10",
        width: "15",
        height: "20",
        top: "10",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Mapa de Localização",
        id: "__alloyId84"
    });
    $.__views.__alloyId82.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId85"
    });
    $.__views.menuContentView.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId86"
    });
    $.__views.menuContentView.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 39,
        anchorPoint: {
            y: 1
        },
        toggle: "false",
        source: "faleconosco",
        title: "Fale Conosco",
        id: "__alloyId87"
    });
    $.__views.menuContentView.add($.__views.__alloyId87);
    clickMenu ? $.__views.__alloyId87.addEventListener("click", clickMenu) : __defers["$.__views.__alloyId87!click!clickMenu"] = true;
    touchStart ? $.__views.__alloyId87.addEventListener("touchstart", touchStart) : __defers["$.__views.__alloyId87!touchstart!touchStart"] = true;
    $.__views.__alloyId88 = Ti.UI.createImageView({
        image: "/images/icons/faleconosco.png",
        left: "9",
        width: "23",
        height: "20",
        top: "10",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        color: "#f9f7f8",
        left: 10,
        font: {
            fontSize: 14
        },
        top: 12,
        text: "Fale Conosco",
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#141414",
        width: "100%",
        id: "__alloyId90"
    });
    $.__views.menuContentView.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#303030",
        width: "100%",
        id: "__alloyId91"
    });
    $.__views.menuContentView.add($.__views.__alloyId91);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#FFF",
        layout: "vertical",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.wait = Ti.UI.createView({
        id: "wait",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        left: "0",
        top: "0",
        zIndex: "10",
        visible: "false"
    });
    $.__views.index.add($.__views.wait);
    $.__views.__alloyId92 = Ti.UI.createView({
        width: "200dp",
        height: "100dp",
        id: "__alloyId92"
    });
    $.__views.wait.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        borderRadius: "10dp",
        opacity: "0.7",
        backgroundColor: "#000",
        borderColor: "#fff",
        borderWidth: "1dp",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        id: "activityIndicator",
        top: "20dp",
        indicatorColor: "#FFF"
    });
    $.__views.__alloyId92.add($.__views.activityIndicator);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        color: "white",
        left: "60dp",
        font: "{fontSize: '22dp'}",
        top: "65dp",
        text: "Carregando...",
        id: "__alloyId94"
    });
    $.__views.__alloyId92.add($.__views.__alloyId94);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentView = null;
    var currentMenu = null;
    var direction = "reset";
    var buttonPressed = false;
    var touchRightStarted = false;
    var pre = 0;
    var titleHeight = "44dp";
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
    var leftButton = Ti.UI.createView({
        top: 0,
        height: "44dp",
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
    var iconLeftButton = Ti.UI.createImageView({
        height: "15dp",
        width: "25dp",
        image: "/images/icons/menu.png"
    });
    leftButton.addEventListener("touchstart", function() {
        iconLeftButton.opacity = .2;
    });
    leftButton.addEventListener("touchend", function() {
        iconLeftButton.opacity = 1;
        if (!touchRightStarted) {
            buttonPressed = true;
            toggleSlide(null);
        }
    });
    leftButton.add(iconLeftButton);
    var header = Ti.UI.createView({
        height: "44dp",
        width: "100%",
        backgroundColor: "#105A99",
        top: 0,
        left: 0
    });
    var title = Ti.UI.createLabel({
        height: "44dp",
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
        }
    });
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0]);
    if (major >= 7) {
        $.itemsMenu.setTop("20dp");
        titleHeight = "64dp";
        var space = Ti.UI.createView({
            top: "20dp",
            height: "44dp",
            left: 0,
            width: "100%"
        });
        leftButton.setHeight("44dp");
        title.setHeight("44dp");
        header.setHeight(titleHeight);
        space.add(leftButton);
        space.add(title);
        header.add(space);
    } else {
        header.add(leftButton);
        header.add(title);
    }
    $.menuNavView.setHeight(titleHeight);
    var args = {
        headers: header,
        height: titleHeight
    };
    Ti.App.addEventListener("app:toggle", function() {
        if (!touchRightStarted) {
            buttonPressed = true;
            toggleSlide(null);
        }
    });
    Ti.App.addEventListener("app:setLayout", function(e) {
        title.text = e.title;
        var view = Alloy.createController(e.layout, args).getView();
        $.main.add(view);
        $.main.remove(currentView);
        currentView = view;
        view = null;
        null == e.swipe && toggleSlide(null);
    });
    if (null == currentView) {
        currentView = Alloy.createController("mainView", args).getView();
        $.main.add(currentView);
    }
    var style;
    style = Titanium.UI.iPhone.ActivityIndicatorStyle.BIG;
    $.activityIndicator.style = style;
    $.wait.hide();
    Ti.App.addEventListener("app:preload", function() {
        if (1 == pre) {
            $.activityIndicator.hide();
            $.wait.hide();
            pre = 0;
        } else {
            $.wait.show();
            $.activityIndicator.show();
            pre = 1;
        }
    });
    Alloy.Globals.preload = $.activityIndicator;
    $.index.open();
    __defers["$.__views.__alloyId22!click!clickMenu"] && $.__views.__alloyId22.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId22!touchstart!touchStart"] && $.__views.__alloyId22.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId22!touchend!touchEnd"] && $.__views.__alloyId22.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId25!click!clickMenu"] && $.__views.__alloyId25.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId28!click!clickMenu"] && $.__views.__alloyId28.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId32!click!clickMenu"] && $.__views.__alloyId32.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId32!touchstart!touchStart"] && $.__views.__alloyId32.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId32!touchend!touchEnd"] && $.__views.__alloyId32.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId35!click!clickMenu"] && $.__views.__alloyId35.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId38!click!clickMenu"] && $.__views.__alloyId38.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId42!click!clickMenu"] && $.__views.__alloyId42.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId42!touchstart!touchStart"] && $.__views.__alloyId42.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId42!touchend!touchEnd"] && $.__views.__alloyId42.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId45!click!clickMenu"] && $.__views.__alloyId45.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId48!click!clickMenu"] && $.__views.__alloyId48.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId52!click!clickMenu"] && $.__views.__alloyId52.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId52!touchstart!touchStart"] && $.__views.__alloyId52.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId52!touchend!touchEnd"] && $.__views.__alloyId52.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId55!click!clickMenu"] && $.__views.__alloyId55.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId58!click!clickMenu"] && $.__views.__alloyId58.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId62!click!clickMenu"] && $.__views.__alloyId62.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId62!touchstart!touchStart"] && $.__views.__alloyId62.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId62!touchend!touchEnd"] && $.__views.__alloyId62.addEventListener("touchend", touchEnd);
    __defers["$.__views.__alloyId65!click!clickMenu"] && $.__views.__alloyId65.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId68!click!clickMenu"] && $.__views.__alloyId68.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId72!click!clickMenu"] && $.__views.__alloyId72.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId72!touchstart!touchStart"] && $.__views.__alloyId72.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId77!click!clickMenu"] && $.__views.__alloyId77.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId77!touchstart!touchStart"] && $.__views.__alloyId77.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId82!click!clickMenu"] && $.__views.__alloyId82.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId82!touchstart!touchStart"] && $.__views.__alloyId82.addEventListener("touchstart", touchStart);
    __defers["$.__views.__alloyId87!click!clickMenu"] && $.__views.__alloyId87.addEventListener("click", clickMenu);
    __defers["$.__views.__alloyId87!touchstart!touchStart"] && $.__views.__alloyId87.addEventListener("touchstart", touchStart);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;