function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="marketing/pesquisa",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.pesquisa=Ti.UI.createView({layout:"vertical",id:"pesquisa"}),e.__views.pesquisa&&e.addTopLevelView(e.__views.pesquisa),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.pesquisa.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId181=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Consultoria Marketing",id:"__alloyId181"}),e.__views.navView.add(e.__views.__alloyId181),e.__views.__alloyId182=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId182"}),e.__views.pesquisa.add(e.__views.__alloyId182),e.__views.__alloyId183=Ti.UI.createView({left:0,width:"100%",height:100,layout:"horizontal",id:"__alloyId183"}),e.__views.__alloyId182.add(e.__views.__alloyId183),e.__views.__alloyId184=Ti.UI.createImageView({image:"images/outros/header_oculos.png",height:"50",width:"110",left:"10",top:"20",id:"__alloyId184"}),e.__views.__alloyId183.add(e.__views.__alloyId184),e.__views.__alloyId185=Ti.UI.createLabel({left:20,right:10,top:30,font:{fontWeight:"bold",fontSize:18,fontFamily:"DIN-BoldAlternate"},color:"#115a98",text:"PESQUISA DE\nMERCADO",id:"__alloyId185"}),e.__views.__alloyId183.add(e.__views.__alloyId185),e.__views.__alloyId186=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId186"}),e.__views.__alloyId182.add(e.__views.__alloyId186),e.__views.__alloyId187=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId187"}),e.__views.__alloyId186.add(e.__views.__alloyId187),e.__views.__alloyId188=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"A Pesquisa de Mercado é um ramo da consultoria que, através da coleta de dados sobre o ambiente externo e interno, possibilita um suporte para as decisões de marketing, ampliando a sua efetividade.\n\nEste serviço é indicado para empresas que:\n	• Desejam conhecer um mercado específico;\n	• Desejam saber se há mercado para seu produto/serviço.\n	• Desejam saber se o negócio é viável dentro dos moldes pensados.",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId188"}),e.__views.__alloyId182.add(e.__views.__alloyId188),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.button.add(i.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;