define(["Ti/_/declare","Ti/_/UI/KineticScrollView","Ti/_/style","Ti/_/lang","Ti/UI"],function(e,t,i,o,l){var a=o.isDef,r=.001;return e("Ti.UI.ScrollView",t,{constructor:function(){var e;this._initKineticScrollView(e=l.createView({width:l.SIZE,height:l.SIZE,_minWidth:"100%",_minHeight:"100%",left:0,top:0}),"both","both",1)},_handleMouseWheel:function(){this._isScrollBarActive&&this.fireEvent("scroll",{x:-this._currentTranslationX,y:-this._currentTranslationY,dragging:!1,decelerating:!1})},_handleDragStart:function(){this.fireEvent("dragStart")},_handleDrag:function(){this.fireEvent("scroll",{x:-this._currentTranslationX,y:-this._currentTranslationY,dragging:!0,decelerating:!1})},_handleDragEnd:function(e,t,i){if(a(t)){var o=this,n=Math.sqrt(t*t+i*i),s=n*n/(1.724*r),d=n/r,_=Math.atan(Math.abs(i/t)),c=s*Math.cos(_)*(0>t?-1:1),u=s*Math.sin(_)*(0>i?-1:1),y=Math.min(0,Math.max(o._minTranslationX,o._currentTranslationX+c)),f=Math.min(0,Math.max(o._minTranslationY,o._currentTranslationY+u));o.fireEvent("dragEnd",{decelerate:!0}),o._animateToPosition(y,f,d,l.ANIMATION_CURVE_EASE_OUT,function(){o._setTranslation(y,f),o._endScrollBars(),o.fireEvent("scrollEnd")})}},scrollTo:function(e,t){this._setTranslation(null!==e?-e:this._currentTranslationX,null!==t?-t:this._currentTranslationX)},_defaultWidth:l.FILL,_defaultHeight:l.FILL,_getContentOffset:function(){return this.contentOffset},_preLayout:function(){var e=this._contentContainer.layout===this.layout;return this._contentContainer.layout=this.layout,e},add:function(e){this._contentContainer._add(e),this._publish(e)},remove:function(e){this._contentContainer.remove(e),this._unpublish(e)},properties:{contentHeight:{get:function(){return this._contentContainer.height},set:function(e){return this._contentContainer.height=e,e}},contentOffset:{get:function(){return{x:-this._currentTranslationX,y:-this._currentTranslationY}},set:function(e){return this._setTranslation(a(e.x)?-e.x:this._currentTranslationX,a(e.y)?-e.y:this._currentTranslationY),e}},contentWidth:{get:function(){return this._contentContainer.width},set:function(e){return this._contentContainer.width=e,e}},disableBounce:!1,horizontalBounce:{set:function(e){return this._horizontalElastic=e},value:!0},layout:{set:function(e){return this._contentContainer.layout=e},value:"composite"},showHorizontalScrollIndicator:{set:function(e,t){return e!==t&&(e?this._createHorizontalScrollBar():this._destroyHorizontalScrollBar()),e},value:!0},showVerticalScrollIndicator:{set:function(e,t){return e!==t&&(e?this._createVerticalScrollBar():this._destroyVerticalScrollBar()),e},value:!0},verticalBounce:{set:function(e){return this._verticalElastic=e},value:!0}}})});