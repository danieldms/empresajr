function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sobre";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.sobre = Ti.UI.createView({
        layout: "vertical",
        id: "sobre"
    });
    $.__views.sobre && $.addTopLevelView($.__views.sobre);
    $.__views.headers = Ti.UI.createView({
        id: "headers"
    });
    $.__views.sobre.add($.__views.headers);
    $.__views.__alloyId145 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId145"
    });
    $.__views.sobre.add($.__views.__alloyId145);
    $.__views.video = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "60%",
        id: "video"
    });
    $.__views.__alloyId145.add($.__views.video);
    $.__views.__alloyId146 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "SOBRE",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Com mais de duas décadas de experiência no mercado, a Empresa Jr. ADM UFBA é uma empresa focada em mostrar resultados efetivos para seus clientes através de projetos de consultoria com preços abaixo do mercado.  Fundada em 1989, a empresa é pioneira no Movimento Empresa Júnior nacional, sendo composta e gerida integralmente por estudantes do curso de graduação em Administração da UFBA, contando com a orientação de professores da universidade.  A qualidade dos nossos serviços é reconhecida nos prêmios Realce empresarial de 2005 e PGQB Nível 1 2008 (Prêmio Gestão Qualidade Bahia).",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId148"
    });
    $.__views.__alloyId145.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createView({
        height: "50",
        id: "__alloyId149"
    });
    $.__views.__alloyId145.add($.__views.__alloyId149);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    var contentURL = "http://www.youtube.com/embed/AsFCPsZyC2I?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0";
    if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE) {
        var videoPlayer = Ti.UI.createWebView({
            url: contentURL,
            width: "100%",
            height: "100%"
        });
        videoPlayer.addEventListener("load", function(e) {
            Ti.API.info("webview loaded: " + e.url);
        });
        $.video.add(videoPlayer);
    } else alert("Conexão com a internet indisponível!");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;