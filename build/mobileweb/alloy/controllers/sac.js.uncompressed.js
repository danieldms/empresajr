function Controller() {
    function isProjeto(e) {
        Ti.API.log(e);
        if ("sucesso" == e.type) {
            $.titulo_projeto.text = e.titulo;
            $.descritivo.text = e.descricao;
            $.deadline.text = e.deadline;
            40 > e.previsto && ($.previsto.color = "#000");
            $.sprevisto.width = e.previsto + "%";
            $.previsto.text = e.previsto + "%";
            40 > e.realizado && ($.realizado.color = "#000");
            $.srealizado.width = e.realizado + "%";
            $.realizado.text = e.realizado + "%";
        } else alert(e.message);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sac";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.sac = Ti.UI.createView({
        layout: "vertical",
        id: "sac"
    });
    $.__views.sac && $.addTopLevelView($.__views.sac);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.sac.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
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
        text: "SAC",
        id: "__alloyId128"
    });
    $.__views.navView.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId129"
    });
    $.__views.sac.add($.__views.__alloyId129);
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
        text: "Seu Projeto",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        height: "130",
        width: "100%",
        layout: "horizontal",
        id: "__alloyId132"
    });
    $.__views.__alloyId129.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        layout: "vertical",
        width: "80",
        left: "0",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createImageView({
        image: "/ooo.png",
        width: "50",
        height: "50",
        left: "10",
        top: "10",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "PREVISTO",
        top: "15",
        left: "10",
        id: "__alloyId135"
    });
    $.__views.__alloyId133.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "REALIZADO",
        left: "10",
        top: "7",
        id: "__alloyId136"
    });
    $.__views.__alloyId133.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        left: "0",
        width: "200",
        id: "__alloyId137"
    });
    $.__views.__alloyId132.add($.__views.__alloyId137);
    $.__views.titulo_projeto = Ti.UI.createLabel({
        font: {
            fontFamily: "DIN-BoldAlternate",
            fontSize: 16
        },
        color: "#7F7F7F",
        text: "Titulo do projeto 2000",
        top: "0",
        left: "0",
        id: "titulo_projeto"
    });
    $.__views.__alloyId137.add($.__views.titulo_projeto);
    $.__views.__alloyId138 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "DEADLINE",
        top: "5",
        left: "0",
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.deadline = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        text: "0/00/0000",
        left: "0",
        id: "deadline"
    });
    $.__views.__alloyId137.add($.__views.deadline);
    $.__views.__alloyId139 = Ti.UI.createView({
        width: "220",
        backgroundColor: "#F5F5F5",
        top: "18",
        height: "17",
        left: "0",
        layout: "vertical",
        id: "__alloyId139"
    });
    $.__views.__alloyId137.add($.__views.__alloyId139);
    $.__views.sprevisto = Ti.UI.createView({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: 0,
                y: "50%"
            },
            endPoint: {
                x: "100%",
                y: "50%"
            },
            colors: [ {
                color: "#125a95",
                offset: 0
            }, {
                color: "#4898dd",
                offset: 1
            } ],
            height: 10,
            left: 0
        },
        width: "0%",
        height: "15",
        top: "0",
        left: "0",
        id: "sprevisto"
    });
    $.__views.__alloyId139.add($.__views.sprevisto);
    $.__views.previsto = Ti.UI.createLabel({
        text: "0%",
        color: "#FFF",
        top: "-16",
        font: "{fontSize: 10}",
        id: "previsto"
    });
    $.__views.__alloyId139.add($.__views.previsto);
    $.__views.__alloyId140 = Ti.UI.createView({
        width: "220",
        backgroundColor: "#F5F5F5",
        top: "4",
        height: "17",
        left: "0",
        layout: "vertical",
        id: "__alloyId140"
    });
    $.__views.__alloyId137.add($.__views.__alloyId140);
    $.__views.srealizado = Ti.UI.createView({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: 0,
                y: "50%"
            },
            endPoint: {
                x: "100%",
                y: "50%"
            },
            colors: [ {
                color: "#125a95",
                offset: 0
            }, {
                color: "#1c5bc4",
                offset: 1
            } ],
            height: 10,
            left: 0
        },
        width: "0%",
        height: "15",
        left: "0",
        top: "0",
        id: "srealizado"
    });
    $.__views.__alloyId140.add($.__views.srealizado);
    $.__views.realizado = Ti.UI.createLabel({
        text: "0%",
        color: "#FFF",
        top: "-16",
        font: "{fontSize: 10}",
        id: "realizado"
    });
    $.__views.__alloyId140.add($.__views.realizado);
    $.__views.__alloyId141 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId141"
    });
    $.__views.__alloyId129.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.descritivo = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        id: "descritivo",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    });
    $.__views.__alloyId129.add($.__views.descritivo);
    $.__views.__alloyId143 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        top: "10",
        id: "__alloyId143"
    });
    $.__views.__alloyId129.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Comentários",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.comentario = Ti.UI.createView({
        id: "comentario"
    });
    $.__views.__alloyId129.add($.__views.comentario);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    null != Alloy.Globals.Usuario && Alloy.Globals.Util.getProjeto(Alloy.Globals.Usuario.id, isProjeto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;