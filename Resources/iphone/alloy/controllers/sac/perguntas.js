function Controller() {
    function enviar() {
        var data = {
            indica: $.Sindica.value,
            preco: $.SPreco.value,
            prazo: $.Sprazo.value,
            credibilidade: $.Scredibilidade.value,
            aplicabilidade: $.Saplicabilidade.value,
            inovacao: $.Sinovacao.value,
            qualidade: $.Squalidade.value,
            preco_texto: $.preco.value,
            prazo_texto: $.prazo.value,
            credibilidade_texto: $.credibilidade.value,
            aplicabilidade_texto: $.aplicabilidade.value,
            inovacao_texto: $.inovacao.value,
            qualidade_texto: $.qualidade.value,
            "class": "newPesquisa",
            type: "mobile",
            projetos_id: Alloy.Globals.Projeto.id
        };
        Ti.App.fireEvent("app:preload", null);
        Alloy.Globals.Util.sendQuestionario(data, processa);
    }
    function processa(data) {
        Ti.App.fireEvent("app:preload", null);
        if (null != data) {
            alert(data.message);
            "sucesso" == data.type && Ti.App.fireEvent("app:setLayout", {
                layout: "sac",
                swipe: false
            });
        }
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
    $.__views.__alloyId219 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        ignore: "true",
        contentHeight: "auto",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true",
        id: "__alloyId219"
    });
    $.__views.perguntas.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId220"
    });
    $.__views.__alloyId219.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Questionário",
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: "10dp",
        text: "Ajude-nos a melhorar nossos serviços!",
        id: "__alloyId222"
    });
    $.__views.__alloyId219.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "Responda as seguintes perguntas:",
        id: "__alloyId223"
    });
    $.__views.__alloyId219.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "130dp",
        id: "__alloyId224"
    });
    $.__views.__alloyId219.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "O(a) Sr.(a) indicaria a Empresa JR. ADM UFBA para amigos ou familiares?",
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: 'Numa escala de 0 até 10, sendo 0 "NÃO INDICARIA" e 10 "COM CERTEZA INDICARIA". QUAL A PROBABILIDADE DISSO ACONTECER?',
        id: "__alloyId226"
    });
    $.__views.__alloyId224.add($.__views.__alloyId226);
    $.__views.Sindica = Ti.UI.createSlider({
        min: "0",
        id: "Sindica",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        ignore: "true"
    });
    $.__views.__alloyId224.add($.__views.Sindica);
    $.__views.__alloyId227 = Ti.UI.createView({
        layout: "horizontal",
        height: "20dp",
        id: "__alloyId227"
    });
    $.__views.__alloyId224.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "0",
        left: "4%",
        color: "#ccc",
        id: "__alloyId228"
    });
    $.__views.__alloyId227.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "1",
        left: "7%",
        color: "#ccc",
        id: "__alloyId229"
    });
    $.__views.__alloyId227.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "2",
        left: "7%",
        color: "#ccc",
        id: "__alloyId230"
    });
    $.__views.__alloyId227.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "3",
        left: "7%",
        color: "#ccc",
        id: "__alloyId231"
    });
    $.__views.__alloyId227.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "4",
        left: "7%",
        color: "#ccc",
        id: "__alloyId232"
    });
    $.__views.__alloyId227.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "5",
        left: "7%",
        color: "#ccc",
        id: "__alloyId233"
    });
    $.__views.__alloyId227.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "6",
        left: "7%",
        color: "#999",
        id: "__alloyId234"
    });
    $.__views.__alloyId227.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "7",
        left: "7%",
        color: "#999",
        id: "__alloyId235"
    });
    $.__views.__alloyId227.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "8",
        left: "7%",
        color: "#999",
        id: "__alloyId236"
    });
    $.__views.__alloyId227.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "9",
        left: "7%",
        color: "#999",
        id: "__alloyId237"
    });
    $.__views.__alloyId227.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "10",
        left: "7%",
        color: "#999",
        id: "__alloyId238"
    });
    $.__views.__alloyId227.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "0",
        layout: "vertical",
        height: "225dp",
        id: "__alloyId239"
    });
    $.__views.__alloyId219.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "PREÇO:",
        id: "__alloyId240"
    });
    $.__views.__alloyId239.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "O PREÇO ESTÁ LIGADO AO QUE O CLIENTE ACHOU JUSTO APÓS A FINALIZAÇÃO DO PROJETO. SE O PROJETO REALIZADO ESTEVE DE ACORDO COM O PREÇO DEFINIDO ANTES.",
        id: "__alloyId241"
    });
    $.__views.__alloyId239.add($.__views.__alloyId241);
    $.__views.SPreco = Ti.UI.createSlider({
        id: "SPreco",
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        ignore: "true"
    });
    $.__views.__alloyId239.add($.__views.SPreco);
    $.__views.__alloyId242 = Ti.UI.createView({
        layout: "horizontal",
        height: "20dp",
        id: "__alloyId242"
    });
    $.__views.__alloyId239.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "0",
        left: "4%",
        color: "#ccc",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "1",
        left: "7%",
        color: "#ccc",
        id: "__alloyId244"
    });
    $.__views.__alloyId242.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "2",
        left: "7%",
        color: "#ccc",
        id: "__alloyId245"
    });
    $.__views.__alloyId242.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "3",
        left: "7%",
        color: "#ccc",
        id: "__alloyId246"
    });
    $.__views.__alloyId242.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "4",
        left: "7%",
        color: "#ccc",
        id: "__alloyId247"
    });
    $.__views.__alloyId242.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "5",
        left: "7%",
        color: "#ccc",
        id: "__alloyId248"
    });
    $.__views.__alloyId242.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "6",
        left: "7%",
        color: "#999",
        id: "__alloyId249"
    });
    $.__views.__alloyId242.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "7",
        left: "7%",
        color: "#999",
        id: "__alloyId250"
    });
    $.__views.__alloyId242.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "8",
        left: "7%",
        color: "#999",
        id: "__alloyId251"
    });
    $.__views.__alloyId242.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "9",
        left: "7%",
        color: "#999",
        id: "__alloyId252"
    });
    $.__views.__alloyId242.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "10",
        left: "7%",
        color: "#999",
        id: "__alloyId253"
    });
    $.__views.__alloyId242.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId254"
    });
    $.__views.__alloyId239.add($.__views.__alloyId254);
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
    $.__views.__alloyId239.add($.__views.preco);
    $.__views.__alloyId255 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "235dp",
        id: "__alloyId255"
    });
    $.__views.__alloyId219.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "PRAZO:",
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "O PRAZO CORRESPONDE AO CUMPRIMENTO QUE FOI ACORDADO NO INÍCIO. SE, AO FINAL, O CLIENTE FICOU SATISFEITO COM O PRAZO E OS PERÍODOS EM ATRASO, CASO TENHA OCORRIDO.",
        id: "__alloyId257"
    });
    $.__views.__alloyId255.add($.__views.__alloyId257);
    $.__views.Sprazo = Ti.UI.createSlider({
        id: "Sprazo",
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        ignore: "true"
    });
    $.__views.__alloyId255.add($.__views.Sprazo);
    $.__views.__alloyId258 = Ti.UI.createView({
        layout: "horizontal",
        height: "20dp",
        id: "__alloyId258"
    });
    $.__views.__alloyId255.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "0",
        left: "4%",
        color: "#ccc",
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "1",
        left: "7%",
        color: "#ccc",
        id: "__alloyId260"
    });
    $.__views.__alloyId258.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "2",
        left: "7%",
        color: "#ccc",
        id: "__alloyId261"
    });
    $.__views.__alloyId258.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "3",
        left: "7%",
        color: "#ccc",
        id: "__alloyId262"
    });
    $.__views.__alloyId258.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "4",
        left: "7%",
        color: "#ccc",
        id: "__alloyId263"
    });
    $.__views.__alloyId258.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "5",
        left: "7%",
        color: "#ccc",
        id: "__alloyId264"
    });
    $.__views.__alloyId258.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "6",
        left: "7%",
        color: "#999",
        id: "__alloyId265"
    });
    $.__views.__alloyId258.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "7",
        left: "7%",
        color: "#999",
        id: "__alloyId266"
    });
    $.__views.__alloyId258.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "8",
        left: "7%",
        color: "#999",
        id: "__alloyId267"
    });
    $.__views.__alloyId258.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "9",
        left: "7%",
        color: "#999",
        id: "__alloyId268"
    });
    $.__views.__alloyId258.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "10",
        left: "7%",
        color: "#999",
        id: "__alloyId269"
    });
    $.__views.__alloyId258.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId270"
    });
    $.__views.__alloyId255.add($.__views.__alloyId270);
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
    $.__views.__alloyId255.add($.__views.prazo);
    $.__views.__alloyId271 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "245dp",
        id: "__alloyId271"
    });
    $.__views.__alloyId219.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "CREDIBILIDADE:",
        id: "__alloyId272"
    });
    $.__views.__alloyId271.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "CREDIBILIDADE EQUIVALE AO QUE O CLIENTE ACHA DA IMAGEM DA EMPRESA, LOGO ENQUADRA-SE O PROFISSIONALISMO, CONHECIMENTO TÉCNICO, POSTURA, TEMPO DE EXITÊNCIA, A UNIVERSIDADE, APÓS A FINALIZAÇÃO DO PROJETO.",
        id: "__alloyId273"
    });
    $.__views.__alloyId271.add($.__views.__alloyId273);
    $.__views.Scredibilidade = Ti.UI.createSlider({
        id: "Scredibilidade",
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        ignore: "true"
    });
    $.__views.__alloyId271.add($.__views.Scredibilidade);
    $.__views.__alloyId274 = Ti.UI.createView({
        layout: "horizontal",
        height: "20dp",
        id: "__alloyId274"
    });
    $.__views.__alloyId271.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "0",
        left: "4%",
        color: "#ccc",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "1",
        left: "7%",
        color: "#ccc",
        id: "__alloyId276"
    });
    $.__views.__alloyId274.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "2",
        left: "7%",
        color: "#ccc",
        id: "__alloyId277"
    });
    $.__views.__alloyId274.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "3",
        left: "7%",
        color: "#ccc",
        id: "__alloyId278"
    });
    $.__views.__alloyId274.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "4",
        left: "7%",
        color: "#ccc",
        id: "__alloyId279"
    });
    $.__views.__alloyId274.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "5",
        left: "7%",
        color: "#ccc",
        id: "__alloyId280"
    });
    $.__views.__alloyId274.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "6",
        left: "7%",
        color: "#999",
        id: "__alloyId281"
    });
    $.__views.__alloyId274.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "7",
        left: "7%",
        color: "#999",
        id: "__alloyId282"
    });
    $.__views.__alloyId274.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "8",
        left: "7%",
        color: "#999",
        id: "__alloyId283"
    });
    $.__views.__alloyId274.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "9",
        left: "7%",
        color: "#999",
        id: "__alloyId284"
    });
    $.__views.__alloyId274.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "10",
        left: "7%",
        color: "#999",
        id: "__alloyId285"
    });
    $.__views.__alloyId274.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId286"
    });
    $.__views.__alloyId271.add($.__views.__alloyId286);
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
    $.__views.__alloyId271.add($.__views.credibilidade);
    $.__views.__alloyId287 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "225dp",
        id: "__alloyId287"
    });
    $.__views.__alloyId219.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "APLICABILIDADE:",
        id: "__alloyId288"
    });
    $.__views.__alloyId287.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "APLICABILIDADE PODE SER DEFINIDA COMO A CAPACIDADE DE O PROJETO SER POSTO EM PRÁTICA E TRAZER RETORNOS PALPÁVEIS. PODE SER SINÔNIMO DE IMPLEMENTAÇÃO.",
        id: "__alloyId289"
    });
    $.__views.__alloyId287.add($.__views.__alloyId289);
    $.__views.Saplicabilidade = Ti.UI.createSlider({
        id: "Saplicabilidade",
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        top: "5dp",
        ignore: "true"
    });
    $.__views.__alloyId287.add($.__views.Saplicabilidade);
    $.__views.__alloyId290 = Ti.UI.createView({
        layout: "horizontal",
        height: "20dp",
        id: "__alloyId290"
    });
    $.__views.__alloyId287.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "0",
        left: "4%",
        color: "#ccc",
        id: "__alloyId291"
    });
    $.__views.__alloyId290.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "1",
        left: "7%",
        color: "#ccc",
        id: "__alloyId292"
    });
    $.__views.__alloyId290.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "2",
        left: "7%",
        color: "#ccc",
        id: "__alloyId293"
    });
    $.__views.__alloyId290.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "3",
        left: "7%",
        color: "#ccc",
        id: "__alloyId294"
    });
    $.__views.__alloyId290.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "4",
        left: "7%",
        color: "#ccc",
        id: "__alloyId295"
    });
    $.__views.__alloyId290.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "5",
        left: "7%",
        color: "#ccc",
        id: "__alloyId296"
    });
    $.__views.__alloyId290.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "6",
        left: "7%",
        color: "#999",
        id: "__alloyId297"
    });
    $.__views.__alloyId290.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "7",
        left: "7%",
        color: "#999",
        id: "__alloyId298"
    });
    $.__views.__alloyId290.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "8",
        left: "7%",
        color: "#999",
        id: "__alloyId299"
    });
    $.__views.__alloyId290.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "9",
        left: "7%",
        color: "#999",
        id: "__alloyId300"
    });
    $.__views.__alloyId290.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "10",
        left: "7%",
        color: "#999",
        id: "__alloyId301"
    });
    $.__views.__alloyId290.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId302"
    });
    $.__views.__alloyId287.add($.__views.__alloyId302);
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
    $.__views.__alloyId287.add($.__views.aplicabilidade);
    $.__views.__alloyId303 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "205dp",
        id: "__alloyId303"
    });
    $.__views.__alloyId219.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "INOVAÇÃO:",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "INOVAÇÃO ESTÁ RELACIONADO AO PROJETO E O QUE ELE TRAZ DE DIFERENTE NA PERCEPÇÃO DO CLIENTE, SEJA NA SUA ABORDAGEM OU EM CONHECIMENTOS NOVOS.",
        id: "__alloyId305"
    });
    $.__views.__alloyId303.add($.__views.__alloyId305);
    $.__views.Sinovacao = Ti.UI.createSlider({
        id: "Sinovacao",
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        ignore: "true"
    });
    $.__views.__alloyId303.add($.__views.Sinovacao);
    $.__views.__alloyId306 = Ti.UI.createView({
        layout: "horizontal",
        height: "20dp",
        id: "__alloyId306"
    });
    $.__views.__alloyId303.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "0",
        left: "4%",
        color: "#ccc",
        id: "__alloyId307"
    });
    $.__views.__alloyId306.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "1",
        left: "7%",
        color: "#ccc",
        id: "__alloyId308"
    });
    $.__views.__alloyId306.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "2",
        left: "7%",
        color: "#ccc",
        id: "__alloyId309"
    });
    $.__views.__alloyId306.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "3",
        left: "7%",
        color: "#ccc",
        id: "__alloyId310"
    });
    $.__views.__alloyId306.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "4",
        left: "7%",
        color: "#ccc",
        id: "__alloyId311"
    });
    $.__views.__alloyId306.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "5",
        left: "7%",
        color: "#ccc",
        id: "__alloyId312"
    });
    $.__views.__alloyId306.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "6",
        left: "7%",
        color: "#999",
        id: "__alloyId313"
    });
    $.__views.__alloyId306.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "7",
        left: "7%",
        color: "#999",
        id: "__alloyId314"
    });
    $.__views.__alloyId306.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "8",
        left: "7%",
        color: "#999",
        id: "__alloyId315"
    });
    $.__views.__alloyId306.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "9",
        left: "7%",
        color: "#999",
        id: "__alloyId316"
    });
    $.__views.__alloyId306.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "10",
        left: "7%",
        color: "#999",
        id: "__alloyId317"
    });
    $.__views.__alloyId306.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId318"
    });
    $.__views.__alloyId303.add($.__views.__alloyId318);
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
    $.__views.__alloyId303.add($.__views.inovacao);
    $.__views.__alloyId319 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "205dp",
        id: "__alloyId319"
    });
    $.__views.__alloyId219.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "QUALIDADE:",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#6E6E6E",
        left: 5,
        top: 0,
        text: "QUALIDADE DIZ RESPEITO AO PROJETO, SEJA EM TEMOS TÉCNICOS, ESTRUTURA DO DOCUMENTO, A APRESENTAÇÃO DO RESULTADO EM SI, etc.",
        id: "__alloyId321"
    });
    $.__views.__alloyId319.add($.__views.__alloyId321);
    $.__views.Squalidade = Ti.UI.createSlider({
        id: "Squalidade",
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        ignore: "true"
    });
    $.__views.__alloyId319.add($.__views.Squalidade);
    $.__views.__alloyId322 = Ti.UI.createView({
        layout: "horizontal",
        height: "20dp",
        id: "__alloyId322"
    });
    $.__views.__alloyId319.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "0",
        left: "4%",
        color: "#ccc",
        id: "__alloyId323"
    });
    $.__views.__alloyId322.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "1",
        left: "7%",
        color: "#ccc",
        id: "__alloyId324"
    });
    $.__views.__alloyId322.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "2",
        left: "7%",
        color: "#ccc",
        id: "__alloyId325"
    });
    $.__views.__alloyId322.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "3",
        left: "7%",
        color: "#ccc",
        id: "__alloyId326"
    });
    $.__views.__alloyId322.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "4",
        left: "7%",
        color: "#ccc",
        id: "__alloyId327"
    });
    $.__views.__alloyId322.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "5",
        left: "7%",
        color: "#ccc",
        id: "__alloyId328"
    });
    $.__views.__alloyId322.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "6",
        left: "7%",
        color: "#999",
        id: "__alloyId329"
    });
    $.__views.__alloyId322.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "7",
        left: "7%",
        color: "#999",
        id: "__alloyId330"
    });
    $.__views.__alloyId322.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "8",
        left: "7%",
        color: "#999",
        id: "__alloyId331"
    });
    $.__views.__alloyId322.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "9",
        left: "7%",
        color: "#999",
        id: "__alloyId332"
    });
    $.__views.__alloyId322.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        text: "10",
        left: "7%",
        color: "#999",
        id: "__alloyId333"
    });
    $.__views.__alloyId322.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#6E6E6E",
        left: "0",
        top: "10",
        text: "por que?:",
        id: "__alloyId334"
    });
    $.__views.__alloyId319.add($.__views.__alloyId334);
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
    $.__views.__alloyId319.add($.__views.qualidade);
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
    $.__views.__alloyId219.add($.__views.enviar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
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
    $.SPreco.addEventListener("change", function() {
        $.SPreco.value = $.SPreco.value.toFixed();
    });
    $.Sindica.addEventListener("change", function() {
        $.Sindica.value = $.Sindica.value.toFixed();
    });
    $.Sprazo.addEventListener("change", function() {
        $.Sprazo.value = $.Sprazo.value.toFixed();
    });
    $.Scredibilidade.addEventListener("change", function() {
        $.Scredibilidade.value = $.Scredibilidade.value.toFixed();
    });
    $.Saplicabilidade.addEventListener("change", function() {
        $.Saplicabilidade.value = $.Saplicabilidade.value.toFixed();
    });
    $.Sinovacao.addEventListener("change", function() {
        $.Sinovacao.value = $.Sinovacao.value.toFixed();
    });
    $.Squalidade.addEventListener("change", function() {
        $.Squalidade.value = $.Squalidade.value.toFixed();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;