define(["Ti/_/declare","Ti/_/UI/Widget","Ti/_/UI/FontWidget","Ti/_/lang","Ti/_/dom","Ti/_/style","Ti/UI"],function(e,t,i,o,l,a,r){var n=a.set,s=e(t,{constructor:function(){this._contentContainer=l.create("div",{className:"TiUIProgressBarContainer",style:{pointerEvents:"none",left:0,right:0,top:0,bottom:0,position:"absolute",overflow:"hidden"}},this.domNode),this._indicator=l.create("div",{className:"TiUIProgressBarIndicator",style:{pointerEvents:"none",width:"0%",height:"100%"}},this._contentContainer)},_getContentSize:function(){return{width:200,height:25}},_setPosition:function(e){n(this._indicator,"width",Math.round(100*e)+"%")}});return e("Ti.UI.ProgressBar",t,{constructor:function(){this._add(this._contentContainer=r.createView({width:r.INHERIT,height:r.INHERIT,left:0,top:0,layout:r._LAYOUT_CONSTRAINING_VERTICAL})),this._contentContainer._layout._defaultHorizontalLayout="start",this._contentContainer._add(this._message=r.createLabel()),this._contentContainer._add(this._progressBar=new s({width:r.INHERIT,height:r.INHERIT}))},_updateSize:function(){this._progressBar._setPosition((this.value-this.min)/(this.max-this.min))},_defaultWidth:r.SIZE,_defaultHeight:r.SIZE,properties:{color:{set:function(e){return this._message.color=e,e}},font:{set:function(e){return this._message.font=e,e}},message:{set:function(e){return this._message.text=e,e}},min:{set:function(e){return Math.min(e,this.max)},post:"_updateSize",value:0},max:{set:function(e){return Math.max(e,this.min)},post:"_updateSize",value:100},value:{set:function(e){return Math.min(Math.max(e,this.min),this.max)},post:"_updateSize",value:0}}})});