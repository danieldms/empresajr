define(["Ti/_/css","Ti/_/declare","Ti/_/lang","Ti/_/Evented","Ti/Locale","Ti/UI"],function(e,t,i,o,a,r){return t("Ti.UI.AlertDialog",o,{show:function(){var t=this._alertWindow=r.createWindow(),o=r.createView({backgroundColor:"black",opacity:0,left:0,top:0,right:0,bottom:0}),n=r.createView({backgroundColor:"white",borderRadius:3,height:r.SIZE,layout:r._LAYOUT_CONSTRAINING_VERTICAL,opacity:0,width:"50%"}),l=this.buttonNames||[];t._add(o),t._add(n),n._add(r.createLabel({text:a._getString(this.titleid,this.title),font:{fontWeight:"bold"},left:5,right:5,top:5,height:r.SIZE,textAlign:r.TEXT_ALIGNMENT_CENTER})),n._add(r.createLabel({text:a._getString(this.messageid,this.message),left:5,right:5,top:5,height:r.SIZE,textAlign:r.TEXT_ALIGNMENT_CENTER})),l.length||l.push(a._getString(this.okid,this.ok||"OK")),l.forEach(function(o,a){var s=r.createButton({left:5,right:5,top:5,bottom:a===l.length-1?5:0,height:r.SIZE,title:o,index:a});a===this.cancel&&e.add(s.domNode,"TiUIElementGradientCancel"),n._add(s),s.addEventListener("singletap",i.hitch(this,function(){t.close(),this._alertWindow=void 0,this.fireEvent("click",{index:a,cancel:this.cancel===a})}))},this),o.addEventListener("postlayout",function(){setTimeout(function(){o.animate({opacity:.5,duration:200},function(){n.animate({opacity:1,duration:200})})},0)}),t.open()},hide:function(){this._alertWindow&&this._alertWindow.close()},properties:{buttonNames:void 0,cancel:-1,message:void 0,messageid:void 0,ok:void 0,okid:void 0,title:void 0,titleid:void 0}})});