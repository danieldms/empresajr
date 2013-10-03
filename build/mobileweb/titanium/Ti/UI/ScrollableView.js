define(["Ti/_/declare","Ti/UI/View","Ti/_/dom","Ti/_/style","Ti/UI","Ti/_/browser"],function(e,t,i,o,n,r){var a=o.set,s=require.is,l=i.unitize,d=require.on,c=d.once,_=window,u={webkit:"webkitTransitionEnd",trident:"msTransitionEnd",gecko:"transitionend",presto:"oTransitionEnd"},h=u[r.runtime]||"transitionEnd",f="ontouchstart"in _,p=200,g=10,y=25,v=1e3,m=.5,w=2;return e("Ti.UI.ScrollableView",t,{constructor:function(){var e,t=this,i=0;t._add(t._contentContainer=n.createView({left:0,top:0,width:n.SIZE,height:"100%",layout:"constrainingHorizontal"})),e=t._contentContainer.domNode,t._add(t._pagingControlContainer=n.createView({width:"100%",height:20,bottom:0,backgroundColor:"black",opacity:0,touchEnabled:!1})),t._pagingControlContainer._add(t._pagingControlContentContainer=n.createView({width:n.SIZE,height:"100%",top:0,touchEnabled:!1,layout:"constrainingHorizontal"})),t.properties.__values__.views=[],t._viewToRemoveAfterScroll=-1,d(t,"postlayout",function(){t._animating||t._setTranslation(t.currentPage*-t._measuredWidth)}),d(e,f?"touchstart":"mousedown",function(o){var n=o.touches?o.touches[0].clientX:o.clientX,r=n,s=Date.now(),l=t._measuredWidth,d=function(e){var o=t.currentPage,a=r-n+i;l=t._measuredWidth,e.preventDefault(),r=e.touches?e.touches[0].clientX:e.clientX,t._setTranslation(o*-l+a),t.fireEvent("scroll",{currentPage:o,currentPageAsFloat:o-a/l,view:t.views[o]})},u=function(o){var I=Date.now(),b=p>I-s,T=t.currentPage,E=Math.abs(n-r)>(b?g:l/2),C=t.properties.__values__,k=Math.abs(r-n);_.removeEventListener(f?"touchmove":"mousemove",d),_.removeEventListener(f?"touchend":"mouseup",u),l=t._measuredWidth,t._animating=1,o.preventDefault(),E&&(n>r?T!==C.views.length-1&&T++:0!==T&&T--,k=l-k),t._showPagingControl(T),i=r-n+i,k=Math.max(y,Math.min(v,(b?m:w)*k)),a(e,"transition",k+"ms ease-out"),setTimeout(function(){c(e,h,function(){a(e,"transition",""),t._animating=0,C.currentPage=T,t._updatePagingControl(),t.fireEvent("scrollend",{currentPage:T,view:t.views[T]})}),t._setTranslation(T*-l)},1),t.fireEvent("dragend",{currentPage:T,view:t.views[T]})};t._showPagingControl(t.currentPage,1),o.preventDefault(),i=t._animating?i||0:0,a(e,"transition",""),t._setTranslation(t.currentPage*-l+i),t._animating=0,_.addEventListener(f?"touchmove":"mousemove",d),_.addEventListener(f?"touchend":"mouseup",u),t.fireEvent("dragstart")})},_setTranslation:function(e){a(this._contentContainer.domNode,"transform","translatez(0) translatex("+e+"px)")},_showPagingControl:function(e,t){var i=this;return i.showPagingControl?(i._pagingAnimation&&i._pagingAnimation.cancel(),i._pagingAnimation=i._pagingControlContainer.animate({duration:250,opacity:.75}),clearInterval(i._pagingTimeout),!t&&i.pagingControlTimeout>0?i._pagingTimeout=setTimeout(function(){i._pagingAnimation&&i._pagingAnimation.cancel(),i._pagingAnimation=i._pagingControlContainer.animate({duration:750,opacity:0},function(){i._pagingAnimation=void 0})},i.pagingControlTimeout):i._pagingAnimation=void 0,void 0):(i._pagingControlContainer.opacity=0,void 0)},_updatePagingControl:function(){var e=this._pagingControlContentContainer,t=this.views.length,i=this.pagingControlHeight/2;if(t!==e._numViews||i!==e._diameter){e._numViews=t,e._diameter=i,e._removeAllChildren();for(var o=0;this.views.length>o;o++)e._add(n.createView({width:i,height:i,left:5,right:5,backgroundColor:"#aaa",borderRadius:l(i/2)}));e._highlightedPage=-1}e._highlightedPage!==this.currentPage&&(0>e._highlightedPage||(e._children[e._highlightedPage].backgroundColor="#aaa"),e._children[this.currentPage].backgroundColor="#fff",e._highlightedPage=this.currentPage)},addView:function(e){e&&(e.width="100%",e.height="100%",this.views.push(e),this._contentContainer._add(e),1==this.views.length&&(this.properties.__values__.currentPage=0),this._updatePagingControl())},removeView:function(e){var t=s(e,"Number")?e:this.views.indexOf(e);0>t||t>=this.views.length||(t==this.currentPage&&1!==this.views.length?(this._viewToRemoveAfterScroll=t,this.scrollToView(t==this.views.length-1?--t:++t)):this._removeViewFromList(t))},_removeViewFromList:function(e){var t=this._contentContainer,i=this;this.currentPage>e&&i.properties.__values__.currentPage--,t._remove(i.views.splice(e,1)[0]),i.views.length||(i.properties.__values__.currentPage=-1),c(n,"postlayout",function(){setTimeout(function(){i._setTranslation(i.currentPage*-i._measuredWidth)},1)})},scrollToView:function(e,t){function i(){var e=n._contentContainer,i=e.domNode,r=-n.views[o]._measuredLeft,s=Math.max(y,Math.min(v,w*e._measuredWidth));n._updatePagingControl(),n._showPagingControl(o),t?(n._setTranslation(r),n.properties.__values__.currentPage=o):(a(i,"transition",s+"ms ease-out"),setTimeout(function(){c(i,h,function(){a(i,"transition",""),n._animating=0,n.properties.__values__.currentPage=o,n._updatePagingControl(),-1!==n._viewToRemoveAfterScroll&&(r+=n.views[n._viewToRemoveAfterScroll]._measuredWidth,n._removeViewFromList(n._viewToRemoveAfterScroll),n._viewToRemoveAfterScroll=-1),n.fireEvent("scrollend",{currentPage:o,view:n.views[o]})}),n._setTranslation(r)},1))}var o=s(e,"Number")?e:this.views.indexOf(e),n=this;0>o||o>=this.views.length||o==this.currentPage||(n._contentContainer.domNode.offsetWidth?i():c(n,"postlayout",i))},_defaultWidth:n.FILL,_defaultHeight:n.FILL,properties:{currentPage:{set:function(e,t){return e>=0&&this.views.length>e?(this.scrollToView(e,1),e):t},value:-1},pagingControlColor:{set:function(e){return this._pagingControlContainer.backgroundColor=e,e},value:"black"},pagingControlHeight:{set:function(e){return this._pagingControlContainer.height=e,e},value:20},pagingControlTimeout:{post:function(e){e||(this._pagingControlContainer.opacity=.75)},value:3e3},showPagingControl:!1,views:{set:function(e){if(s(e,"Array")){var t,i=0,o=e.length,n=this._contentContainer;for(n._removeAllChildren();o>i;i++)(t=e[i]).width="100%",t.height="100%",n._add(t);return this.properties.__values__.currentPage=o?0:-1,e}},post:"_updatePagingControl"}}})});