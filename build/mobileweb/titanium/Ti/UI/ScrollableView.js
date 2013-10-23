define(["Ti/_/declare","Ti/UI/View","Ti/_/dom","Ti/_/style","Ti/UI","Ti/_/browser"],function(e,t,i,o,a,r){var n=o.set,l=require.is,s=i.unitize,d=require.on,_=d.once,c=window,u={webkit:"webkitTransitionEnd",trident:"msTransitionEnd",gecko:"transitionend",presto:"oTransitionEnd"},h=u[r.runtime]||"transitionEnd",f="ontouchstart"in c,y=200,p=10,g=25,v=1e3,w=.5,I=2;return e("Ti.UI.ScrollableView",t,{constructor:function(){var e,t=this,i=0;t._add(t._contentContainer=a.createView({left:0,top:0,width:a.SIZE,height:"100%",layout:"constrainingHorizontal"})),e=t._contentContainer.domNode,t._add(t._pagingControlContainer=a.createView({width:"100%",height:20,bottom:0,backgroundColor:"black",opacity:0,touchEnabled:!1})),t._pagingControlContainer._add(t._pagingControlContentContainer=a.createView({width:a.SIZE,height:"100%",top:0,touchEnabled:!1,layout:"constrainingHorizontal"})),t.properties.__values__.views=[],t._viewToRemoveAfterScroll=-1,d(t,"postlayout",function(){t._animating||t._setTranslation(t.currentPage*-t._measuredWidth)}),d(e,f?"touchstart":"mousedown",function(o){var a=o.touches?o.touches[0].clientX:o.clientX,r=a,l=Date.now(),s=t._measuredWidth,d=function(e){var o=t.currentPage,n=r-a+i;s=t._measuredWidth,e.preventDefault(),r=e.touches?e.touches[0].clientX:e.clientX,t._setTranslation(o*-s+n),t.fireEvent("scroll",{currentPage:o,currentPageAsFloat:o-n/s,view:t.views[o]})},u=function(o){var m=Date.now(),b=y>m-l,T=t.currentPage,C=Math.abs(a-r)>(b?p:s/2),E=t.properties.__values__,k=Math.abs(r-a);c.removeEventListener(f?"touchmove":"mousemove",d),c.removeEventListener(f?"touchend":"mouseup",u),s=t._measuredWidth,t._animating=1,o.preventDefault(),C&&(a>r?T!==E.views.length-1&&T++:0!==T&&T--,k=s-k),t._showPagingControl(T),i=r-a+i,k=Math.max(g,Math.min(v,(b?w:I)*k)),n(e,"transition",k+"ms ease-out"),setTimeout(function(){_(e,h,function(){n(e,"transition",""),t._animating=0,E.currentPage=T,t._updatePagingControl(),t.fireEvent("scrollend",{currentPage:T,view:t.views[T]})}),t._setTranslation(T*-s)},1),t.fireEvent("dragend",{currentPage:T,view:t.views[T]})};t._showPagingControl(t.currentPage,1),o.preventDefault(),i=t._animating?i||0:0,n(e,"transition",""),t._setTranslation(t.currentPage*-s+i),t._animating=0,c.addEventListener(f?"touchmove":"mousemove",d),c.addEventListener(f?"touchend":"mouseup",u),t.fireEvent("dragstart")})},_setTranslation:function(e){n(this._contentContainer.domNode,"transform","translatez(0) translatex("+e+"px)")},_showPagingControl:function(e,t){var i=this;return i.showPagingControl?(i._pagingAnimation&&i._pagingAnimation.cancel(),i._pagingAnimation=i._pagingControlContainer.animate({duration:250,opacity:.75}),clearInterval(i._pagingTimeout),!t&&i.pagingControlTimeout>0?i._pagingTimeout=setTimeout(function(){i._pagingAnimation&&i._pagingAnimation.cancel(),i._pagingAnimation=i._pagingControlContainer.animate({duration:750,opacity:0},function(){i._pagingAnimation=void 0})},i.pagingControlTimeout):i._pagingAnimation=void 0,void 0):(i._pagingControlContainer.opacity=0,void 0)},_updatePagingControl:function(){var e=this._pagingControlContentContainer,t=this.views.length,i=this.pagingControlHeight/2;if(t!==e._numViews||i!==e._diameter){e._numViews=t,e._diameter=i,e._removeAllChildren();for(var o=0;this.views.length>o;o++)e._add(a.createView({width:i,height:i,left:5,right:5,backgroundColor:"#aaa",borderRadius:s(i/2)}));e._highlightedPage=-1}e._highlightedPage!==this.currentPage&&(0>e._highlightedPage||(e._children[e._highlightedPage].backgroundColor="#aaa"),e._children[this.currentPage].backgroundColor="#fff",e._highlightedPage=this.currentPage)},addView:function(e){e&&(e.width="100%",e.height="100%",this.views.push(e),this._contentContainer._add(e),1==this.views.length&&(this.properties.__values__.currentPage=0),this._updatePagingControl())},removeView:function(e){var t=l(e,"Number")?e:this.views.indexOf(e);0>t||t>=this.views.length||(t==this.currentPage&&1!==this.views.length?(this._viewToRemoveAfterScroll=t,this.scrollToView(t==this.views.length-1?--t:++t)):this._removeViewFromList(t))},_removeViewFromList:function(e){var t=this._contentContainer,i=this;this.currentPage>e&&i.properties.__values__.currentPage--,t._remove(i.views.splice(e,1)[0]),i.views.length||(i.properties.__values__.currentPage=-1),_(a,"postlayout",function(){setTimeout(function(){i._setTranslation(i.currentPage*-i._measuredWidth)},1)})},scrollToView:function(e,t){function i(){var e=a._contentContainer,i=e.domNode,r=-a.views[o]._measuredLeft,l=Math.max(g,Math.min(v,I*e._measuredWidth));a._updatePagingControl(),a._showPagingControl(o),t?(a._setTranslation(r),a.properties.__values__.currentPage=o):(n(i,"transition",l+"ms ease-out"),setTimeout(function(){_(i,h,function(){n(i,"transition",""),a._animating=0,a.properties.__values__.currentPage=o,a._updatePagingControl(),-1!==a._viewToRemoveAfterScroll&&(r+=a.views[a._viewToRemoveAfterScroll]._measuredWidth,a._removeViewFromList(a._viewToRemoveAfterScroll),a._viewToRemoveAfterScroll=-1),a.fireEvent("scrollend",{currentPage:o,view:a.views[o]})}),a._setTranslation(r)},1))}var o=l(e,"Number")?e:this.views.indexOf(e),a=this;0>o||o>=this.views.length||o==this.currentPage||(a._contentContainer.domNode.offsetWidth?i():_(a,"postlayout",i))},_defaultWidth:a.FILL,_defaultHeight:a.FILL,properties:{currentPage:{set:function(e,t){return e>=0&&this.views.length>e?(this.scrollToView(e,1),e):t},value:-1},pagingControlColor:{set:function(e){return this._pagingControlContainer.backgroundColor=e,e},value:"black"},pagingControlHeight:{set:function(e){return this._pagingControlContainer.height=e,e},value:20},pagingControlTimeout:{post:function(e){e||(this._pagingControlContainer.opacity=.75)},value:3e3},showPagingControl:!1,views:{set:function(e){if(l(e,"Array")){var t,i=0,o=e.length,a=this._contentContainer;for(a._removeAllChildren();o>i;i++)(t=e[i]).width="100%",t.height="100%",a._add(t);return this.properties.__values__.currentPage=o?0:-1,e}},post:"_updatePagingControl"}}})});