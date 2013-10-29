function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pdf";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.pdf = Ti.UI.createWebView({
        height: "100%",
        width: "100%",
        id: "pdf"
    });
    $.__views.pdf && $.addTopLevelView($.__views.pdf);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    try {
        $.index.url = Alloy.Globals.Projeto.url;
    } catch (err) {
        Ti.App.fireEvent("app:setLayout", {
            layout: "sac",
            swipe: false
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;