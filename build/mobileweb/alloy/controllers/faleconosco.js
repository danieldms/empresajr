function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "faleconosco";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.faleconosco = Ti.UI.createView({
        layout: "vertical",
        id: "faleconosco"
    });
    $.__views.faleconosco && $.addTopLevelView($.__views.faleconosco);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.faleconosco.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        height: "46dp",
        color: "#FFF",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            x: "0dp",
            y: "1dp"
        },
        text: "Fale Conosco",
        id: "__alloyId16"
    });
    $.__views.navView.add($.__views.__alloyId16);
    $.__views.scrollview = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        id: "scrollview",
        contentHeight: "auto",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.faleconosco.add($.__views.scrollview);
    $.__views.__alloyId17 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: 100,
        layout: "horizontal",
        id: "__alloyId17"
    });
    $.__views.scrollview.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createImageView({
        image: "images/outros/faleconosco_header.png",
        height: "50",
        width: "55",
        left: "10",
        top: "25",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        left: 20,
        right: 10,
        top: "40",
        color: "#115a98",
        text: "FALE CONOSCO",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId20"
    });
    $.__views.scrollview.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Contato",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        backgroundColor: "#eeeeee",
        left: "20",
        right: "20",
        top: "20",
        bottom: "20",
        height: "405",
        layout: "vertical",
        id: "__alloyId22"
    });
    $.__views.scrollview.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        top: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Nome:",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.nome = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: 25,
        borderWidth: 0,
        borderColor: "#FFF",
        id: "nome"
    });
    $.__views.__alloyId23.add($.__views.nome);
    $.__views.__alloyId25 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId25"
    });
    $.__views.__alloyId22.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Email:",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.email = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: "27",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "email"
    });
    $.__views.__alloyId25.add($.__views.email);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId27"
    });
    $.__views.__alloyId22.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Telefone:",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.telefone = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: "7",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "telefone"
    });
    $.__views.__alloyId27.add($.__views.telefone);
    $.__views.__alloyId29 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId29"
    });
    $.__views.__alloyId22.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Assunto:",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.assunto = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: "12",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "assunto"
    });
    $.__views.__alloyId29.add($.__views.assunto);
    $.__views.__alloyId31 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "vertical",
        left: "10",
        right: "10",
        height: "145",
        bottom: "10",
        id: "__alloyId31"
    });
    $.__views.__alloyId22.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Mensagem:",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: 100,
        borderWidth: 0,
        top: 5,
        left: "11",
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId31.add($.__views.mensagem);
    $.__views.__alloyId33 = Ti.UI.createButton({
        left: 10,
        bottom: 10,
        right: 10,
        height: 40,
        borderColor: "#2155bb",
        font: {
            fontWeight: "bold"
        },
        borderRadius: 0,
        backgroundColor: "transparent",
        color: "white",
        backgroundImage: "back_button.png",
        title: "ENVIAR",
        id: "__alloyId33"
    });
    $.__views.__alloyId22.add($.__views.__alloyId33);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;