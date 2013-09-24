function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "negociosmkt";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.negociosmkt = Ti.UI.createView({
        layout: "vertical",
        id: "negociosmkt"
    });
    $.__views.negociosmkt && $.addTopLevelView($.__views.negociosmkt);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.negociosmkt.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.title = Ti.UI.createLabel({
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
        id: "title"
    });
    $.__views.navView.add($.__views.title);
    $.__views.__alloyId92 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId92"
    });
    $.__views.negociosmkt.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: 100,
        layout: "horizontal",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createImageView({
        image: "images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        top: "20",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        left: 20,
        right: 10,
        top: 30,
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "#115a98",
        text: "PLANO DE\nNEGÓCIOS",
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId96"
    });
    $.__views.__alloyId92.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "A consultoria em finanças permite uma análise aprofundada da situação financeira da organização. Essa consiste no desenvolvimento de ferramentas de controle financeiro e na elaboração de uma estrutura de custos compatível com a realidade da mesma. Estas medidas possibilitam a visualização clara do desempenho da empresa e a determinação das melhores práticas para solucionar as oscilações e evitar a ocorrência de gastos desnecessários.\n\n\nEste serviço é indicado para empresas que:\n\n	• Desconhecem a sua lucratividade;\n	• Apresentam dificuldade no gerenciamento de seus gastos;\n	• Desejam construir ferramentas para controle e planejamento de gastos futuros.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId98"
    });
    $.__views.__alloyId92.add($.__views.__alloyId98);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;