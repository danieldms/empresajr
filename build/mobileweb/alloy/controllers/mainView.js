function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="mainView",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.mainView=Ti.UI.createView({layout:"vertical",id:"mainView"}),e.__views.mainView&&e.addTopLevelView(e.__views.mainView),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.mainView.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId85=Ti.UI.createLabel({text:"MENU",left:"50dp",color:"#2276be",id:"__alloyId85"}),e.__views.navView.add(e.__views.__alloyId85);var i=[];e.__views.view1=Ti.UI.createView({id:"view1",layout:"vertical"}),i.push(e.__views.view1),e.__views.__alloyId87=Ti.UI.createImageView({image:"images/outros/home_empresajr.png",width:"200",height:"48",top:"70",left:"40",id:"__alloyId87"}),e.__views.view1.add(e.__views.__alloyId87),e.__views.view2=Ti.UI.createView({id:"view2",layout:"vertical"}),i.push(e.__views.view2),e.__views.__alloyId88=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:30,text:"CONSULTORIA",id:"__alloyId88"}),e.__views.view2.add(e.__views.__alloyId88),e.__views.__alloyId89=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:"0",text:"ORGANIZACIONAL",id:"__alloyId89"}),e.__views.view2.add(e.__views.__alloyId89),e.__views.__alloyId90=Ti.UI.createLabel({font:{fontSize:10},color:"#115a98",left:30,top:5,right:50,text:"ANÁLISE GERAL DA ORGANIZAÇÃO PARA QUE SE ESTABELEÇA UM MODELO DE ESTRUTURA MAIS ADEQUADO.",id:"__alloyId90"}),e.__views.view2.add(e.__views.__alloyId90),e.__views.__alloyId91=Ti.UI.createImageView({image:"images/outros/home_icon1.png",width:"150",height:"179",top:"20",id:"__alloyId91"}),e.__views.view2.add(e.__views.__alloyId91),e.__views.view3=Ti.UI.createView({id:"view3",layout:"vertical"}),i.push(e.__views.view3),e.__views.__alloyId92=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:30,text:"SOLUÇÃO",id:"__alloyId92"}),e.__views.view3.add(e.__views.__alloyId92),e.__views.__alloyId93=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:"0",text:"EM MARKETING",id:"__alloyId93"}),e.__views.view3.add(e.__views.__alloyId93),e.__views.__alloyId94=Ti.UI.createLabel({font:{fontSize:10},color:"#115a98",left:30,top:5,right:50,text:"PESQUISAS DE MERCADO E ESTUDO EXPLORATÓRIOS, ELABORAÇÃO DE PLANOS DE MARKETING.",id:"__alloyId94"}),e.__views.view3.add(e.__views.__alloyId94),e.__views.__alloyId95=Ti.UI.createImageView({image:"images/outros/home_icon2.png",width:"150",height:"194",top:"20",id:"__alloyId95"}),e.__views.view3.add(e.__views.__alloyId95),e.__views.scrollview=Ti.UI.createScrollableView({views:i,id:"scrollview",showPagingControl:"true",backgroundImage:"images/outros/background.png"}),e.__views.mainView.add(e.__views.scrollview),t.destroy=function(){},_.extend(e,e.__views);var o=arguments[0]||{};e.button.add(o.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;