function Controller() {
    function clickPDF() {
        if (null != Alloy.Globals.Projeto.url) {
            var alerta = Titanium.UI.createAlertDialog({
                title: "Arquivos",
                message: "Deseja Enviar os arquivos para o seu Email?",
                buttonNames: [ "Sim", "Agora não" ],
                cancel: 1
            });
            alerta.addEventListener("click", function(e) {
                switch (e.index) {
                  case 0:
                    Alloy.Globals.Util.sendArquivos(Alloy.Globals.Projeto.id);
                    break;

                  case 1:
                    Titanium.Platform.openURL("http://empresajr.com/app/uploads/" + Alloy.Globals.Projeto.url.src);
                    break;

                  default:                }
            });
            alerta.show();
        } else alert("Não foi adicionado nenhum arquivo!");
    }
    function processa(e) {
        if ("sucesso" == e.type) {
            Alloy.Globals.Projeto = e;
            $.titulo_projeto.text = e.titulo;
            $.descritivo.text = e.descricao;
            $.deadline.text = e.deadline;
            40 > e.previsto && ($.previsto.color = "#000");
            $.sprevisto.width = e.previsto + "%";
            $.previsto.text = e.previsto + "%";
            40 > e.realizado && ($.realizado.color = "#000");
            $.srealizado.width = e.realizado + "%";
            $.realizado.text = e.realizado + "%";
            for (var i = 0, j = e.comentarios.length; j > i; i++) processaComentario(e.comentarios[i]);
            if (e.realizado >= 100 && null == Alloy.Globals.dialog) {
                var alerta = Titanium.UI.createAlertDialog({
                    title: "Projeto Concluído",
                    message: "Deseja fazer uma avaliação do projeto?",
                    buttonNames: [ "Agora", "Agora não" ],
                    cancel: 1
                });
                alerta.addEventListener("click", function(e) {
                    if (e.cancel === e.index || true === e.cancel) {
                        Alloy.Globals.dialog = 0;
                        return;
                    }
                    switch (e.index) {
                      case 0:
                        Ti.App.fireEvent("app:setLayout", {
                            layout: "sac/perguntas",
                            swipe: false
                        });
                        break;

                      case 1:
                        Titanium.API.info("Clicked button 1 (NO)");
                        Alloy.Globals.dialog = 0;
                        break;

                      default:                    }
                });
                alerta.show();
            }
        } else alert(e.message);
    }
    function newComentario(e) {
        Ti.App.fireEvent("app:preload", null);
        if ("sucesso" == e.type) {
            alert(e.message);
            Ti.App.fireEvent("app:setLayout", {
                layout: "sac",
                swipe: false
            });
        }
    }
    function processaComentario(data) {
        var color = null;
        color = data.usuarios_id == Alloy.Globals.Usuario.id ? "#105A99" : "#259D2D";
        var view = Ti.UI.createView({
            height: 15,
            top: 0,
            layout: "vertical"
        });
        var label = Ti.UI.createLabel({
            left: 10,
            top: 4,
            color: color,
            text: data.nome,
            font: {
                fontSize: 10,
                fontWeight: "bold"
            }
        });
        var time = Ti.UI.createLabel({
            right: 5,
            top: "-14",
            textAlign: "right",
            text: data.data,
            font: {
                fontSize: 10
            },
            color: "#CCC"
        });
        view.add(label);
        view.add(time);
        $.comentario.add(view);
        var line = Ti.UI.createView({
            left: 0,
            top: 2,
            backgroundColor: "#ccc",
            height: 1,
            width: "100%"
        });
        $.comentario.add(line);
        var descricao = Ti.UI.createLabel({
            left: 10,
            top: 5,
            right: 10,
            text: data.descricao,
            font: {
                fontSize: 10
            },
            color: "#9B9B9B"
        });
        $.comentario.add(descricao);
        $.comentario.setHeight(Ti.UI.SIZE);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sac";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sac = Ti.UI.createView({
        layout: "vertical",
        id: "sac"
    });
    $.__views.sac && $.addTopLevelView($.__views.sac);
    $.__views.navView = Ti.UI.createView({
        height: "54dp",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#105A99",
        id: "navView"
    });
    $.__views.sac.add($.__views.navView);
    $.__views.__alloyId140 = Ti.UI.createView({
        top: "15dp",
        id: "__alloyId140"
    });
    $.__views.navView.add($.__views.__alloyId140);
    $.__views.button = Ti.UI.createView({
        id: "button",
        height: "50dp",
        width: "50dp",
        left: "0"
    });
    $.__views.__alloyId140.add($.__views.button);
    $.__views.__alloyId141 = Ti.UI.createImageView({
        image: "/images/icons/menu.png",
        width: "25dp",
        height: "15dp",
        id: "__alloyId141"
    });
    $.__views.button.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
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
        id: "__alloyId142"
    });
    $.__views.__alloyId140.add($.__views.__alloyId142);
    $.__views.content = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        layout: "vertical",
        id: "content",
        contentHeight: "auto"
    });
    $.__views.sac.add($.__views.content);
    $.__views.__alloyId143 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId143"
    });
    $.__views.content.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Seu Projeto",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
        height: "130",
        width: "100%",
        layout: "horizontal",
        id: "__alloyId145"
    });
    $.__views.content.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        layout: "vertical",
        width: "80",
        left: "0",
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createImageView({
        image: "/images/icons/pdf.png",
        width: "50",
        height: "50",
        left: "10",
        top: "10",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    clickPDF ? $.__views.__alloyId147.addEventListener("click", clickPDF) : __defers["$.__views.__alloyId147!click!clickPDF"] = true;
    $.__views.__alloyId148 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "PREVISTO",
        top: "15",
        left: "10",
        id: "__alloyId148"
    });
    $.__views.__alloyId146.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "REALIZADO",
        left: "10",
        top: "7",
        id: "__alloyId149"
    });
    $.__views.__alloyId146.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        left: "0",
        width: "200",
        id: "__alloyId150"
    });
    $.__views.__alloyId145.add($.__views.__alloyId150);
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
    $.__views.__alloyId150.add($.__views.titulo_projeto);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "normal"
        },
        text: "DEADLINE",
        top: "5",
        left: "0",
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.deadline = Ti.UI.createLabel({
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        text: "0/00/0000",
        left: "0",
        id: "deadline"
    });
    $.__views.__alloyId150.add($.__views.deadline);
    $.__views.__alloyId152 = Ti.UI.createView({
        width: "220",
        backgroundColor: "#F5F5F5",
        top: "18",
        height: "17",
        left: "0",
        layout: "vertical",
        id: "__alloyId152"
    });
    $.__views.__alloyId150.add($.__views.__alloyId152);
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
    $.__views.__alloyId152.add($.__views.sprevisto);
    $.__views.previsto = Ti.UI.createLabel({
        text: "0%",
        color: "#FFF",
        top: "-16",
        font: "{fontSize: 10}",
        id: "previsto"
    });
    $.__views.__alloyId152.add($.__views.previsto);
    $.__views.__alloyId153 = Ti.UI.createView({
        width: "220",
        backgroundColor: "#F5F5F5",
        top: "4",
        height: "17",
        left: "0",
        layout: "vertical",
        id: "__alloyId153"
    });
    $.__views.__alloyId150.add($.__views.__alloyId153);
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
    $.__views.__alloyId153.add($.__views.srealizado);
    $.__views.realizado = Ti.UI.createLabel({
        text: "0%",
        color: "#FFF",
        top: "-16",
        font: "{fontSize: 10}",
        id: "realizado"
    });
    $.__views.__alloyId153.add($.__views.realizado);
    $.__views.__alloyId154 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        id: "__alloyId154"
    });
    $.__views.content.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Descritivo",
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.descritivo = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#666666",
        id: "descritivo",
        left: "10",
        right: "10",
        top: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    });
    $.__views.content.add($.__views.descritivo);
    $.__views.__alloyId156 = Ti.UI.createView({
        height: 26,
        left: 0,
        bottom: 2,
        backgroundColor: "#f5f5f5",
        top: "10",
        id: "__alloyId156"
    });
    $.__views.content.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        font: {
            fontSize: 11,
            fontWeight: "bold"
        },
        left: 5,
        color: "#8a8a8a",
        text: "Comentários",
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.comentario = Ti.UI.createView({
        id: "comentario",
        layout: "vertical",
        ignore: "true"
    });
    $.__views.content.add($.__views.comentario);
    $.__views.__alloyId158 = Ti.UI.createView({
        backgroundColor: "#eeeeee",
        left: "0",
        right: "0",
        top: "20",
        height: "200",
        layout: "vertical",
        id: "__alloyId158"
    });
    $.__views.content.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "vertical",
        top: "10",
        left: "10",
        right: "10",
        height: "130",
        bottom: "10",
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#c9c9c9",
        left: 5,
        top: 13,
        text: "Mensagem:",
        id: "__alloyId160"
    });
    $.__views.__alloyId159.add($.__views.__alloyId160);
    $.__views.mensagem = Ti.UI.createTextArea({
        height: 100,
        borderWidth: 0,
        top: 5,
        left: "11",
        right: 5,
        borderColor: "#FFF",
        id: "mensagem"
    });
    $.__views.__alloyId159.add($.__views.mensagem);
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
        title: "Enviar",
        id: "enviar"
    });
    $.__views.__alloyId158.add($.__views.enviar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Titanium.UI.createView({
        height: Ti.UI.SIZE,
        width: "100%",
        left: 0,
        top: 0
    });
    $.button.addEventListener("click", function() {
        Ti.App.fireEvent("app:toggle", null);
        $.mensagem.blur();
    });
    $.button.addEventListener("touchstart", function() {
        this.backgroudColor = "#000";
        this.opacity = .2;
    });
    $.button.addEventListener("touchend", function() {
        this.backgroudColor = "transparent";
        this.opacity = 1;
    });
    null != Alloy.Globals.Usuario && Alloy.Globals.Util.getProjeto(Alloy.Globals.Usuario.id, processa);
    $.enviar.addEventListener("click", function() {
        Ti.App.fireEvent("app:preload", null);
        Alloy.Globals.Util.newComentario($.mensagem.value, Alloy.Globals.Projeto.id, Alloy.Globals.Usuario.id, newComentario);
    });
    __defers["$.__views.__alloyId147!click!clickPDF"] && $.__views.__alloyId147.addEventListener("click", clickPDF);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;