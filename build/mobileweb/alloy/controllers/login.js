function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="login",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.login=Ti.UI.createView({layout:"vertical",id:"login"}),e.__views.login&&e.addTopLevelView(e.__views.login),e.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),e.__views.login.add(e.__views.navView),e.__views.button=Ti.UI.createView({id:"button"}),e.__views.navView.add(e.__views.button),e.__views.__alloyId74=Ti.UI.createLabel({font:{fontSize:"18dp",fontWeight:"bold",fontFamily:"DIN-BoldAlternate"},height:"46dp",color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"SAC",id:"__alloyId74"}),e.__views.navView.add(e.__views.__alloyId74),e.__views.scrollview=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",id:"scrollview",scrollingEnabled:"true"}),e.__views.login.add(e.__views.scrollview),e.__views.__alloyId75=Ti.UI.createView({left:0,width:"100%",height:"100",layout:"horizontal",id:"__alloyId75"}),e.__views.scrollview.add(e.__views.__alloyId75),e.__views.__alloyId76=Ti.UI.createImageView({image:"images/outros/header_login.png",height:"60",width:"60",left:"10",top:"20",id:"__alloyId76"}),e.__views.__alloyId75.add(e.__views.__alloyId76),e.__views.label=Ti.UI.createLabel({font:{fontWeight:"bold",fontSize:18},left:20,right:10,top:"20",color:"#115a98",text:"ACOMPANHE O \nANDAMENTO DO SEU \nPROJETO",id:"label",width:"auto"}),e.__views.__alloyId75.add(e.__views.label),e.__views.__alloyId77=Ti.UI.createView({height:22,left:0,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId77"}),e.__views.scrollview.add(e.__views.__alloyId77),e.__views.__alloyId78=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"LOGIN",id:"__alloyId78"}),e.__views.__alloyId77.add(e.__views.__alloyId78),e.__views.__alloyId79=Ti.UI.createView({backgroundColor:"#eeeeee",left:"20",right:"20",top:"20",height:"162",layout:"vertical",id:"__alloyId79"}),e.__views.scrollview.add(e.__views.__alloyId79),e.__views.__alloyId80=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",top:"10",height:"45",bottom:"2",id:"__alloyId80"}),e.__views.__alloyId79.add(e.__views.__alloyId80),e.__views.__alloyId81=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Usuário:",id:"__alloyId81"}),e.__views.__alloyId80.add(e.__views.__alloyId81),e.__views.username=Ti.UI.createTextField({width:180,top:"10",left:"20",borderWidth:0,borderColor:"#FFF",id:"username"}),e.__views.__alloyId80.add(e.__views.username),e.__views.__alloyId82=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",height:"45",bottom:"10",id:"__alloyId82"}),e.__views.__alloyId79.add(e.__views.__alloyId82),e.__views.__alloyId83=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Senha:",id:"__alloyId83"}),e.__views.__alloyId82.add(e.__views.__alloyId83),e.__views.senha=Ti.UI.createTextField({width:180,top:"10",left:"20",borderWidth:0,borderColor:"#FFF",id:"senha"}),e.__views.__alloyId82.add(e.__views.senha),e.__views.entrar=Ti.UI.createButton({left:10,bottom:10,right:10,height:40,borderColor:"#2155bb",font:{fontWeight:"bold"},borderRadius:0,backgroundColor:"transparent",color:"white",backgroundImage:"back_button.png",title:"ENTRAR",id:"entrar"}),e.__views.__alloyId79.add(e.__views.entrar),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.button.add(i.backview),e.entrar.addEventListener("click",function(){Ti.App.fireEvent("app:setLayout",{layout:"sac",swipe:!0})}),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;