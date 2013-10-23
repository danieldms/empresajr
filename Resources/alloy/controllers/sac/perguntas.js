function Controller() {
    function enviar() {
        var data = {
            "": ""
        };
        Alloy.Globals.Util.sendQuestionario(data, processa);
    }
    function processa() {
        Ti.API.info("chegou aqui");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sac/perguntas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.perguntas = Ti.UI.createView({
        layout: "vertical",
        id: "perguntas"
    });
    $.__views.perguntas && $.addTopLevelView($.__views.perguntas);
    $.__views.navView = Ti.UI.createView({
        height: "44dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "/lightbg.png",
        id: "navView"
    });
    $.__views.perguntas.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId226 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId226"
    });
    $.__views.button.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
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
        id: "__alloyId227"
    });
    $.__views.navView.add($.__views.__alloyId227);
    $.__views.scrollview = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        id: "scrollview",
        contentHeight: "auto",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.perguntas.add($.__views.scrollview);
    $.__views.__alloyId228 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId228"
    });
    $.__views.scrollview.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "Questionário",
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: "10dp",
        text: "Ajude-nos a melhorar nossos serviços!",
        id: "__alloyId230"
    });
    $.__views.scrollview.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "Responda as seguintes perguntas:",
        id: "__alloyId231"
    });
    $.__views.scrollview.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "100dp",
        id: "__alloyId232"
    });
    $.__views.scrollview.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "O(a) Sr.(a) indicaria a Empresa JR. ADM UFBA para amigos ou familiares?",
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: 'Numa escala de 0 até 10, sendo 0 "NÃO INDICARIA" e 10 "COM CERTEZA INDICARIA". QUAL A PROBABILIDADE DISSO ACONTECER?',
        id: "__alloyId234"
    });
    $.__views.__alloyId232.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        id: "__alloyId235"
    });
    $.__views.__alloyId232.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "205dp",
        id: "__alloyId236"
    });
    $.__views.scrollview.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "PREÇO:",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "O PREÇO ESTÁ LIGADO AO QUE O CLIENTE ACHOU JUSTO APÓS A FINALIZAÇÃO DO PROJETO. SE O PROJETO REALIZADO ESTEVE DE ACORDO COM O PREÇO DEFINIDO ANTES.",
        id: "__alloyId238"
    });
    $.__views.__alloyId236.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        id: "__alloyId239"
    });
    $.__views.__alloyId236.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId240"
    });
    $.__views.__alloyId236.add($.__views.__alloyId240);
    $.__views.preco = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: "8dp",
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#EEEEEE",
        id: "preco",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left"
    });
    $.__views.__alloyId236.add($.__views.preco);
    $.__views.__alloyId241 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "195dp",
        id: "__alloyId241"
    });
    $.__views.scrollview.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "PRAZO:",
        id: "__alloyId242"
    });
    $.__views.__alloyId241.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "O PRAZO CORRESPONDE AO CUMPRIMENTO QUE FOI ACORDADO NO INÍCIO. SE, AO FINAL, O CLIENTE FICOU SATISFEITO COM O PRAZO E OS PERÍODOS EM ATRASO, CASO TENHA OCORRIDO.",
        id: "__alloyId243"
    });
    $.__views.__alloyId241.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        id: "__alloyId244"
    });
    $.__views.__alloyId241.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId245"
    });
    $.__views.__alloyId241.add($.__views.__alloyId245);
    $.__views.prazo = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: "8dp",
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#EEEEEE",
        id: "prazo",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left"
    });
    $.__views.__alloyId241.add($.__views.prazo);
    $.__views.__alloyId246 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "225dp",
        id: "__alloyId246"
    });
    $.__views.scrollview.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "CREDIBILIDADE:",
        id: "__alloyId247"
    });
    $.__views.__alloyId246.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "CREDIBILIDADE EQUIVALE AO QUE O CLIENTE ACHA DA IMAGEM DA EMPRESA, LOGO ENQUADRA-SE O PROFISSIONALISMO, CONHECIMENTO TÉCNICO, POSTURA, TEMPO DE EXITÊNCIA, A UNIVERSIDADE, APÓS A FINALIZAÇÃO DO PROJETO.",
        id: "__alloyId248"
    });
    $.__views.__alloyId246.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        id: "__alloyId249"
    });
    $.__views.__alloyId246.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId250"
    });
    $.__views.__alloyId246.add($.__views.__alloyId250);
    $.__views.credibilidade = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: "8dp",
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#EEEEEE",
        id: "credibilidade",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left"
    });
    $.__views.__alloyId246.add($.__views.credibilidade);
    $.__views.__alloyId251 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "205dp",
        id: "__alloyId251"
    });
    $.__views.scrollview.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "APLICABILIDADE:",
        id: "__alloyId252"
    });
    $.__views.__alloyId251.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "APLICABILIDADE PODE SER DEFINIDA COMO A CAPACIDADE DE O PROJETO SER POSTO EM PRÁTICA E TRAZER RETORNOS PALPÁVEIS. PODE SER SINÔNIMO DE IMPLEMENTAÇÃO.",
        id: "__alloyId253"
    });
    $.__views.__alloyId251.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        id: "__alloyId254"
    });
    $.__views.__alloyId251.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId255"
    });
    $.__views.__alloyId251.add($.__views.__alloyId255);
    $.__views.aplicabilidade = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: "8dp",
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#EEEEEE",
        id: "aplicabilidade",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left"
    });
    $.__views.__alloyId251.add($.__views.aplicabilidade);
    $.__views.__alloyId256 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "185dp",
        id: "__alloyId256"
    });
    $.__views.scrollview.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "INOVAÇÃO:",
        id: "__alloyId257"
    });
    $.__views.__alloyId256.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "INOVAÇÃO ESTÁ RELACIONADO AO PROJETO E O QUE ELE TRAZ DE DIFERENTE NA PERCEPÇÃO DO CLIENTE, SEJA NA SUA ABORDAGEM OU EM CONHECIMENTOS NOVOS.",
        id: "__alloyId258"
    });
    $.__views.__alloyId256.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId259"
    });
    $.__views.__alloyId256.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId260"
    });
    $.__views.__alloyId256.add($.__views.__alloyId260);
    $.__views.inovacao = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: "8dp",
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#EEEEEE",
        id: "inovacao",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        textAlign: "left"
    });
    $.__views.__alloyId256.add($.__views.inovacao);
    $.__views.__alloyId261 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "185dp",
        id: "__alloyId261"
    });
    $.__views.scrollview.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "QUALIDADE:",
        id: "__alloyId262"
    });
    $.__views.__alloyId261.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "QUALIDADE DIZ RESPEITO AO PROJETO, SEJA EM TEMOS TÉCNICOS, ESTRUTURA DO DOCUMENTO, A APRESENTAÇÃO DO RESULTADO EM SI, etc.",
        id: "__alloyId263"
    });
    $.__views.__alloyId261.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId264"
    });
    $.__views.__alloyId261.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId265"
    });
    $.__views.__alloyId261.add($.__views.__alloyId265);
    $.__views.qualidade = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: "8dp",
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#EEEEEE",
        id: "qualidade",
        returnKeyType: Ti.UI.RETURNKEY_GO,
        hintText: "Enviar",
        textAlign: "left"
    });
    $.__views.__alloyId261.add($.__views.qualidade);
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
        top: "20",
        id: "enviar"
    });
    $.__views.scrollview.add($.__views.enviar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.button.addEventListener("click", function() {
        Ti.App.fireEvent("app:toggle", null);
    });
    $.button.addEventListener("touchstart", function() {
        this.backgroudColor = "#000";
        this.opacity = .2;
    });
    $.button.addEventListener("touchend", function() {
        this.backgroudColor = "transparent";
        this.opacity = 1;
    });
    $.enviar.addEventListener("click", function() {
        enviar();
    });
    $.preco.addEventListener("return", function() {
        $.prazo.focus();
    });
    $.prazo.addEventListener("return", function() {
        $.credibilidade.focus();
    });
    $.credibilidade.addEventListener("return", function() {
        $.aplicabilidade.focus();
    });
    $.aplicabilidade.addEventListener("return", function() {
        $.inovacao.focus();
    });
    $.inovacao.addEventListener("return", function() {
        $.qualidade.focus();
    });
    $.qualidade.addEventListener("return", function() {
        enviar();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;