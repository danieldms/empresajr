function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="sac",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.sac=Ti.UI.createView({layout:"vertical",id:"sac"}),e.__views.sac&&e.addTopLevelView(e.__views.sac),e.__views.__alloyId115=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",scrollingEnabled:"true",id:"__alloyId115"}),e.__views.sac.add(e.__views.__alloyId115),e.__views.__alloyId116=Ti.UI.createView({height:22,left:0,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId116"}),e.__views.__alloyId115.add(e.__views.__alloyId116),e.__views.__alloyId117=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Seu Projeto",id:"__alloyId117"}),e.__views.__alloyId116.add(e.__views.__alloyId117),e.__views.__alloyId118=Ti.UI.createView({height:"120",width:"100%",layout:"horizontal",id:"__alloyId118"}),e.__views.__alloyId115.add(e.__views.__alloyId118),e.__views.__alloyId119=Ti.UI.createView({layout:"vertical",width:"80",left:"0",id:"__alloyId119"}),e.__views.__alloyId118.add(e.__views.__alloyId119),e.__views.__alloyId120=Ti.UI.createImageView({image:"/ooo.png",width:"50",height:"50",left:"10",top:"10",id:"__alloyId120"}),e.__views.__alloyId119.add(e.__views.__alloyId120),e.__views.__alloyId121=Ti.UI.createLabel({font:{fontSize:10,fontWeight:"normal"},text:"PREVISTO",top:"15",left:"10",id:"__alloyId121"}),e.__views.__alloyId119.add(e.__views.__alloyId121),e.__views.__alloyId122=Ti.UI.createLabel({font:{fontSize:10,fontWeight:"normal"},text:"REALIZADO",left:"10",top:"5",id:"__alloyId122"}),e.__views.__alloyId119.add(e.__views.__alloyId122),e.__views.__alloyId123=Ti.UI.createView({layout:"vertical",top:"0",left:"0",width:"200",id:"__alloyId123"}),e.__views.__alloyId118.add(e.__views.__alloyId123),e.__views.__alloyId124=Ti.UI.createLabel({font:{fontFamily:"DIN-BoldAlternate"},text:"Titulo do projeto 2000",top:"10",left:"0",id:"__alloyId124"}),e.__views.__alloyId123.add(e.__views.__alloyId124),e.__views.__alloyId125=Ti.UI.createLabel({font:{fontSize:10,fontWeight:"normal"},text:"DEADLINE",top:"5",left:"0",id:"__alloyId125"}),e.__views.__alloyId123.add(e.__views.__alloyId125),e.__views.__alloyId126=Ti.UI.createLabel({font:{fontFamily:"DIN-BoldAlternate"},text:"12/08/2013",left:"0",id:"__alloyId126"}),e.__views.__alloyId123.add(e.__views.__alloyId126),e.__views.__alloyId127=Ti.UI.createView({width:"200",backgroundColor:"#F5F5F5",top:"9",height:"15",left:"0",layout:"vertical",id:"__alloyId127"}),e.__views.__alloyId123.add(e.__views.__alloyId127),e.__views.__alloyId128=Ti.UI.createView({backgroundGradient:{type:"linear",startPoint:{x:0,y:"50%"},endPoint:{x:"100%",y:"50%"},colors:[{color:"#125a95",offset:0},{color:"#4898dd",offset:1}],height:10,left:0},width:"80%",height:"15",top:"0",left:"0",id:"__alloyId128"}),e.__views.__alloyId127.add(e.__views.__alloyId128),e.__views.__alloyId129=Ti.UI.createLabel({font:{fontFamily:"DIN-BoldAlternate"},text:"80%",color:"#FFF",top:"-17",id:"__alloyId129"}),e.__views.__alloyId127.add(e.__views.__alloyId129),e.__views.__alloyId130=Ti.UI.createView({width:"200",backgroundColor:"#F5F5F5",top:"4",height:"15",left:"0",layout:"vertical",id:"__alloyId130"}),e.__views.__alloyId123.add(e.__views.__alloyId130),e.__views.__alloyId131=Ti.UI.createView({backgroundGradient:{type:"linear",startPoint:{x:0,y:"50%"},endPoint:{x:"100%",y:"50%"},colors:[{color:"#125a95",offset:0},{color:"#1c5bc4",offset:1}],height:10,left:0},width:"80%",height:"15",left:"0",top:"0",id:"__alloyId131"}),e.__views.__alloyId130.add(e.__views.__alloyId131),e.__views.__alloyId132=Ti.UI.createLabel({font:{fontFamily:"DIN-BoldAlternate"},text:"80%",color:"#FFF",top:"-17",id:"__alloyId132"}),e.__views.__alloyId130.add(e.__views.__alloyId132),e.__views.__alloyId133=Ti.UI.createView({height:22,left:0,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId133"}),e.__views.__alloyId115.add(e.__views.__alloyId133),e.__views.__alloyId134=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Descritivo",id:"__alloyId134"}),e.__views.__alloyId133.add(e.__views.__alloyId134),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.button.add(i.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;