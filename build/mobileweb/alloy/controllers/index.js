function Controller(){function e(){this.backgroundColor="#000"}function t(){this.backgroundColor="transparent"}function i(){if(null==this.subView){var e=null;e="true"===this.restrito?"login":this.id,Ti.App.fireEvent("app:setLayout",{layout:e}),e=null,null!=r&&r!=this&&(r.backgroundColor="transparent"),r=this}else{var t=Ti.UI.create2DMatrix(),i=Titanium.UI.createAnimation({duration:100});if("sub_mkt"==this.subView)var a=o.sub_mkt;"false"===this.toggle?(this.toggle="true",t=t.rotate(180),a.setHeight(160),i.transform=t,this.children[1].animate(i)):(this.toggle="false",t=t.rotate(0),a.setHeight(0),i.transform=t,this.children[1].animate(i))}}function a(e){e!=d&&"left"==d&&(o.main.animate({left:260,duration:400}),d="right"),e!=d&&"right"==d&&(o.main.animate({left:0,duration:400}),d="left")}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="index",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var o=this,s={},l={};o.__views.index=Ti.UI.createWindow({backgroundColor:"white",exitOnClose:!0,fullscreen:!1,navBarHidden:"true",id:"index"}),o.__views.index&&o.addTopLevelView(o.__views.index),o.__views.menuView=Ti.UI.createView({width:260,left:0,top:0,zIndex:0,height:"100%",backgroundColor:"#1E1E1E",layout:"vertical",id:"menuView"}),o.__views.index.add(o.__views.menuView),o.__views.menuNavView=Ti.UI.createView({backgroundColor:"#042745",height:44,left:0,top:0,id:"menuNavView"}),o.__views.menuView.add(o.__views.menuNavView),o.__views.__alloyId32=Ti.UI.createImageView({image:"images/icons/casa.png",width:"22",height:"22",left:"10",top:"13",id:"__alloyId32"}),o.__views.menuNavView.add(o.__views.__alloyId32),o.__views.titlenav=Ti.UI.createLabel({color:"#FFF",left:40,font:{fontSize:20,fontWeight:"bold"},top:15,text:"Menu",id:"titlenav"}),o.__views.menuNavView.add(o.__views.titlenav),o.__views.__alloyId33=Ti.UI.createView({height:"20",width:"100%",backgroundColor:"#6a6967",layout:"horizontal",id:"__alloyId33"}),o.__views.menuView.add(o.__views.__alloyId33),o.__views.__alloyId34=Ti.UI.createImageView({image:"images/icons/oculos.png",height:"10",top:"5",width:"22",left:"10",id:"__alloyId34"}),o.__views.__alloyId33.add(o.__views.__alloyId34),o.__views.__alloyId35=Ti.UI.createLabel({color:"#f9f7f8",left:5,font:{fontSize:11},top:4,text:"SERVIÇOS DE CONSULTORIA",id:"__alloyId35"}),o.__views.__alloyId33.add(o.__views.__alloyId35),o.__views.menuContentView=Ti.UI.createScrollView({backgroundColor:"transparent",id:"menuContentView",layout:"vertical",scrollingEnabled:"true"}),o.__views.menuView.add(o.__views.menuContentView),o.__views.consultoriafinanceira=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"consultoriafinanceira",subheight:"80"}),o.__views.menuContentView.add(o.__views.consultoriafinanceira),i?o.__views.consultoriafinanceira.addEventListener("click",i):l["$.__views.consultoriafinanceira!click!clickMenu"]=!0,e?o.__views.consultoriafinanceira.addEventListener("touchstart",e):l["$.__views.consultoriafinanceira!touchstart!touchStart"]=!0,o.__views.__alloyId36=Ti.UI.createLabel({color:"#f9f7f8",left:"10",font:{fontFamily:"DIN-BoldAlternate"},top:12,text:"Financeira",id:"__alloyId36"}),o.__views.consultoriafinanceira.add(o.__views.__alloyId36),o.__views.img=Ti.UI.createImageView({width:10,height:6,left:10,top:20,anchorPoint:{x:.5,y:.5},id:"img",visible:"false",image:"images/icons/expand.png"}),o.__views.consultoriafinanceira.add(o.__views.img),o.__views.__alloyId37=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId37"}),o.__views.menuContentView.add(o.__views.__alloyId37),o.__views.__alloyId38=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId38"}),o.__views.menuContentView.add(o.__views.__alloyId38),o.__views.__alloyId39=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",subView:"sub_mkt",id:"__alloyId39"}),o.__views.menuContentView.add(o.__views.__alloyId39),i?o.__views.__alloyId39.addEventListener("click",i):l["$.__views.__alloyId39!click!clickMenu"]=!0,e?o.__views.__alloyId39.addEventListener("touchstart",e):l["$.__views.__alloyId39!touchstart!touchStart"]=!0,t?o.__views.__alloyId39.addEventListener("touchend",t):l["$.__views.__alloyId39!touchend!touchEnd"]=!0,o.__views.__alloyId40=Ti.UI.createLabel({color:"#f9f7f8",left:"10",font:{fontFamily:"DIN-BoldAlternate"},top:12,text:"Marketing",id:"__alloyId40"}),o.__views.__alloyId39.add(o.__views.__alloyId40),o.__views.img=Ti.UI.createImageView({width:10,height:6,left:10,top:20,anchorPoint:{x:.5,y:.5},id:"img",image:"images/icons/expand.png"}),o.__views.__alloyId39.add(o.__views.img),o.__views.sub_mkt=Ti.UI.createView({backgroundColor:"#302c2b",layout:"vertical",height:"0",id:"sub_mkt"}),o.__views.menuContentView.add(o.__views.sub_mkt),o.__views.__alloyId41=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId41"}),o.__views.sub_mkt.add(o.__views.__alloyId41),o.__views.planomkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"planomkt",swipe:"false"}),o.__views.sub_mkt.add(o.__views.planomkt),i?o.__views.planomkt.addEventListener("click",i):l["$.__views.planomkt!click!clickMenu"]=!0,o.__views.__alloyId42=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12},top:12,text:"Plano MKT",id:"__alloyId42"}),o.__views.planomkt.add(o.__views.__alloyId42),o.__views.__alloyId43=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId43"}),o.__views.sub_mkt.add(o.__views.__alloyId43),o.__views.pesquisamkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"pesquisamkt"}),o.__views.sub_mkt.add(o.__views.pesquisamkt),i?o.__views.pesquisamkt.addEventListener("click",i):l["$.__views.pesquisamkt!click!clickMenu"]=!0,o.__views.__alloyId44=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12},top:12,text:"Pesquisa de mercado",id:"__alloyId44"}),o.__views.pesquisamkt.add(o.__views.__alloyId44),o.__views.__alloyId45=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId45"}),o.__views.sub_mkt.add(o.__views.__alloyId45),o.__views.estudomkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"estudomkt"}),o.__views.sub_mkt.add(o.__views.estudomkt),i?o.__views.estudomkt.addEventListener("click",i):l["$.__views.estudomkt!click!clickMenu"]=!0,o.__views.__alloyId46=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12},top:12,text:"Estudo de viabilidade",id:"__alloyId46"}),o.__views.estudomkt.add(o.__views.__alloyId46),o.__views.__alloyId47=Ti.UI.createLabel({color:"#f9f7f8",left:2,font:{fontSize:10},top:12,text:"(mercadológico e financeiro)",id:"__alloyId47"}),o.__views.estudomkt.add(o.__views.__alloyId47),o.__views.__alloyId48=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId48"}),o.__views.sub_mkt.add(o.__views.__alloyId48),o.__views.negociosmkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"negociosmkt"}),o.__views.sub_mkt.add(o.__views.negociosmkt),i?o.__views.negociosmkt.addEventListener("click",i):l["$.__views.negociosmkt!click!clickMenu"]=!0,o.__views.__alloyId49=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12},top:12,text:"Plano de negócios",id:"__alloyId49"}),o.__views.negociosmkt.add(o.__views.__alloyId49),o.__views.__alloyId50=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId50"}),o.__views.menuContentView.add(o.__views.__alloyId50),o.__views.__alloyId51=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId51"}),o.__views.menuContentView.add(o.__views.__alloyId51),o.__views.organizacional=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"organizacional",subheight:"80"}),o.__views.menuContentView.add(o.__views.organizacional),i?o.__views.organizacional.addEventListener("click",i):l["$.__views.organizacional!click!clickMenu"]=!0,e?o.__views.organizacional.addEventListener("touchstart",e):l["$.__views.organizacional!touchstart!touchStart"]=!0,o.__views.__alloyId52=Ti.UI.createLabel({color:"#f9f7f8",left:"10",font:{fontFamily:"DIN-BoldAlternate"},top:12,text:"Organizacional",id:"__alloyId52"}),o.__views.organizacional.add(o.__views.__alloyId52),o.__views.img=Ti.UI.createImageView({width:10,height:6,left:10,top:20,anchorPoint:{x:.5,y:.5},id:"img",visible:"false",image:"images/icons/expand.png"}),o.__views.organizacional.add(o.__views.img),o.__views.__alloyId53=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId53"}),o.__views.menuContentView.add(o.__views.__alloyId53),o.__views.__alloyId54=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId54"}),o.__views.menuContentView.add(o.__views.__alloyId54),o.__views.sobre=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"sobre"}),o.__views.menuContentView.add(o.__views.sobre),i?o.__views.sobre.addEventListener("click",i):l["$.__views.sobre!click!clickMenu"]=!0,e?o.__views.sobre.addEventListener("touchstart",e):l["$.__views.sobre!touchstart!touchStart"]=!0,o.__views.__alloyId55=Ti.UI.createImageView({image:"images/icons/sobre.png",left:"10",width:"21",height:"20",top:"10",id:"__alloyId55"}),o.__views.sobre.add(o.__views.__alloyId55),o.__views.__alloyId56=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontFamily:"DIN-BoldAlternate"},top:12,text:"Sobre a Empresa Jr.",id:"__alloyId56"}),o.__views.sobre.add(o.__views.__alloyId56),o.__views.__alloyId57=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId57"}),o.__views.menuContentView.add(o.__views.__alloyId57),o.__views.__alloyId58=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId58"}),o.__views.menuContentView.add(o.__views.__alloyId58),o.__views.sac=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"sac",restrito:"true"}),o.__views.menuContentView.add(o.__views.sac),i?o.__views.sac.addEventListener("click",i):l["$.__views.sac!click!clickMenu"]=!0,e?o.__views.sac.addEventListener("touchstart",e):l["$.__views.sac!touchstart!touchStart"]=!0,o.__views.__alloyId59=Ti.UI.createImageView({image:"images/icons/SAC.png",left:"10",width:"16",height:"20",top:"10",id:"__alloyId59"}),o.__views.sac.add(o.__views.__alloyId59),o.__views.__alloyId60=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontFamily:"DIN-BoldAlternate"},top:12,text:"SAC",id:"__alloyId60"}),o.__views.sac.add(o.__views.__alloyId60),o.__views.__alloyId61=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId61"}),o.__views.menuContentView.add(o.__views.__alloyId61),o.__views.__alloyId62=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId62"}),o.__views.menuContentView.add(o.__views.__alloyId62),o.__views.mapa=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"mapa"}),o.__views.menuContentView.add(o.__views.mapa),i?o.__views.mapa.addEventListener("click",i):l["$.__views.mapa!click!clickMenu"]=!0,e?o.__views.mapa.addEventListener("touchstart",e):l["$.__views.mapa!touchstart!touchStart"]=!0,o.__views.__alloyId63=Ti.UI.createImageView({image:"images/icons/mapa.png",left:"10",width:"15",height:"20",top:"10",id:"__alloyId63"}),o.__views.mapa.add(o.__views.__alloyId63),o.__views.__alloyId64=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontFamily:"DIN-BoldAlternate"},top:12,text:"Mapa de Localização",id:"__alloyId64"}),o.__views.mapa.add(o.__views.__alloyId64),o.__views.__alloyId65=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId65"}),o.__views.menuContentView.add(o.__views.__alloyId65),o.__views.__alloyId66=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId66"}),o.__views.menuContentView.add(o.__views.__alloyId66),o.__views.faleconosco=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"faleconosco"}),o.__views.menuContentView.add(o.__views.faleconosco),i?o.__views.faleconosco.addEventListener("click",i):l["$.__views.faleconosco!click!clickMenu"]=!0,e?o.__views.faleconosco.addEventListener("touchstart",e):l["$.__views.faleconosco!touchstart!touchStart"]=!0,o.__views.__alloyId67=Ti.UI.createImageView({image:"images/icons/faleconosco.png",left:"9",width:"23",height:"20",top:"10",id:"__alloyId67"}),o.__views.faleconosco.add(o.__views.__alloyId67),o.__views.__alloyId68=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontFamily:"DIN-BoldAlternate"},top:12,text:"Fale Conosco",id:"__alloyId68"}),o.__views.faleconosco.add(o.__views.__alloyId68),o.__views.__alloyId69=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId69"}),o.__views.menuContentView.add(o.__views.__alloyId69),o.__views.__alloyId70=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId70"}),o.__views.menuContentView.add(o.__views.__alloyId70),o.__views.main=Ti.UI.createView({width:"100%",height:"100%",top:0,left:0,zIndex:10,backgroundColor:"#FFF",layout:"vertical",id:"main"}),o.__views.index.add(o.__views.main),s.destroy=function(){},_.extend(o,o.__views);var n=null,r=null,d="left",c=Ti.UI.createView({height:"50dp",width:"50dp",left:0}),h=Ti.UI.createImageView({height:"15dp",width:"25dp",image:"images/icons/menu.png"});c.addEventListener("click",function(){Ti.App.fireEvent("app:swipe")}),c.addEventListener("touchstart",function(){this.backgroundColor="#000",this.opacity=.2}),c.addEventListener("touchend",function(){this.backgroundColor="transparent",this.opacity=1}),c.add(h);var u={backview:c};o.index.addEventListener("swipe",function(e){("left"==e.direction||"right"==e.direction)&&a(e.direction)}),Ti.App.addEventListener("app:swipe",function(){"left"==d?a("right"):a("left")}),Ti.App.addEventListener("app:setLayout",function(e){var t=Alloy.createController(e.layout,u).getView();o.main.add(t),o.main.remove(n),n=t,t=null,null==e.swipe&&Ti.App.fireEvent("app:swipe",null)}),null==n&&(n=Alloy.createController("mainView",u).getView(),o.main.add(n)),Ti.UI.Android&&(o.index.windowSoftInputMode=Ti.UI.Android.SOFT_INPUT_ADJUST_PAN),o.index.open(),l["$.__views.consultoriafinanceira!click!clickMenu"]&&o.__views.consultoriafinanceira.addEventListener("click",i),l["$.__views.consultoriafinanceira!touchstart!touchStart"]&&o.__views.consultoriafinanceira.addEventListener("touchstart",e),l["$.__views.__alloyId39!click!clickMenu"]&&o.__views.__alloyId39.addEventListener("click",i),l["$.__views.__alloyId39!touchstart!touchStart"]&&o.__views.__alloyId39.addEventListener("touchstart",e),l["$.__views.__alloyId39!touchend!touchEnd"]&&o.__views.__alloyId39.addEventListener("touchend",t),l["$.__views.planomkt!click!clickMenu"]&&o.__views.planomkt.addEventListener("click",i),l["$.__views.pesquisamkt!click!clickMenu"]&&o.__views.pesquisamkt.addEventListener("click",i),l["$.__views.estudomkt!click!clickMenu"]&&o.__views.estudomkt.addEventListener("click",i),l["$.__views.negociosmkt!click!clickMenu"]&&o.__views.negociosmkt.addEventListener("click",i),l["$.__views.organizacional!click!clickMenu"]&&o.__views.organizacional.addEventListener("click",i),l["$.__views.organizacional!touchstart!touchStart"]&&o.__views.organizacional.addEventListener("touchstart",e),l["$.__views.sobre!click!clickMenu"]&&o.__views.sobre.addEventListener("click",i),l["$.__views.sobre!touchstart!touchStart"]&&o.__views.sobre.addEventListener("touchstart",e),l["$.__views.sac!click!clickMenu"]&&o.__views.sac.addEventListener("click",i),l["$.__views.sac!touchstart!touchStart"]&&o.__views.sac.addEventListener("touchstart",e),l["$.__views.mapa!click!clickMenu"]&&o.__views.mapa.addEventListener("click",i),l["$.__views.mapa!touchstart!touchStart"]&&o.__views.mapa.addEventListener("touchstart",e),l["$.__views.faleconosco!click!clickMenu"]&&o.__views.faleconosco.addEventListener("click",i),l["$.__views.faleconosco!touchstart!touchStart"]&&o.__views.faleconosco.addEventListener("touchstart",e),_.extend(o,s)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;