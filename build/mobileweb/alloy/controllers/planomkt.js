function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="planomkt",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.planomkt=Ti.UI.createView({layout:"vertical",id:"planomkt"}),e.__views.planomkt&&e.addTopLevelView(e.__views.planomkt),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.planomkt.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId121=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Consultoria Financeira",id:"__alloyId121"}),e.__views.navView.add(e.__views.__alloyId121),e.__views.__alloyId122=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId122"}),e.__views.planomkt.add(e.__views.__alloyId122),e.__views.__alloyId123=Ti.UI.createView({left:0,width:"100%",height:100,layout:"horizontal",id:"__alloyId123"}),e.__views.__alloyId122.add(e.__views.__alloyId123),e.__views.__alloyId124=Ti.UI.createImageView({image:"images/outros/header_oculos.png",height:"50",width:"110",left:"10",top:"20",id:"__alloyId124"}),e.__views.__alloyId123.add(e.__views.__alloyId124),e.__views.__alloyId125=Ti.UI.createLabel({left:20,right:10,top:30,font:{fontWeight:"bold",fontSize:18,fontFamily:"DIN-BoldAlternate"},color:"#115a98",text:"PLANO DE\nMARKETING",id:"__alloyId125"}),e.__views.__alloyId123.add(e.__views.__alloyId125),e.__views.__alloyId126=Ti.UI.createView({height:22,left:0,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId126"}),e.__views.__alloyId122.add(e.__views.__alloyId126),e.__views.__alloyId127=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId127"}),e.__views.__alloyId126.add(e.__views.__alloyId127),e.__views.__alloyId128=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"A consultoria em finanças permite uma análise aprofundada da situação financeira da organização. Essa consiste no desenvolvimento de ferramentas de controle financeiro e na elaboração de uma estrutura de custos compatível com a realidade da mesma. Estas medidas possibilitam a visualização clara do desempenho da empresa e a determinação das melhores práticas para solucionar as oscilações e evitar a ocorrência de gastos desnecessários.\n\n\nEste serviço é indicado para empresas que:\n\n	• Desconhecem a sua lucratividade;\n	• Apresentam dificuldade no gerenciamento de seus gastos;\n	• Desejam construir ferramentas para controle e planejamento de gastos futuros.",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId128"}),e.__views.__alloyId122.add(e.__views.__alloyId128),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.button.add(i.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;