function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="marketing/plano",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.plano=Ti.UI.createView({layout:"vertical",id:"plano"}),e.__views.plano&&e.addTopLevelView(e.__views.plano),e.__views.navView=Ti.UI.createView({height:"44dp",width:"100%",top:0,left:0,backgroundImage:"/lightbg.png",id:"navView"}),e.__views.plano.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button",height:"50dp",width:"50dp",left:"0"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId199=Ti.UI.createImageView({image:"/images/icons/menu.png",width:"25dp",height:"15dp",id:"__alloyId199"}),e.__views.button.add(e.__views.__alloyId199),e.__views.__alloyId200=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Consultoria Marketing",id:"__alloyId200"}),e.__views.navView.add(e.__views.__alloyId200),e.__views.__alloyId201=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId201"}),e.__views.plano.add(e.__views.__alloyId201),e.__views.__alloyId202=Ti.UI.createView({left:0,width:"100%",height:100,layout:"horizontal",id:"__alloyId202"}),e.__views.__alloyId201.add(e.__views.__alloyId202),e.__views.__alloyId203=Ti.UI.createImageView({image:"/images/outros/header_oculos.png",height:"50",width:"110",left:"10",top:"20",id:"__alloyId203"}),e.__views.__alloyId202.add(e.__views.__alloyId203),e.__views.__alloyId204=Ti.UI.createLabel({left:20,right:10,top:30,font:{fontWeight:"bold",fontSize:18,fontFamily:"DIN-BoldAlternate"},color:"#115a98",text:"PLANO DE \nMARKETING",id:"__alloyId204"}),e.__views.__alloyId202.add(e.__views.__alloyId204),e.__views.__alloyId205=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId205"}),e.__views.__alloyId201.add(e.__views.__alloyId205),e.__views.__alloyId206=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId206"}),e.__views.__alloyId205.add(e.__views.__alloyId206),e.__views.__alloyId207=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"O plano de Marketing é um serviço de consultoria que consiste na definição de objetivos para orientar os passos da organização e na criação de táticas, estratégias e planos de ação para direcionar o produto ou serviço ao mercado.\n\nEste serviço é indicado para empresas que:\n	• Desejam definir estratégias de atuação no mercado;\n	• Querem identificar suas principais ameaças, oportunidades, potencialidades e fraquezas;\n	• Desejam obter dados estratégicos sobre o produto e/ou serviço;\n	• Desejam posicionar-se competitivamente.",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId207"}),e.__views.__alloyId201.add(e.__views.__alloyId207),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},e.button.addEventListener("click",function(){Ti.App.fireEvent("app:toggle",null)}),e.button.addEventListener("touchstart",function(){this.backgroudColor="#000",this.opacity=.2}),e.button.addEventListener("touchend",function(){this.backgroudColor="transparent",this.opacity=1}),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;