function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="financeira/analise",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.analise=Ti.UI.createView({layout:"vertical",id:"analise"}),e.__views.analise&&e.addTopLevelView(e.__views.analise),e.__views.navView=Ti.UI.createView({height:"44dp",width:"100%",top:0,left:0,backgroundImage:"/lightbg.png",id:"navView"}),e.__views.analise.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button",height:"50dp",width:"50dp",left:"0"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId152=Ti.UI.createImageView({image:"/images/icons/menu.png",width:"25dp",height:"15dp",id:"__alloyId152"}),e.__views.button.add(e.__views.__alloyId152),e.__views.__alloyId153=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Consultoria Financeira",id:"__alloyId153"}),e.__views.navView.add(e.__views.__alloyId153),e.__views.__alloyId154=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId154"}),e.__views.analise.add(e.__views.__alloyId154),e.__views.__alloyId155=Ti.UI.createView({left:0,width:"100%",height:100,layout:"horizontal",id:"__alloyId155"}),e.__views.__alloyId154.add(e.__views.__alloyId155),e.__views.__alloyId156=Ti.UI.createImageView({image:"/images/outros/header_oculos.png",height:"50",width:"110",left:"10",top:"20",id:"__alloyId156"}),e.__views.__alloyId155.add(e.__views.__alloyId156),e.__views.__alloyId157=Ti.UI.createLabel({left:20,right:10,top:30,font:{fontWeight:"bold",fontSize:18,fontFamily:"DIN-BoldAlternate"},color:"#115a98",text:"ANÁLISE\nFINANCEIRA",id:"__alloyId157"}),e.__views.__alloyId155.add(e.__views.__alloyId157),e.__views.__alloyId158=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId158"}),e.__views.__alloyId154.add(e.__views.__alloyId158),e.__views.__alloyId159=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId159"}),e.__views.__alloyId158.add(e.__views.__alloyId159),e.__views.__alloyId160=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"Este serviço de consultoria voltado para a análise do desempenho da empresa, através de seus relatórios financeiros e contábeis. Ideal para fornecer insumos que auxiliem na tomada de decisão e para que o gestor conheça a real situação da empresa.\n\nEste serviço é indicado para empresas que:\n\n	• Buscam por análises mais embasadas para conhecer a real situação da mesma.",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId160"}),e.__views.__alloyId154.add(e.__views.__alloyId160),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},e.button.addEventListener("click",function(){Ti.App.fireEvent("app:toggle",null)}),e.button.addEventListener("touchstart",function(){this.backgroudColor="#000",this.opacity=.2}),e.button.addEventListener("touchend",function(){this.backgroudColor="transparent",this.opacity=1}),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;