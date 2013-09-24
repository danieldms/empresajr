function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "organizacional";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.organizacional = Ti.UI.createView({
        layout: "vertical",
        id: "organizacional"
    });
    $.__views.organizacional && $.addTopLevelView($.__views.organizacional);
    $.__views.navView = Ti.UI.createView({
        height: 44,
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "lightbg.png",
        id: "navView"
    });
    $.__views.organizacional.add($.__views.navView);
    $.__views.button = Ti.UI.createView({
        id: "button"
    });
    $.__views.navView.add($.__views.button);
    $.__views.title = Ti.UI.createLabel({
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
        text: "Organizacional",
        id: "title"
    });
    $.__views.navView.add($.__views.title);
    $.__views.__alloyId99 = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId99"
    });
    $.__views.organizacional.add($.__views.__alloyId99);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.button.add(args.backview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;