function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="mainView",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.mainView=Ti.UI.createView({layout:"vertical",id:"mainView"}),e.__views.mainView&&e.addTopLevelView(e.__views.mainView),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.mainView.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId80=Ti.UI.createLabel({font:{fontSize:"18dp",fontWeight:"bold"},height:"46dp",color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Empresa Jr.",id:"__alloyId80"}),e.__views.navView.add(e.__views.__alloyId80);var i=[];e.__views.view1=Ti.UI.createView({id:"view1",backgroundImage:"images/outros/background.png",layout:"vertical"}),i.push(e.__views.view1),e.__views.__alloyId82=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:30,text:"CONSULTORIA",id:"__alloyId82"}),e.__views.view1.add(e.__views.__alloyId82),e.__views.__alloyId83=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:"0",text:"ORGANIZACIONAL",id:"__alloyId83"}),e.__views.view1.add(e.__views.__alloyId83),e.__views.__alloyId84=Ti.UI.createLabel({font:{fontSize:12},color:"#115a98",left:30,top:10,right:50,text:"ANÁLISE GERAL DA ORGANIZAÇÃO PARA QUE SE ESTABELEÇA UM MODELO DE ESTRUTURA MAIS ADEQUADO.",id:"__alloyId84"}),e.__views.view1.add(e.__views.__alloyId84),e.__views.view2=Ti.UI.createView({id:"view2",backgroundImage:"images/outros/background.png",layout:"vertical"}),i.push(e.__views.view2),e.__views.__alloyId85=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:30,text:"SOLUÇÃO",id:"__alloyId85"}),e.__views.view2.add(e.__views.__alloyId85),e.__views.__alloyId86=Ti.UI.createLabel({font:{fontSize:18,fontWeight:"bold"},color:"#115a98",left:30,top:"0",text:"EM MARKETING",id:"__alloyId86"}),e.__views.view2.add(e.__views.__alloyId86),e.__views.__alloyId87=Ti.UI.createLabel({font:{fontSize:12},color:"#115a98",left:30,top:10,right:50,text:"PESQUISAS DE MERCADO E ESTUDO EXPLORATÓRIOS, ELABORAÇÃO DE PLANOS DE MARKETING.",id:"__alloyId87"}),e.__views.view2.add(e.__views.__alloyId87),e.__views.scrollview=Ti.UI.createScrollableView({views:i,id:"scrollview",showPagingControl:"true"}),e.__views.mainView.add(e.__views.scrollview),t.destroy=function(){},_.extend(e,e.__views);var a=arguments[0]||{};e.button.add(a.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;