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
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.sobre.add($.__views.navView);
    $.__views.__alloyId161 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId161"
    });
    $.__views.navView.add($.__views.__alloyId161);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId161.add($.__views.button);
    $.__views.__alloyId162 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId162"
    });
    $.__views.button.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
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
        text: "Sobre",
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId164"
    });
    $.__views.sobre.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        left: 0,
        width: "100%",
        height: "200dp",
        id: "__alloyId165"
    });
    $.__views.__alloyId164.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createImageView({
        image: "/images/outros/sobre_header.png",
        width: "100%",
        height: "auto",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId167"
    });
    $.__views.__alloyId164.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "SOBRE",
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        text: "Com mais de duas décadas de experiência no mercado, a Empresa Jr. ADM UFBA é uma empresa focada em mostrar resultados efetivos para seus clientes através de projetos de consultoria com preços abaixo do mercado.  Fundada em 1989, a empresa é pioneira no Movimento Empresa Júnior nacional, sendo composta e gerida integralmente por estudantes do curso de graduação em Administração da UFBA, contando com a orientação de professores da universidade.  A qualidade dos nossos serviços é reconhecida nos prêmios Realce empresarial de 2005 e PGQB Nível 1 2008 (Prêmio Gestão Qualidade Bahia).",
        left: "10",
        right: "10",
        top: "10",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId169"
    });
    $.__views.__alloyId164.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createView({
        height: "50",
        id: "__alloyId170"
    });
    $.__views.__alloyId164.add($.__views.__alloyId170);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;