function Controller(){function e(){this.backgroundColor="#000"}function t(){this.backgroundColor="transparent"}function i(){if(null==this.subView){var e=null;e="true"===this.restrito?"login":this.id,Ti.App.fireEvent("app:setLayout",{layout:e}),e=null,null!=r&&r!=this&&(r.backgroundColor="transparent"),r=this}else{var t=Ti.UI.create2DMatrix(),i=Titanium.UI.createAnimation({duration:100});if("sub_mkt"==this.subView)var a=o.sub_mkt;"false"===this.toggle?(this.toggle="true",t=t.rotate(180),a.setHeight(160),i.transform=t,this.children[1].animate(i)):(this.toggle="false",t=t.rotate(0),a.setHeight(0),i.transform=t,this.children[1].animate(i))}}function a(){"reset"==d?(d="right",o.main.animate(w)):(d="reset",o.main.animate(v))}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="index",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var o=this,s={},n={};o.__views.index=Ti.UI.createWindow({backgroundColor:"#105a99",exitOnClose:!0,fullscreen:!1,navBarHidden:!0,id:"index"}),o.__views.index&&o.addTopLevelView(o.__views.index),o.__views.menuView=Ti.UI.createView({width:260,left:0,top:0,zIndex:0,height:"100%",backgroundColor:"#1E1E1E",layout:"vertical",id:"menuView"}),o.__views.index.add(o.__views.menuView),o.__views.menuNavView=Ti.UI.createView({backgroundColor:"#042745",height:44,left:0,top:0,layout:"horizontal",id:"menuNavView"}),o.__views.menuView.add(o.__views.menuNavView),o.__views.__alloyId35=Ti.UI.createImageView({image:"images/icons/casa.png",width:"22",height:"22",left:"10",top:"12",id:"__alloyId35"}),o.__views.menuNavView.add(o.__views.__alloyId35),o.__views.__alloyId36=Ti.UI.createLabel({color:"#FFF",left:"5",font:{fontSize:"18dp",fontWeight:"bold"},top:"5",height:"46dp",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"Menu",id:"__alloyId36"}),o.__views.menuNavView.add(o.__views.__alloyId36),o.__views.__alloyId37=Ti.UI.createView({height:"20",width:"100%",backgroundColor:"#6a6967",layout:"horizontal",id:"__alloyId37"}),o.__views.menuView.add(o.__views.__alloyId37),o.__views.__alloyId38=Ti.UI.createImageView({image:"images/icons/oculos.png",height:"10",top:"5",width:"22",left:"10",id:"__alloyId38"}),o.__views.__alloyId37.add(o.__views.__alloyId38),o.__views.__alloyId39=Ti.UI.createLabel({color:"#f9f7f8",left:5,font:{fontSize:11,fontFamily:"Arial"},top:4,text:"SERVIÇOS DE CONSULTORIA",id:"__alloyId39"}),o.__views.__alloyId37.add(o.__views.__alloyId39),o.__views.menuContentView=Ti.UI.createScrollView({backgroundColor:"transparent",id:"menuContentView",layout:"vertical",scrollingEnabled:"true"}),o.__views.menuView.add(o.__views.menuContentView),o.__views.consultoriafinanceira=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"consultoriafinanceira",subheight:"80"}),o.__views.menuContentView.add(o.__views.consultoriafinanceira),i?o.__views.consultoriafinanceira.addEventListener("click",i):n["$.__views.consultoriafinanceira!click!clickMenu"]=!0,e?o.__views.consultoriafinanceira.addEventListener("touchstart",e):n["$.__views.consultoriafinanceira!touchstart!touchStart"]=!0,o.__views.__alloyId40=Ti.UI.createLabel({color:"#f9f7f8",left:"10",font:{fontSize:14},top:12,text:"Financeira",id:"__alloyId40"}),o.__views.consultoriafinanceira.add(o.__views.__alloyId40),o.__views.img=Ti.UI.createImageView({width:10,height:6,left:10,top:20,anchorPoint:{x:.5,y:.5},id:"img",visible:"false",image:"images/icons/expand.png"}),o.__views.consultoriafinanceira.add(o.__views.img),o.__views.__alloyId41=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId41"}),o.__views.menuContentView.add(o.__views.__alloyId41),o.__views.__alloyId42=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId42"}),o.__views.menuContentView.add(o.__views.__alloyId42),o.__views.__alloyId43=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",subView:"sub_mkt",id:"__alloyId43"}),o.__views.menuContentView.add(o.__views.__alloyId43),i?o.__views.__alloyId43.addEventListener("click",i):n["$.__views.__alloyId43!click!clickMenu"]=!0,e?o.__views.__alloyId43.addEventListener("touchstart",e):n["$.__views.__alloyId43!touchstart!touchStart"]=!0,t?o.__views.__alloyId43.addEventListener("touchend",t):n["$.__views.__alloyId43!touchend!touchEnd"]=!0,o.__views.__alloyId44=Ti.UI.createLabel({color:"#f9f7f8",left:"10",font:{fontSize:14},top:12,text:"Marketing",id:"__alloyId44"}),o.__views.__alloyId43.add(o.__views.__alloyId44),o.__views.img=Ti.UI.createImageView({width:10,height:6,left:10,top:20,anchorPoint:{x:.5,y:.5},id:"img",image:"images/icons/expand.png"}),o.__views.__alloyId43.add(o.__views.img),o.__views.sub_mkt=Ti.UI.createView({backgroundColor:"#302c2b",layout:"vertical",height:"0",id:"sub_mkt"}),o.__views.menuContentView.add(o.__views.sub_mkt),o.__views.__alloyId45=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId45"}),o.__views.sub_mkt.add(o.__views.__alloyId45),o.__views.planomkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"planomkt",swipe:"false"}),o.__views.sub_mkt.add(o.__views.planomkt),i?o.__views.planomkt.addEventListener("click",i):n["$.__views.planomkt!click!clickMenu"]=!0,o.__views.__alloyId46=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12,fontFamily:"Arial"},top:12,text:"Plano de Marketing",id:"__alloyId46"}),o.__views.planomkt.add(o.__views.__alloyId46),o.__views.__alloyId47=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId47"}),o.__views.sub_mkt.add(o.__views.__alloyId47),o.__views.pesquisamkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"pesquisamkt"}),o.__views.sub_mkt.add(o.__views.pesquisamkt),i?o.__views.pesquisamkt.addEventListener("click",i):n["$.__views.pesquisamkt!click!clickMenu"]=!0,o.__views.__alloyId48=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12,fontFamily:"Arial"},top:12,text:"Pesquisa de Mercado",id:"__alloyId48"}),o.__views.pesquisamkt.add(o.__views.__alloyId48),o.__views.__alloyId49=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId49"}),o.__views.sub_mkt.add(o.__views.__alloyId49),o.__views.estudomkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"estudomkt"}),o.__views.sub_mkt.add(o.__views.estudomkt),i?o.__views.estudomkt.addEventListener("click",i):n["$.__views.estudomkt!click!clickMenu"]=!0,o.__views.__alloyId50=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12,fontFamily:"Arial"},top:12,text:"Estudo de Viabilidade",id:"__alloyId50"}),o.__views.estudomkt.add(o.__views.__alloyId50),o.__views.__alloyId51=Ti.UI.createLabel({color:"#f9f7f8",left:2,font:{fontSize:10,fontFamily:"Arial"},top:14,text:"(mercadológico e financeiro)",id:"__alloyId51"}),o.__views.estudomkt.add(o.__views.__alloyId51),o.__views.__alloyId52=Ti.UI.createView({height:"1",backgroundColor:"#b1b0ac",width:"100%",id:"__alloyId52"}),o.__views.sub_mkt.add(o.__views.__alloyId52),o.__views.negociosmkt=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",sub:"false",id:"negociosmkt"}),o.__views.sub_mkt.add(o.__views.negociosmkt),i?o.__views.negociosmkt.addEventListener("click",i):n["$.__views.negociosmkt!click!clickMenu"]=!0,o.__views.__alloyId53=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:12,fontFamily:"Arial"},top:12,text:"Plano de Negócios",id:"__alloyId53"}),o.__views.negociosmkt.add(o.__views.__alloyId53),o.__views.__alloyId54=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId54"}),o.__views.menuContentView.add(o.__views.__alloyId54),o.__views.__alloyId55=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId55"}),o.__views.menuContentView.add(o.__views.__alloyId55),o.__views.organizacional=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"organizacional",subheight:"80"}),o.__views.menuContentView.add(o.__views.organizacional),i?o.__views.organizacional.addEventListener("click",i):n["$.__views.organizacional!click!clickMenu"]=!0,e?o.__views.organizacional.addEventListener("touchstart",e):n["$.__views.organizacional!touchstart!touchStart"]=!0,o.__views.__alloyId56=Ti.UI.createLabel({color:"#f9f7f8",left:"10",font:{fontSize:14},top:12,text:"Organizacional",id:"__alloyId56"}),o.__views.organizacional.add(o.__views.__alloyId56),o.__views.img=Ti.UI.createImageView({width:10,height:6,left:10,top:20,anchorPoint:{x:.5,y:.5},id:"img",visible:"false",image:"images/icons/expand.png"}),o.__views.organizacional.add(o.__views.img),o.__views.__alloyId57=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId57"}),o.__views.menuContentView.add(o.__views.__alloyId57),o.__views.__alloyId58=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId58"}),o.__views.menuContentView.add(o.__views.__alloyId58),o.__views.sobre=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"sobre"}),o.__views.menuContentView.add(o.__views.sobre),i?o.__views.sobre.addEventListener("click",i):n["$.__views.sobre!click!clickMenu"]=!0,e?o.__views.sobre.addEventListener("touchstart",e):n["$.__views.sobre!touchstart!touchStart"]=!0,o.__views.__alloyId59=Ti.UI.createImageView({image:"images/icons/sobre.png",left:"10",width:"21",height:"20",top:"10",id:"__alloyId59"}),o.__views.sobre.add(o.__views.__alloyId59),o.__views.__alloyId60=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:14},top:12,text:"Sobre a Empresa Jr.",id:"__alloyId60"}),o.__views.sobre.add(o.__views.__alloyId60),o.__views.__alloyId61=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId61"}),o.__views.menuContentView.add(o.__views.__alloyId61),o.__views.__alloyId62=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId62"}),o.__views.menuContentView.add(o.__views.__alloyId62),o.__views.sac=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"sac",restrito:"true"}),o.__views.menuContentView.add(o.__views.sac),i?o.__views.sac.addEventListener("click",i):n["$.__views.sac!click!clickMenu"]=!0,e?o.__views.sac.addEventListener("touchstart",e):n["$.__views.sac!touchstart!touchStart"]=!0,o.__views.__alloyId63=Ti.UI.createImageView({image:"images/icons/SAC.png",left:"10",width:"16",height:"20",top:"10",id:"__alloyId63"}),o.__views.sac.add(o.__views.__alloyId63),o.__views.__alloyId64=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:14},top:12,text:"SAC",id:"__alloyId64"}),o.__views.sac.add(o.__views.__alloyId64),o.__views.__alloyId65=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId65"}),o.__views.menuContentView.add(o.__views.__alloyId65),o.__views.__alloyId66=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId66"}),o.__views.menuContentView.add(o.__views.__alloyId66),o.__views.mapa=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"mapa"}),o.__views.menuContentView.add(o.__views.mapa),i?o.__views.mapa.addEventListener("click",i):n["$.__views.mapa!click!clickMenu"]=!0,e?o.__views.mapa.addEventListener("touchstart",e):n["$.__views.mapa!touchstart!touchStart"]=!0,o.__views.__alloyId67=Ti.UI.createImageView({image:"images/icons/mapa.png",left:"10",width:"15",height:"20",top:"10",id:"__alloyId67"}),o.__views.mapa.add(o.__views.__alloyId67),o.__views.__alloyId68=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:14},top:12,text:"Mapa de Localização",id:"__alloyId68"}),o.__views.mapa.add(o.__views.__alloyId68),o.__views.__alloyId69=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId69"}),o.__views.menuContentView.add(o.__views.__alloyId69),o.__views.__alloyId70=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId70"}),o.__views.menuContentView.add(o.__views.__alloyId70),o.__views.faleconosco=Ti.UI.createView({layout:"horizontal",width:"100%",height:39,anchorPoint:{y:1},toggle:"false",id:"faleconosco"}),o.__views.menuContentView.add(o.__views.faleconosco),i?o.__views.faleconosco.addEventListener("click",i):n["$.__views.faleconosco!click!clickMenu"]=!0,e?o.__views.faleconosco.addEventListener("touchstart",e):n["$.__views.faleconosco!touchstart!touchStart"]=!0,o.__views.__alloyId71=Ti.UI.createImageView({image:"images/icons/faleconosco.png",left:"9",width:"23",height:"20",top:"10",id:"__alloyId71"}),o.__views.faleconosco.add(o.__views.__alloyId71),o.__views.__alloyId72=Ti.UI.createLabel({color:"#f9f7f8",left:10,font:{fontSize:14},top:12,text:"Fale Conosco",id:"__alloyId72"}),o.__views.faleconosco.add(o.__views.__alloyId72),o.__views.__alloyId73=Ti.UI.createView({height:"1",backgroundColor:"#141414",width:"100%",id:"__alloyId73"}),o.__views.menuContentView.add(o.__views.__alloyId73),o.__views.__alloyId74=Ti.UI.createView({height:"1",backgroundColor:"#303030",width:"100%",id:"__alloyId74"}),o.__views.menuContentView.add(o.__views.__alloyId74),o.__views.main=Ti.UI.createView({width:"100%",height:"100%",top:0,left:0,zIndex:10,backgroundColor:"#FFF",layout:"vertical",id:"main"}),o.__views.index.add(o.__views.main),o.__views.__alloyId75=Ti.UI.createView({width:"100%",zIndex:"10",height:"0%",top:"0",left:"0",backgroundColor:"",id:"__alloyId75"}),o.__views.index.add(o.__views.__alloyId75),s.destroy=function(){},_.extend(o,o.__views);var l=null,r=null,d="reset",c=0,h=!1,u=!1,w=Ti.UI.createAnimation({left:250,curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,duration:150}),v=Ti.UI.createAnimation({left:0,curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,duration:150}),f=Ti.UI.createView({height:"50dp",width:"50dp",left:0}),I=Ti.UI.createImageView({height:"15dp",width:"25dp",image:"images/icons/menu.png"});f.addEventListener("touchend",function(){u||(h=!0,a(null))}),f.addEventListener("touchstart",function(){this.backgroundColor="#000",this.opacity=.2}),f.addEventListener("touchend",function(){this.backgroundColor="transparent",this.opacity=1}),f.add(I);var g={backview:f};o.main.addEventListener("touchstart",function(e){c=e.x}),o.main.addEventListener("touchend",function(){return h?(h=!1,void 0):(o.main.left>=150&&u?(d="right",o.main.animate(w)):150>=o.main.left&&(d="reset",o.main.animate(v)),u=!1,void 0)}),o.main.addEventListener("touchmove",function(e){if("mapview"!=e.source.id){var t=o.main.convertPointToView({x:e.x,y:e.y},o.index),i=t.x-c;u&&250>=i&&i>=0?o.main.left=i:u&&0>i?o.main.left=0:u&&i>250&&(o.main.left=250),i>5&&!u&&(u=!0)}}),Ti.App.addEventListener("app:setLayout",function(e){var t=Alloy.createController(e.layout,g).getView();o.main.add(t),o.main.remove(l),l=t,t=null,null==e.swipe&&a()}),null==l&&(l=Alloy.createController("mainView",g).getView(),o.main.add(l)),o.index.open(),n["$.__views.consultoriafinanceira!click!clickMenu"]&&o.__views.consultoriafinanceira.addEventListener("click",i),n["$.__views.consultoriafinanceira!touchstart!touchStart"]&&o.__views.consultoriafinanceira.addEventListener("touchstart",e),n["$.__views.__alloyId43!click!clickMenu"]&&o.__views.__alloyId43.addEventListener("click",i),n["$.__views.__alloyId43!touchstart!touchStart"]&&o.__views.__alloyId43.addEventListener("touchstart",e),n["$.__views.__alloyId43!touchend!touchEnd"]&&o.__views.__alloyId43.addEventListener("touchend",t),n["$.__views.planomkt!click!clickMenu"]&&o.__views.planomkt.addEventListener("click",i),n["$.__views.pesquisamkt!click!clickMenu"]&&o.__views.pesquisamkt.addEventListener("click",i),n["$.__views.estudomkt!click!clickMenu"]&&o.__views.estudomkt.addEventListener("click",i),n["$.__views.negociosmkt!click!clickMenu"]&&o.__views.negociosmkt.addEventListener("click",i),n["$.__views.organizacional!click!clickMenu"]&&o.__views.organizacional.addEventListener("click",i),n["$.__views.organizacional!touchstart!touchStart"]&&o.__views.organizacional.addEventListener("touchstart",e),n["$.__views.sobre!click!clickMenu"]&&o.__views.sobre.addEventListener("click",i),n["$.__views.sobre!touchstart!touchStart"]&&o.__views.sobre.addEventListener("touchstart",e),n["$.__views.sac!click!clickMenu"]&&o.__views.sac.addEventListener("click",i),n["$.__views.sac!touchstart!touchStart"]&&o.__views.sac.addEventListener("touchstart",e),n["$.__views.mapa!click!clickMenu"]&&o.__views.mapa.addEventListener("click",i),n["$.__views.mapa!touchstart!touchStart"]&&o.__views.mapa.addEventListener("touchstart",e),n["$.__views.faleconosco!click!clickMenu"]&&o.__views.faleconosco.addEventListener("click",i),n["$.__views.faleconosco!touchstart!touchStart"]&&o.__views.faleconosco.addEventListener("touchstart",e),_.extend(o,s)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;