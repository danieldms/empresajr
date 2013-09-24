function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pesquisamkt";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.pesquisamkt = Ti.UI.createView({
        layout: "vertical",
        id: "pesquisamkt"
    });
    $.__views.pesquisamkt && $.addTopLevelView($.__views.pesquisamkt);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.pesquisamkt.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold",
            fontFamily: "DIN-BoldAlternate"
        },
        height: "46dp",
        color: "#FFF",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            x: "0dp",
            y: "1dp"
        },
        text: "Consultoria Financeira",
        id: "__alloyId108"
    });
    $.__views.navView.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId109"
    });
    $.__views.pesquisamkt.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: 100,
        layout: "horizontal",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createImageView({
        image: "images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        top: "20",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        left: 20,
        right: 10,
        top: 30,
        color: "#115a98",
        text: "PESQUISA DE\nMERCADO",
        id: "__alloyId112"
    });
    $.__views.__alloyId110.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId113"
    });
    $.__views.__alloyId109.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "A consultoria em finanças permite uma análise aprofundada da situação financeira da organização. Essa consiste no desenvolvimento de ferramentas de controle financeiro e na elaboração de uma estrutura de custos compatível com a realidade da mesma. Estas medidas possibilitam a visualização clara do desempenho da empresa e a determinação das melhores práticas para solucionar as oscilações e evitar a ocorrência de gastos desnecessários.\n\n\nEste serviço é indicado para empresas que:\n\n	• Desconhecem a sua lucratividade;\n	• Apresentam dificuldade no gerenciamento de seus gastos;\n	• Desejam construir ferramentas para controle e planejamento de gastos futuros.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId115"
    });
    $.__views.__alloyId109.add($.__views.__alloyId115);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;