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
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.sobre.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.__alloyId145 = Ti.UI.createLabel({
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
        text: "Sobre",
        id: "__alloyId145"
    });
    $.__views.navView.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId146"
    });
    $.__views.sobre.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "200",
        layout: "horizontal",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createImageView({
        image: "images/outros/sobre_header.png",
        width: "100%",
        height: "auto",
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createView({
        height: 22,
        left: 0,
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "__alloyId149"
    });
    $.__views.__alloyId146.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 10,
        top: 6,
        color: "#8a8a8a",
        text: "SOBRE",
        id: "__alloyId150"
    });
    $.__views.__alloyId149.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: 'Ao longo da sua existência, a Empresa JR. ADM UFBA exerceu papel de liderança no Movimento Empresa Júnior (MEJ) com forte participação nas instâncias representativas e nos encontros realizados. Fundada em 1989, a empresa surgiu de uma iniciativa de estudantes da Escolda de Administração da UFBA que após contato com universitários da Fundação Getúlio Vargas, fundaram a empresa. Durante a década de 90, a empresa se profissionalizou, estruturou o seu processo seletivo e realizou inúmeros projetos de consultoria para micro e pequenas empresas. Ao longo dos anos, foi possível se inserir no mercado local, aumentando a quantidade dos projetos e a capacitação propiciada aos membros. A partir do ano 2000, Empresa JR. ADM UFBA se firmou como uma das melhores empresas juniores do país.\n\nNo ano de 2001, foi elaborado o primeiro planejamento estratégico anual, sendo a primeira empresa júnior a adotar a prática. Em 2003, entrou para a história do MEJ ao organizar o OXI ENEJ, o décimo primeiro Encontro Nacional de Empresas Juniores, que foi o maior encontro já realizado e onde foi criada a Confederação Brasileira de Empresas Juniores, a Brasil Júnior. Em 2005 a Empresa JR. ADM UFBA ganhou seu primeiro prêmio de qualidade, o Prêmio Realce Empresarial, hoje MPE Brasil, onde concorreu com mais de 3.500 empresas de mercado. Este prêmio aumentou a visibilidade da empresa no mercado local propiciando uma grande divulgação da sua marca. Neste mesmo ano, foi realizada uma grande reestruturação do funcionamento da empresa para modernizar seu funcionamento e ajustá-lo à execução dos projetos, dando origem à estrutura de núcleos de produção.\n\nNo final de 2007, para que a empresa oferecesse cada vez mais soluções para os clientes, foi repensada a sua forma de fazer consultoria. Dessa forma, os projetos se tornaram mais focados na realidade dos clientes através de diagnósticos iniciais aprofundados e, além disso, os projetos passaram a ser realizados por consultores generalistas, o que implica em um aumento da visão sistêmica dos projetos, da capacitação de consultores e em soluções mais aplicáveis à realidade dos clientes. Em 2008, o novo modelo de consultoria foi totalmente implementado e foi institucionalizada a Gerência de Qualidade, responsável pelos Comitês de Qualidade: que avaliam constantemente as práticas da empresa. Para atestar mais uma vez o nosso compromisso com a Excelência, fomos premiados com o PGQB (Prêmio Gestão Qualidade Bahia) ciclo 2008 no nível 1, realizado pela Associação Baiana para Gestão Competitiva (ABGC). Esse foi, sem dúvida, um dos grandes reconhecimentos de todos esses 20 anos de pioneirismo, um estímulo à continuar "Capacitando para Transformar".',
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId151"
    });
    $.__views.__alloyId146.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createView({
        height: "50",
        id: "__alloyId152"
    });
    $.__views.__alloyId146.add($.__views.__alloyId152);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;