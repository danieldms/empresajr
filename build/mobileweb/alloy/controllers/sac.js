function Controller(){function e(e){Ti.API.log(e),"sucesso"==e.type?(t.titulo_projeto.text=e.titulo,t.descritivo.text=e.descricao,t.deadline.text=e.deadline,40>e.previsto&&(t.previsto.color="#000"),t.sprevisto.width=e.previsto+"%",t.previsto.text=e.previsto+"%",40>e.realizado&&(t.realizado.color="#000"),t.srealizado.width=e.realizado+"%",t.realizado.text=e.realizado+"%"):alert(e.message)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="sac",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var t=this,i={};t.__views.sac=Ti.UI.createView({layout:"vertical",id:"sac"}),t.__views.sac&&t.addTopLevelView(t.__views.sac),t.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),t.__views.sac.add(t.__views.navView),t.__views.button=Ti.UI.createView({id:"button"}),t.__views.navView.add(t.__views.button),t.__views.__alloyId128=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"SAC",id:"__alloyId128"}),t.__views.navView.add(t.__views.__alloyId128),t.__views.__alloyId129=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId129"}),t.__views.sac.add(t.__views.__alloyId129),t.__views.__alloyId130=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId130"}),t.__views.__alloyId129.add(t.__views.__alloyId130),t.__views.__alloyId131=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Seu Projeto",id:"__alloyId131"}),t.__views.__alloyId130.add(t.__views.__alloyId131),t.__views.__alloyId132=Ti.UI.createView({height:"130",width:"100%",layout:"horizontal",id:"__alloyId132"}),t.__views.__alloyId129.add(t.__views.__alloyId132),t.__views.__alloyId133=Ti.UI.createView({layout:"vertical",width:"80",left:"0",id:"__alloyId133"}),t.__views.__alloyId132.add(t.__views.__alloyId133),t.__views.__alloyId134=Ti.UI.createImageView({image:"/ooo.png",width:"50",height:"50",left:"10",top:"10",id:"__alloyId134"}),t.__views.__alloyId133.add(t.__views.__alloyId134),t.__views.__alloyId135=Ti.UI.createLabel({font:{fontSize:10,fontWeight:"normal"},text:"PREVISTO",top:"15",left:"10",id:"__alloyId135"}),t.__views.__alloyId133.add(t.__views.__alloyId135),t.__views.__alloyId136=Ti.UI.createLabel({font:{fontSize:10,fontWeight:"normal"},text:"REALIZADO",left:"10",top:"7",id:"__alloyId136"}),t.__views.__alloyId133.add(t.__views.__alloyId136),t.__views.__alloyId137=Ti.UI.createView({layout:"vertical",top:"0",left:"0",width:"200",id:"__alloyId137"}),t.__views.__alloyId132.add(t.__views.__alloyId137),t.__views.titulo_projeto=Ti.UI.createLabel({font:{fontFamily:"DIN-BoldAlternate",fontSize:16},color:"#7F7F7F",text:"Titulo do projeto 2000",top:"0",left:"0",id:"titulo_projeto"}),t.__views.__alloyId137.add(t.__views.titulo_projeto),t.__views.__alloyId138=Ti.UI.createLabel({font:{fontSize:10,fontWeight:"normal"},text:"DEADLINE",top:"5",left:"0",id:"__alloyId138"}),t.__views.__alloyId137.add(t.__views.__alloyId138),t.__views.deadline=Ti.UI.createLabel({font:{fontSize:12,fontWeight:"bold"},text:"0/00/0000",left:"0",id:"deadline"}),t.__views.__alloyId137.add(t.__views.deadline),t.__views.__alloyId139=Ti.UI.createView({width:"220",backgroundColor:"#F5F5F5",top:"18",height:"17",left:"0",layout:"vertical",id:"__alloyId139"}),t.__views.__alloyId137.add(t.__views.__alloyId139),t.__views.sprevisto=Ti.UI.createView({backgroundGradient:{type:"linear",startPoint:{x:0,y:"50%"},endPoint:{x:"100%",y:"50%"},colors:[{color:"#125a95",offset:0},{color:"#4898dd",offset:1}],height:10,left:0},width:"0%",height:"15",top:"0",left:"0",id:"sprevisto"}),t.__views.__alloyId139.add(t.__views.sprevisto),t.__views.previsto=Ti.UI.createLabel({text:"0%",color:"#FFF",top:"-16",font:"{fontSize: 10}",id:"previsto"}),t.__views.__alloyId139.add(t.__views.previsto),t.__views.__alloyId140=Ti.UI.createView({width:"220",backgroundColor:"#F5F5F5",top:"4",height:"17",left:"0",layout:"vertical",id:"__alloyId140"}),t.__views.__alloyId137.add(t.__views.__alloyId140),t.__views.srealizado=Ti.UI.createView({backgroundGradient:{type:"linear",startPoint:{x:0,y:"50%"},endPoint:{x:"100%",y:"50%"},colors:[{color:"#125a95",offset:0},{color:"#1c5bc4",offset:1}],height:10,left:0},width:"0%",height:"15",left:"0",top:"0",id:"srealizado"}),t.__views.__alloyId140.add(t.__views.srealizado),t.__views.realizado=Ti.UI.createLabel({text:"0%",color:"#FFF",top:"-16",font:"{fontSize: 10}",id:"realizado"}),t.__views.__alloyId140.add(t.__views.realizado),t.__views.__alloyId141=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId141"}),t.__views.__alloyId129.add(t.__views.__alloyId141),t.__views.__alloyId142=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId142"}),t.__views.__alloyId141.add(t.__views.__alloyId142),t.__views.descritivo=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",id:"descritivo",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT}),t.__views.__alloyId129.add(t.__views.descritivo),t.__views.__alloyId143=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",top:"10",id:"__alloyId143"}),t.__views.__alloyId129.add(t.__views.__alloyId143),t.__views.__alloyId144=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Comentários",id:"__alloyId144"}),t.__views.__alloyId143.add(t.__views.__alloyId144),t.__views.comentario=Ti.UI.createView({id:"comentario"}),t.__views.__alloyId129.add(t.__views.comentario),i.destroy=function(){},_.extend(t,t.__views);var a=arguments[0]||{};t.button.add(a.backview),null!=Alloy.Globals.Usuario&&Alloy.Globals.Util.getProjeto(Alloy.Globals.Usuario.id,e),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;