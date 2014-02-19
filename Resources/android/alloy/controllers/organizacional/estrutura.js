function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "organizacional/estrutura";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.estrutura = Ti.UI.createView({
        layout: "vertical",
        id: "estrutura"
    });
    $.__views.estrutura && $.addTopLevelView($.__views.estrutura);
    $.__views.__alloyId205 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId205"
    });
    $.__views.estrutura.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createImageView({
        image: "/images/outros/header_oculos.png",
        height: "50",
        width: "110",
        left: "10",
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        left: "140dp",
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        height: "100dp",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "ESTRUTURAÇÃO \nORGANIZACIONAL",
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId209"
    });
    $.__views.__alloyId205.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId210"
    });
    $.__views.__alloyId209.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Este ramo da consultoria empresarial consiste em uma análise geral da estrutura organizacional, para que seja estabelecido o modelo mais eficiente de gestão. Envolve a elaboração de ferramentas que auxiliam a execução e o acompanhamento das atividades da empresa.\n\nEste serviço é indicado para empresas que:\n\n	• Necessitem de uma sistematização dos fluxos e rotinas e de uma padronização das atividades;\n	• Tenham funcionários (ou setores) sobrecarregados de atividades;\n	• Identifiquem ociosidade de funcionários ou setores;\n	• Cuja estrutura interna não acompanhou a velocidade de crescimento da organização.",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId211"
    });
    $.__views.__alloyId205.add($.__views.__alloyId211);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;