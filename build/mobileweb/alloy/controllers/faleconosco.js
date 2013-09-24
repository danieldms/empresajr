function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="faleconosco",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.faleconosco=Ti.UI.createView({layout:"vertical",id:"faleconosco"}),e.__views.faleconosco&&e.addTopLevelView(e.__views.faleconosco),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.faleconosco.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.title=Ti.UI.createLabel({font:{fontFamily:"DIN-BoldAlternate"},text:"Fale Conosco",id:"title"}),e.__views.navView.add(e.__views.title),e.__views.scrollview=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",id:"scrollview",contentHeight:"auto",scrollingEnabled:"true",showVerticalScrollIndicator:"true"}),e.__views.faleconosco.add(e.__views.scrollview),e.__views.__alloyId14=Ti.UI.createView({left:0,width:"100%",height:100,layout:"horizontal",id:"__alloyId14"}),e.__views.scrollview.add(e.__views.__alloyId14),e.__views.__alloyId15=Ti.UI.createImageView({image:"images/outros/faleconosco_header.png",height:"50",width:"55",left:"10",top:"25",id:"__alloyId15"}),e.__views.__alloyId14.add(e.__views.__alloyId15),e.__views.__alloyId16=Ti.UI.createLabel({font:{fontWeight:"bold",fontSize:18},left:20,right:10,top:"40",color:"#115a98",text:"FALE CONOSCO",id:"__alloyId16"}),e.__views.__alloyId14.add(e.__views.__alloyId16),e.__views.__alloyId17=Ti.UI.createView({height:22,left:0,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId17"}),e.__views.scrollview.add(e.__views.__alloyId17),e.__views.__alloyId18=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Contato",id:"__alloyId18"}),e.__views.__alloyId17.add(e.__views.__alloyId18),e.__views.__alloyId19=Ti.UI.createView({backgroundColor:"#eeeeee",left:"20",right:"20",top:"20",bottom:"20",height:"405",layout:"vertical",id:"__alloyId19"}),e.__views.scrollview.add(e.__views.__alloyId19),e.__views.__alloyId20=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",top:"10",height:"45",bottom:"2",id:"__alloyId20"}),e.__views.__alloyId19.add(e.__views.__alloyId20),e.__views.__alloyId21=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Nome:",id:"__alloyId21"}),e.__views.__alloyId20.add(e.__views.__alloyId21),e.__views.nome=Ti.UI.createTextField({width:180,top:12,left:25,borderWidth:0,borderColor:"#FFF",id:"nome"}),e.__views.__alloyId20.add(e.__views.nome),e.__views.__alloyId22=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",height:"45",bottom:"2",id:"__alloyId22"}),e.__views.__alloyId19.add(e.__views.__alloyId22),e.__views.__alloyId23=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Email:",id:"__alloyId23"}),e.__views.__alloyId22.add(e.__views.__alloyId23),e.__views.email=Ti.UI.createTextField({width:180,top:12,left:"27",borderWidth:0,borderColor:"#FFF",id:"email"}),e.__views.__alloyId22.add(e.__views.email),e.__views.__alloyId24=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",height:"45",bottom:"2",id:"__alloyId24"}),e.__views.__alloyId19.add(e.__views.__alloyId24),e.__views.__alloyId25=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Telefone:",id:"__alloyId25"}),e.__views.__alloyId24.add(e.__views.__alloyId25),e.__views.telefone=Ti.UI.createTextField({width:180,top:12,left:"7",borderWidth:0,borderColor:"#FFF",id:"telefone"}),e.__views.__alloyId24.add(e.__views.telefone),e.__views.__alloyId26=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",height:"45",bottom:"2",id:"__alloyId26"}),e.__views.__alloyId19.add(e.__views.__alloyId26),e.__views.__alloyId27=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Assunto:",id:"__alloyId27"}),e.__views.__alloyId26.add(e.__views.__alloyId27),e.__views.assunto=Ti.UI.createTextField({width:180,top:12,left:"12",borderWidth:0,borderColor:"#FFF",id:"assunto"}),e.__views.__alloyId26.add(e.__views.assunto),e.__views.__alloyId28=Ti.UI.createView({backgroundColor:"#FFF",layout:"vertical",left:"10",right:"10",height:"145",bottom:"10",id:"__alloyId28"}),e.__views.__alloyId19.add(e.__views.__alloyId28),e.__views.__alloyId29=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Mensagem:",id:"__alloyId29"}),e.__views.__alloyId28.add(e.__views.__alloyId29),e.__views.mensagem=Ti.UI.createTextArea({height:100,borderWidth:0,top:5,left:"11",right:5,borderColor:"#FFF",id:"mensagem"}),e.__views.__alloyId28.add(e.__views.mensagem),e.__views.__alloyId30=Ti.UI.createButton({left:10,bottom:10,right:10,height:40,borderColor:"#2155bb",font:{fontWeight:"bold"},borderRadius:0,backgroundColor:"transparent",color:"white",backgroundImage:"back_button.png",title:"ENVIAR",id:"__alloyId30"}),e.__views.__alloyId19.add(e.__views.__alloyId30),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.button.add(i.backview),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;