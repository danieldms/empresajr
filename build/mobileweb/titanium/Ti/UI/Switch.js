define(["Ti/_/declare","Ti/_/UI/FontWidget","Ti/_/css","Ti/_/style","Ti/UI"],function(e,t,i,o,l){var a=o.set,r={post:function(){this.backgroundColor||this.backgroundDisabledColor||this.backgroundDisabledImage||this.backgroundFocusedColor||this.backgroundFocusedImage||this.backgroundImage||this.backgroundSelectedColor||this.backgroundSelectedImage?this._clearDefaultLook():this._setDefaultLook(),this._doBackground()}};return e("Ti.UI.Switch",t,{constructor:function(){var e=this._contentContainer=l.createView({width:l.INHERIT,height:l.INHERIT,layout:l._LAYOUT_CONSTRAINING_VERTICAL,borderColor:"transparent"});this._add(e),e._add(this._switchTitle=l.createLabel({width:l.INHERIT,height:l.INHERIT,verticalAlign:l.TEXT_VERTICAL_ALIGNMENT_CENTER,textAlign:l.TEXT_ALIGNMENT_CENTER})),e._add(this._switchIndicator=l.createView({width:40,height:10,borderRadius:4,borderWidth:1,borderColor:"#888"})),this._setDefaultLook();var t=this;t.addEventListener("singletap",function(){t.value=!t.value}),this.value=!1},_setDefaultLook:function(){this._hasDefaultLook||(this._hasDefaultLook=!0,this._previousBorderWidth=this.borderWidth,this._previousBorderColor=this.borderColor,i.add(this.domNode,"TiUIElementGradient"),i.add(this.domNode,"TiUIButtonDefault"),this._contentContainer.borderWidth=6,this._getBorderFromCSS())},_clearDefaultLook:function(){this._hasDefaultLook&&(this._hasDefaultLook=!1,this.borderWidth=this._previousBorderWidth,this.borderColor=this._previousBorderColor,i.remove(this.domNode,"TiUIElementGradient"),i.remove(this.domNode,"TiUIButtonDefault"),this._contentContainer.borderWidth=0)},_defaultWidth:l.SIZE,_defaultHeight:l.SIZE,properties:{backgroundColor:r,backgroundDisabledColor:r,backgroundDisabledImage:r,backgroundFocusedColor:r,backgroundFocusedImage:r,backgroundImage:r,backgroundSelectedColor:r,backgroundSelectedImage:r,enabled:{set:function(e,t){return e!==t&&(this._hasDefaultLook&&(e?(i.add(this.domNode,"TiUIElementGradient"),a(this.domNode,"backgroundColor","")):(i.remove(this.domNode,"TiUIElementGradient"),a(this.domNode,"backgroundColor","#aaa"))),this._setTouchEnabled(e)),e},value:!0},textAlign:{set:function(e){return this._switchTitle.textAlign=e,e}},titleOff:{set:function(e){return this.value||(this._switchTitle.text=e),e},value:"Off"},titleOn:{set:function(e){return this.value&&(this._switchTitle.text=e),e},value:"On"},value:{set:function(e){return this._switchIndicator.backgroundColor=e?"#0f0":"#aaa",e=!!e,this._switchTitle.text=e?this.titleOn:this.titleOff,e},post:function(){this.fireEvent("change",{value:this.value})}},verticalAlign:{set:function(e){this._switchTitle.verticalAlign=e},value:l.TEXT_VERTICAL_ALIGNMENT_CENTER}}})});