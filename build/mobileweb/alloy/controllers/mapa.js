function Controller(){function e(){}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="mapa",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var t=this,i={},a={};t.__views.mapa=Ti.UI.createView({layout:"vertical",id:"mapa"}),t.__views.mapa&&t.addTopLevelView(t.__views.mapa),t.__views.navView=Ti.UI.createView({height:44,width:"100%",top:0,left:0,backgroundImage:"lightbg.png",id:"navView"}),t.__views.mapa.add(t.__views.navView),t.__views.button=Ti.UI.createView({id:"button"}),t.__views.navView.add(t.__views.button),t.__views.title=Ti.UI.createLabel({font:{fontFamily:"DIN-BoldAlternate"},text:"Localização",id:"title"}),t.__views.navView.add(t.__views.title),t.__views.__alloyId88=Ti.UI.createView({layout:"vertical",id:"__alloyId88"}),t.__views.mapa.add(t.__views.__alloyId88);var o=[];t.__views.mapview=Ti.Map.createView({annotations:o,id:"mapview",ns:Ti.Map,animate:"true",regionFit:"true",userLocation:"false",height:"250",mapType:Ti.Map.STANDARD_TYPE}),t.__views.__alloyId88.add(t.__views.mapview),e?t.__views.mapview.addEventListener("complete",e):a["$.__views.mapview!complete!setRegion"]=!0,t.__views.__alloyId90=Ti.UI.createView({height:22,left:0,layout:"vertical",backgroundColor:"#f5f5f5",id:"__alloyId90"}),t.__views.__alloyId88.add(t.__views.__alloyId90),t.__views.__alloyId91=Ti.UI.createLabel({font:{fontSize:11,fontWeight:"bold"},left:10,top:6,color:"#8a8a8a",text:"Endereço",id:"__alloyId91"}),t.__views.__alloyId90.add(t.__views.__alloyId91),t.__views.__alloyId92=Ti.UI.createLabel({font:{fontSize:12},color:"#666666",text:"Av. Reitor Miguel Calmon, s/n, Vale do Canela - Escola de Administração da Ufba, no térreo - Salvador/BA - Tel (71) 3245-0757",left:"10",right:"10",top:"10",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId92"}),t.__views.__alloyId88.add(t.__views.__alloyId92),i.destroy=function(){},_.extend(t,t.__views);var l=arguments[0]||{};t.button.add(l.backview),t.mapview.region={latitude:37.390749,longitude:-122.081651,latitudeDelta:.01,longitudeDelta:.01},a["$.__views.mapview!complete!setRegion"]&&t.__views.mapview.addEventListener("complete",e),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;