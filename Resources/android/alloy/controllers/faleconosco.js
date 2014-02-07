function Controller() {
    function enviar() {
        if (null != $.nome.value && (null != $.email.value || null != $.telefone.value) && null != $.assunto.value && null != $.mensagem.value) {
            Ti.App.fireEvent("app:preload", null);
            Alloy.Globals.Util.newSac($.nome.value, $.assunto.value, $.email.value, $.telefone.value, $.mensagem.value, processa);
        }
    }
    function processa(e) {
        Ti.App.fireEvent("app:preload", null);
        alert(e.message);
        if ("sucesso" == e.type) {
            $.nome.value = "";
            $.assunto.value = "";
            $.email.value = "";
            $.telefone.value = "";
            $.mensagem.value = "";
        }
    }
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
    $.__views.headers = Ti.UI.createView({
        id: "headers"
    });
    $.__views.faleconosco.add($.__views.headers);
    $.__views.scrollview = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        id: "scrollview",
        contentHeight: "auto",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.faleconosco.add($.__views.scrollview);
    $.__views.__alloyId0 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "100dp",
        id: "__alloyId0"
    });
    $.__views.scrollview.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "/images/outros/faleconosco_header.png",
        height: "50",
        width: "55",
        left: "15",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        left: "110",
        font: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "DIN-BoldAlternate"
        },
        color: "#115a98",
        height: "100dp",
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "FALE CONOSCO",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId3"
    });
    $.__views.scrollview.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Contato",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#eeeeee",
        left: "20",
        right: "20",
        top: "20",
        bottom: "20",
        height: "405",
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.scrollview.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        top: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Nome:",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.nome = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: 25,
        borderWidth: 0,
        borderColor: "#FFF",
        id: "nome",
        returnKeyType: Ti.UI.RETURNKEY_NEXT
    });
    $.__views.__alloyId6.add($.__views.nome);
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId8"
    });
    $.__views.__alloyId5.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Email:",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.email = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: "27",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "email",
        returnKeyType: Ti.UI.RETURNKEY_NEXT
    });
    $.__views.__alloyId8.add($.__views.email);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId10"
    });
    $.__views.__alloyId5.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Telefone:",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.telefone = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: "7",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "telefone",
        returnKeyType: Ti.UI.RETURNKEY_NEXT
    });
    $.__views.__alloyId10.add($.__views.telefone);
    $.__views.__alloyId12 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "horizontal",
        left: "10",
        right: "10",
        height: "45",
        bottom: "2",
        id: "__alloyId12"
    });
    $.__views.__alloyId5.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Assunto:",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.assunto = Ti.UI.createTextField({
        width: 180,
        top: 12,
        left: "12",
        borderWidth: 0,
        borderColor: "#FFF",
        id: "assunto",
        returnKeyType: Ti.UI.RETURNKEY_NEXT
    });
    $.__views.__alloyId12.add($.__views.assunto);
    $.__views.__alloyId14 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "vertical",
        left: "10",
        right: "10",
        height: "145",
        bottom: "10",
        id: "__alloyId14"
    });
    $.__views.__alloyId5.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Mensagem:",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: 100,
        borderWidth: 0,
        top: 5,
        left: "11",
        right: 5,
        borderColor: "#FFF",
        id: "mensagem",
        returnKeyType: Ti.UI.RETURNKEY_GO
    });
    $.__views.__alloyId14.add($.__views.mensagem);
    $.__views.enviar = Ti.UI.createButton({
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
        backgroundImage: "/back_button.png",
        title: "ENVIAR",
        id: "enviar"
    });
    $.__views.__alloyId5.add($.__views.enviar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headers.add(args.headers);
    $.headers.setHeight(args.height);
    $.enviar.addEventListener("click", function() {
        enviar();
    });
    $.nome.addEventListener("return", function() {
        $.email.focus();
    });
    $.email.addEventListener("return", function() {
        $.telefone.focus();
    });
    $.telefone.addEventListener("return", function() {
        $.assunto.focus();
    });
    $.assunto.addEventListener("return", function() {
        $.mensagem.focus();
    });
    $.mensagem.addEventListener("return", function() {
        enviar();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;