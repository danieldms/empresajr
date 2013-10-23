function Controller() {
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
    $.__views.__alloyId230 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "135dp",
        id: "__alloyId230"
    });
    $.__views.scrollview.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: "0",
        top: 13,
        text: "por que?:",
        id: "__alloyId232"
    });
    $.__views.__alloyId230.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        right: "0",
        bottom: "2",
        backgroundColor: "#eeeeee",
        id: "__alloyId233"
    });
    $.__views.__alloyId230.add($.__views.__alloyId233);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: 0,
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId233.add($.__views.mensagem);
    $.__views.__alloyId234 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "135dp",
        id: "__alloyId234"
    });
    $.__views.scrollview.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId235"
    });
    $.__views.__alloyId234.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: "0",
        top: 13,
        text: "por que?:",
        id: "__alloyId236"
    });
    $.__views.__alloyId234.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        right: "0",
        bottom: "2",
        backgroundColor: "#eeeeee",
        id: "__alloyId237"
    });
    $.__views.__alloyId234.add($.__views.__alloyId237);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: 0,
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId237.add($.__views.mensagem);
    $.__views.__alloyId238 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "135dp",
        id: "__alloyId238"
    });
    $.__views.scrollview.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: "0",
        top: 13,
        text: "por que?:",
        id: "__alloyId240"
    });
    $.__views.__alloyId238.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        right: "0",
        bottom: "2",
        backgroundColor: "#eeeeee",
        id: "__alloyId241"
    });
    $.__views.__alloyId238.add($.__views.__alloyId241);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: 0,
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId241.add($.__views.mensagem);
    $.__views.__alloyId242 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "140dp",
        id: "__alloyId242"
    });
    $.__views.scrollview.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: "0",
        top: 13,
        text: "por que?:",
        id: "__alloyId244"
    });
    $.__views.__alloyId242.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        right: "0",
        bottom: "2",
        backgroundColor: "#eeeeee",
        id: "__alloyId245"
    });
    $.__views.__alloyId242.add($.__views.__alloyId245);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: 0,
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId245.add($.__views.mensagem);
    $.__views.__alloyId246 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "135dp",
        id: "__alloyId246"
    });
    $.__views.scrollview.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId247"
    });
    $.__views.__alloyId246.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: "0",
        top: 13,
        text: "por que?:",
        id: "__alloyId248"
    });
    $.__views.__alloyId246.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        right: "0",
        bottom: "2",
        backgroundColor: "#eeeeee",
        id: "__alloyId249"
    });
    $.__views.__alloyId246.add($.__views.__alloyId249);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: 0,
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId249.add($.__views.mensagem);
    $.__views.__alloyId250 = Ti.UI.createView({
        left: "10",
        right: "10",
        top: "20",
        layout: "vertical",
        height: "135dp",
        id: "__alloyId250"
    });
    $.__views.scrollview.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createSlider({
        min: "0",
        max: "10",
        width: "100%",
        value: "0",
        id: "__alloyId251"
    });
    $.__views.__alloyId250.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: "0",
        top: 13,
        text: "por que?:",
        id: "__alloyId252"
    });
    $.__views.__alloyId250.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        right: "0",
        bottom: "2",
        backgroundColor: "#eeeeee",
        id: "__alloyId253"
    });
    $.__views.__alloyId250.add($.__views.__alloyId253);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: "70dp",
        borderWidth: 0,
        top: 5,
        left: 5,
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId253.add($.__views.mensagem);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;