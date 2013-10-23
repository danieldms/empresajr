define(["Ti/_/declare","Ti/_/UI/Widget","Ti/_/dom","Ti/_/css","Ti/_/style","Ti/_/lang","Ti/UI"],function(e,t,i,o,a,r,n){var l=require.on,s=a.set;return e("Ti.UI.Slider",t,{constructor:function(){var e,t,o=this,a=o._track=i.create("div",{className:"TiUISliderTrack"},o.domNode),r=o._thumb=i.create("div",{className:"TiUIElementGradient TiUISliderThumb"},o.domNode);l(o,"touchstart",function(i){e=i.x,t=o.value}),l(o,"touchmove",function(i){o.value=(i.x-e)*(o.max-o.min)/(a.offsetWidth-r.offsetWidth)+t}),l(o,"postlayout",o,"_updatePosition")},_constrainedUpdate:function(e){this.properties.__values__.value=this._constrainValue(e),this._updatePosition()},_constrainValue:function(e){return Math.min(r.val(this.maxRange,this.max),Math.max(r.val(this.minRange,this.min),e))},_updatePosition:function(){var e=this._thumb;this._thumbLocation=Math.round((this._track.offsetWidth-e.offsetWidth)*((this.value-this.min)/(this.max-this.min))),s(e,"transform","translateX("+this._thumbLocation+"px)")},_defaultWidth:n.FILL,_defaultHeight:n.SIZE,_setTouchEnabled:function(e){var i=e?"auto":"none";t.prototype._setTouchEnabled.call(this,e),s(this._track,"pointerEvents",i),s(this._thumb,"pointerEvents",i)},_getContentSize:function(){return{width:200,height:40}},properties:{enabled:{set:function(e,t){return e!==t&&(o.remove(this._thumb,["TiUIElementGradient","TiUISliderThumbDisabled"]),o.add(this._thumb,e?"TiUIElementGradient":"TiUISliderThumbDisabled"),this._setTouchEnabled(e)),e},value:!0},max:{set:function(e){return Math.max(this.min,e)},post:"_constrainedUpdate",value:1},maxRange:{set:function(e){return Math.min(this.max,e)},post:"_constrainedUpdate"},min:{set:function(e){return Math.min(this.max,e)},post:"_constrainedUpdate",value:0},minRange:{set:function(e){return Math.max(this.min,e)},post:"_constrainedUpdate"},value:{set:function(e){return this._constrainValue(e)},post:function(e,t){e!==t&&this.fireEvent("change",{value:e,thumbOffset:{x:0,y:0},thumbSize:{height:0,width:0}}),this._updatePosition()},value:0}}})});