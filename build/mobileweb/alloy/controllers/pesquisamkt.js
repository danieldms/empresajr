function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="pesquisamkt",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.pesquisamkt=Ti.UI.createView({layout:"vertical",id:"pesquisamkt"}),e.__views.pesquisamkt&&e.addTopLevelView(e.__views.pesquisamkt),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.pesquisamkt.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.title=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Consultoria Financeira",id:"title"}),e.__views.navView.add(e.__views.title),e.__views.__alloyId100=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId100"}),e.__views.pesquisamkt.add(e.__views.__alloyId100),e.__views.__alloyId101=Ti.UI.createView({left:0,width:"100%",height:100,layout:"horizontal",id:"__alloyId101"}),e.__views.__alloyId100.add(e.__views.__alloyId101),e.__views.__alloyId102=Ti.UI.createImageView({image:"images/outros/header_oculos.png",height:"50",width:"110",left:"10",top:"20",id:"__alloyId102"}),e.__views.__alloyId101.add(e.__views.__alloyId102),e.__views.__alloyId103=Ti.UI.createLabel({left:20,right:10,top:30,font:{fontWeight:"bold",fontSize:18},color:"#115a98",text:"PESQUISA DE\nMERCADO",id:"__alloyId103"}),e.__views.__alloyId101.add(e.__views.__alloyId103),e.__views.__alloyId104=Ti.UI.createView({height:22,left:0,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId104"}),e.__views.__alloyId100.add(e.__views.__alloyId104),e.__views.__alloyId105=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId105"}),e.__views.__alloyId104.add(e.__views.__alloyId105),e.__views.__alloyId106=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"A consultoria em finanças permite uma análise aprofundada da situação financeira da organização. Essa consiste no desenvolvimento de ferramentas de controle financeiro e na elaboração de uma estrutura de custos compatível com a realidade da mesma. Estas medidas possibilitam a visualização clara do desempenho da empresa e a determinação das melhores práticas para solucionar as oscilações e evitar a ocorrência de gastos desnecessários.\n\n\nEste serviço é indicado para empresas que:\n\n	• Desconhecem a sua lucratividade;\n	• Apresentam dificuldade no gerenciamento de seus gastos;\n	• Desejam construir ferramentas para controle e planejamento de gastos futuros.",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId106"}),e.__views.__alloyId100.add(e.__views.__alloyId106),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.button.add(i.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;