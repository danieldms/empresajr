function Controller(){function e(e){Ti.API.log(e),null!=e&&("error"!=e.type?e.projeto.count>0?(Alloy.Globals.Usuario=e,t()):alert(e.projeto.message):alert(e.message))}function t(){Ti.App.fireEvent("app:setLayout",{layout:"sac",swipe:!1})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="login",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var i=this,o={};i.__views.login=Ti.UI.createView({layout:"vertical",id:"login"}),i.__views.login&&i.addTopLevelView(i.__views.login),i.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),i.__views.login.add(i.__views.navView),i.__views.button=Ti.UI.createView({id:"button"}),i.__views.navView.add(i.__views.button),i.__views.__alloyId76=Ti.UI.createLabel({height:"46dp",font:{fontSize:"18dp",fontWeight:"bold"},color:"#FFF",textAlign:"center",shadowColor:"#000",shadowOffset:{x:"0dp",y:"1dp"},text:"SAC",id:"__alloyId76"}),i.__views.navView.add(i.__views.__alloyId76),i.__views.scrollview=Ti.UI.createScrollView({backgroundColor:"transparent",layout:"vertical",id:"scrollview",scrollingEnabled:"true"}),i.__views.login.add(i.__views.scrollview),i.__views.__alloyId77=Ti.UI.createView({left:0,width:"100%",height:"100",layout:"horizontal",id:"__alloyId77"}),i.__views.scrollview.add(i.__views.__alloyId77),i.__views.__alloyId78=Ti.UI.createImageView({image:"images/outros/header_login.png",height:"60",width:"60",left:"10",top:"20",id:"__alloyId78"}),i.__views.__alloyId77.add(i.__views.__alloyId78),i.__views.label=Ti.UI.createLabel({left:20,right:10,top:"20",font:{fontWeight:"bold",fontSize:18,fontFamily:"DIN-BoldAlternate"},color:"#115a98",text:"ACOMPANHE O \nANDAMENTO DO SEU \nPROJETO",id:"label",width:"auto"}),i.__views.__alloyId77.add(i.__views.label),i.__views.__alloyId79=Ti.UI.createView({height:26,left:0,bottom:2,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId79"}),i.__views.scrollview.add(i.__views.__alloyId79),i.__views.__alloyId80=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"LOGIN",id:"__alloyId80"}),i.__views.__alloyId79.add(i.__views.__alloyId80),i.__views.__alloyId81=Ti.UI.createView({backgroundColor:"#eeeeee",left:"20",right:"20",top:"20",height:"162",layout:"vertical",id:"__alloyId81"}),i.__views.scrollview.add(i.__views.__alloyId81),i.__views.__alloyId82=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",top:"10",height:"45",bottom:"2",id:"__alloyId82"}),i.__views.__alloyId81.add(i.__views.__alloyId82),i.__views.__alloyId83=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Usuário:",id:"__alloyId83"}),i.__views.__alloyId82.add(i.__views.__alloyId83),i.__views.username=Ti.UI.createTextField({width:180,top:"10",left:"20",borderWidth:0,borderColor:"#FFF",id:"username"}),i.__views.__alloyId82.add(i.__views.username),i.__views.__alloyId84=Ti.UI.createView({backgroundColor:"#FFF",layout:"horizontal",left:"10",right:"10",height:"45",bottom:"10",id:"__alloyId84"}),i.__views.__alloyId81.add(i.__views.__alloyId84),i.__views.__alloyId85=Ti.UI.createLabel({font:{fontSize:14},color:"#c9c9c9",left:5,top:13,text:"Senha:",id:"__alloyId85"}),i.__views.__alloyId84.add(i.__views.__alloyId85),i.__views.senha=Ti.UI.createTextField({width:180,top:"10",left:"20",borderWidth:0,borderColor:"#FFF",passwordMask:"true",returnKeyType:"RETURNKEY_DONE",id:"senha"}),i.__views.__alloyId84.add(i.__views.senha),i.__views.entrar=Ti.UI.createButton({left:10,bottom:10,right:10,height:40,borderColor:"#2155bb",font:{fontWeight:"bold"},borderRadius:0,backgroundColor:"transparent",color:"white",backgroundImage:"back_button.png",title:"ENTRAR",id:"entrar"}),i.__views.__alloyId81.add(i.__views.entrar),o.destroy=function(){},_.extend(i,i.__views);var a=arguments[0]||{};i.button.add(a.backview),i.entrar.addEventListener("click",function(){Alloy.Globals.Util.login(i.username.value,i.senha.value,e)}),_.extend(i,o)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;