function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="negocio/plano",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.plano=Ti.UI.createView({layout:"vertical",id:"plano"}),e.__views.plano&&e.addTopLevelView(e.__views.plano),e.__views.navView=Ti.UI.createView({height:"44dp",width:"100%",top:0,left:0,backgroundImage:"/lightbg.png",id:"navView"}),e.__views.plano.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button",height:"50dp",width:"50dp",left:"0"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId226=Ti.UI.createImageView({image:"/images/icons/menu.png",width:"25dp",height:"15dp",id:"__alloyId226"}),e.__views.button.add(e.__views.__alloyId226),e.__views.__alloyId227=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Quer Abrir seu Negócio?",id:"__alloyId227"}),e.__views.navView.add(e.__views.__alloyId227),e.__views.__alloyId228=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId228"}),e.__views.plano.add(e.__views.__alloyId228),e.__views.__alloyId229=Ti.UI.createView({left:0,width:"100%",height:100,id:"__alloyId229"}),e.__views.__alloyId228.add(e.__views.__alloyId229),e.__views.__alloyId230=Ti.UI.createImageView({image:"/images/outros/header_oculos.png",height:"50",width:"110",left:"10",top:"20",id:"__alloyId230"}),e.__views.__alloyId229.add(e.__views.__alloyId230),e.__views.__alloyId231=Ti.UI.createLabel({left:"140dp",right:10,top:30,font:{fontWeight:"bold",fontSize:18,fontFamily:"DIN-BoldAlternate"},color:"#115a98",text:"PLANO DE \nNEGÓCIOS",id:"__alloyId231"}),e.__views.__alloyId229.add(e.__views.__alloyId231),e.__views.__alloyId232=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId232"}),e.__views.__alloyId228.add(e.__views.__alloyId232),e.__views.__alloyId233=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId233"}),e.__views.__alloyId232.add(e.__views.__alloyId233),e.__views.__alloyId234=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"O Plano de Negócios é um projeto da consultoria que norteia o início ou expansão de qualquer negócio e projeta seus resultados futuros.\n\nEste serviço é indicado para empresas que:\n\n	• Desejem a estruturação total de um futuro empreendimento;\n	• Desejem analisar a viabilidade econômica - financeira do futuro empreendimento.",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId234"}),e.__views.__alloyId228.add(e.__views.__alloyId234),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},e.button.addEventListener("click",function(){Ti.App.fireEvent("app:toggle",null)}),e.button.addEventListener("touchstart",function(){this.backgroudColor="#000",this.opacity=.2}),e.button.addEventListener("touchend",function(){this.backgroudColor="transparent",this.opacity=1}),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;