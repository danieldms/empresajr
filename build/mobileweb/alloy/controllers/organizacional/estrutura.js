function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="organizacional/estrutura",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.estrutura=Ti.UI.createView({layout:"vertical",id:"estrutura"}),e.__views.estrutura&&e.addTopLevelView(e.__views.estrutura),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.estrutura.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId197=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Consultoria Organizacional",id:"__alloyId197"}),e.__views.navView.add(e.__views.__alloyId197),e.__views.__alloyId198=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId198"}),e.__views.estrutura.add(e.__views.__alloyId198),e.__views.__alloyId199=Ti.UI.createView({left:0,width:"100%",height:100,layout:"horizontal",id:"__alloyId199"}),e.__views.__alloyId198.add(e.__views.__alloyId199),e.__views.__alloyId200=Ti.UI.createImageView({image:"images/outros/header_oculos.png",height:"50",width:"110",left:"10",top:"20",id:"__alloyId200"}),e.__views.__alloyId199.add(e.__views.__alloyId200),e.__views.__alloyId201=Ti.UI.createLabel({left:20,right:10,top:30,font:{fontWeight:"bold",fontSize:18,fontFamily:"DIN-BoldAlternate"},color:"#115a98",text:"ESTRUTURAÇÃO \nORGANIZACIONAL",id:"__alloyId201"}),e.__views.__alloyId199.add(e.__views.__alloyId201),e.__views.__alloyId202=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId202"}),e.__views.__alloyId198.add(e.__views.__alloyId202),e.__views.__alloyId203=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId203"}),e.__views.__alloyId202.add(e.__views.__alloyId203),e.__views.__alloyId204=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"Este ramo da consultoria empresarial consiste em uma análise geral da estrutura organizacional, para que seja estabelecido o modelo mais eficiente de gestão. Envolve a elaboração de ferramentas que auxiliam a execução e o acompanhamento das atividades da empresa.\n\nEste serviço é indicado para empresas que:\n	• Necessitem de uma sistematização dos fluxos e rotinas e de uma padronização das atividades;\n	• Tenham funcionários (ou setores) sobrecarregados de atividades;\n	• Identifiquem ociosidade de funcionários ou setores;\n	• Cuja estrutura interna não acompanhou a velocidade de crescimento da organização.",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId204"}),e.__views.__alloyId198.add(e.__views.__alloyId204),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.button.add(i.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;