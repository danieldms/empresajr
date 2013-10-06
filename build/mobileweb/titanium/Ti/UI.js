define(["Ti/_","Ti/_/Evented","Ti/_/has","Ti/_/lang","Ti/_/ready","Ti/_/style","Ti/_/dom","Ti/_/event","Ti/_/Gestures/DoubleTap","Ti/_/Gestures/Dragging","Ti/_/Gestures/LongPress","Ti/_/Gestures/Pinch","Ti/_/Gestures/SingleTap","Ti/_/Gestures/Swipe","Ti/_/Gestures/TouchCancel","Ti/_/Gestures/TouchEnd","Ti/_/Gestures/TouchMove","Ti/_/Gestures/TouchStart","Ti/_/Gestures/TwoFingerTap"],function(e,t,i,o,a,r,n,l,s,d,_,c,u,h,f,y,p,g,v){var w,I,m,b=window,T=document,E=T.body,C=require.on,S=require.is,A="2DMatrix,ActivityIndicator,AlertDialog,Animation,Button,EmailDialog,ImageView,Label,OptionDialog,Picker,PickerColumn,PickerRow,ProgressBar,ScrollableView,ScrollView,Slider,Switch,Tab,TabGroup,TableView,TableViewRow,TableViewSection,TextArea,TextField,View,WebView,Window",k={},x=r.set,N=navigator.userAgent.toLowerCase().match(/(iphone|android)/),L=N&&"iphone"===N[0],U={},F=function(){Ti.UI._recalculateLayout(),w=0},V=F,O=n.unitize,R=[g,y,p,f,d,u,s,_,c,h,v];return C(E,"touchmove",function(e){e.preventDefault()}),A.split(",").forEach(function(e){k["create"+e]=function(t){return new(require("Ti/UI/"+e))(t)}}),!navigator.standalone&&N&&(V=function(){if(!w){w=1;var e,t=0|require("Ti/Gesture").isPortrait,i=U[t];i||(L?(i=b.innerHeight+60,b.screen.availHeight-i>50&&(i+=50)):i=b.outerHeight/(b.devicePixelRatio||0),U[t]=i),x(E,"height",i+"px"),L?(b.scrollTo(0,0),F()):e=setInterval(function(){b.scrollTo(0,-1),b.innerHeight+1>=i&&(clearTimeout(e),F())},50)}},a(V),C(b,"orientationchange",V),C(b,"touchstart",V)),a(10,function(){setTimeout(function(){function e(e,t){var i,o,r,n=0,l=R.length,s=[],d=t._elements;if(d&&d.length){for(a||require.mix(t,{touches:"mouseup"===t.type?[]:[t],targetTouches:[],changedTouches:[t]});l>n;n++)if(r=R[n]["process"+e]){o=r(t,d);for(i in o)s[i]||(s[i]=[]),s[i]=s[i].concat(o[i])}Ti.UI._fireGestureEvents(s,d)}}var t=Ti.UI._container=Ti.UI.createView({left:0,top:0}),i=t.domNode,o=t._layoutCoefficients,a="ontouchstart"in b,r=0;o.width.x1=1,o.height.x1=1,t._measuredTop=0,t._measuredLeft=0,i.id="TiUIContainer",x(i,"overflow","hidden"),E.appendChild(i),(I=T.getElementById("splash"))&&t.addEventListener("postlayout",function(){setTimeout(function(){x(I,{position:"absolute",width:O(t._measuredWidth),height:O(t._measuredHeight),left:0,top:0,right:"",bottom:""})},10)}),V(),C(i,a?"touchstart":"mousedown",function(t){var i=[C(b,a?"touchmove":"mousemove",function(t){(a||r)&&e("TouchMoveEvent",t)}),C(b,a?"touchend":"mouseup",function(t){r=0,e("TouchEndEvent",t),l.off(i)}),a&&C(b,"touchcancel",function(t){e("TouchCancelEvent",t),l.off(i)})];r=1,e("TouchStartEvent",t)})},1)}),C(b,"resize",function(){Ti.UI._recalculateLayout()}),o.setObject("Ti.UI",t,k,{_addWindow:function(e,t){return this._container.add(e.modal?e._modalParentContainer:e),t&&this._setWindow(e),I&&n.destroy(I),e},_setWindow:function(e){this.constants.currentWindow=e},_removeWindow:function(e){return this._container.remove(e.modal?e._modalParentContainer:e),e},_fireGestureEvents:function(e,t){for(var i,o,a,r,n,l=0,s=R.length,d=0;t[d]&&!t[d]._isPublished;)d++;t[d]||(d=0);for(l in e)for(i=0,s=e[l].length;s>i;i++)n=e[l][i],S(n.x,"Number")&&S(n.y,"Number")?(r=this._container.convertPointToView({x:n.x,y:n.y},t[d]),o=r?r.x:n.x,a=r?r.y:n.y):o=a=void 0,n.x=o,n.y=a,n.bubbles=!0,n.cancelBubble=!1,t[0].fireEvent(l,n)},_layoutSemaphore:0,_nodesToLayout:[],_startLayout:function(){this._layoutSemaphore++},_finishLayout:function(){0===--this._layoutSemaphore&&this._triggerLayout(!0)},_elementLayoutCount:0,_triggerLayout:function(e,t){function o(){a._elementLayoutCount=0;var e,t,o,r,n,l,s,d,_,c,u=a._nodesToLayout,h=[],f=!1,y=a._container,p=u.length;for(i("ti-instrumentation")&&(a._layoutInstrumentationTest=instrumentation.startTest("Layout")),_=0;p>_;_++)if(e=u[_],e._isAttachedToActiveWin()){for(s=[e];s.length>0;){t=s.pop(),t._markedForLayout=!0,n=t._children;for(c in n)l=n[c],("composite"!==t.layout||l._needsMeasuring||t._layout._isDependentOnParent(l))&&s.push(l)}if(e===y)f=!0;else for(o=e;;){if(o._markedForLayout=!0,r=o,o=o._parent,d=!1,!o||o===y){f=!0;break}for(o._hasSizeDimensions()||o._needsMeasuring||(!o._markedForLayout&&!~h.indexOf(o)&&h.push(o),d=!0),s=[o];s.length>0;){t=s.pop(),n=t._children;for(c in n)l=n[c],l!==r&&("composite"!==t.layout||l._needsMeasuring||t._layout._isDependentOnParent(l))&&(l._markedForLayout=!0,s.push(l))}if(d)break}}if(f){var g=y.properties.__values__,v=y._measuredWidth=g.width=b.innerWidth,w=y._measuredHeight=g.height=b.innerHeight;y._measuredSandboxWidth=v,y._measuredSandboxHeight=w,y.fireEvent("postlayout"),x(y.domNode,{width:v+"px",height:w+"px"}),y._layout._doLayout(y,v,w,!1,!1)}for(_=0;h.length>_;_++)t=h[_],t._layout._doLayout(t,t._measuredWidth-t._borderLeftWidth-t._borderRightWidth,t._measuredHeight-t._borderTopWidth-t._borderBottomWidth,t._parent._layout._getWidth(t,t.width)===Ti.UI.SIZE,t._parent._layout._getHeight(t,t.height)===Ti.UI.SIZE);i("ti-instrumentation")&&instrumentation.stopTest(a._layoutInstrumentationTest,a._elementLayoutCount+" out of approximately "+document.getElementById("TiUIContainer").getElementsByTagName("*").length+" elements laid out."),a._layoutInProgress=!1,a._layoutTimer=null,a._nodesToLayout=[],a.fireEvent("postlayout")}var a=this;~a._nodesToLayout.indexOf(e)||(a._nodesToLayout.push(e),t?(clearTimeout(a._layoutTimer),a._layoutInProgress=!0,o()):1===a._nodesToLayout.length&&(a._layoutInProgress=!0,a._layoutTimer=setTimeout(o,10)))},_recalculateLayout:function(){m||(m=require("Ti/Gesture")),m._updateOrientation();var e=this._container;e&&(e.width=b.innerWidth,e.height=b.innerHeight)},properties:{backgroundColor:{set:function(e){return this._container.backgroundColor=e}},backgroundImage:{set:function(e){return x(E,"backgroundImage",e?r.url(e):"")}},currentTab:void 0},convertUnits:function(t,i){var o=n.computeSize(t,0,!1);switch(i){case Ti.UI.UNIT_MM:o*=10;case Ti.UI.UNIT_CM:return o/(10*.0393700787*e.dpi);case Ti.UI.UNIT_IN:return o/e.dpi;case Ti.UI.UNIT_DIP:return 96*o/e.dpi;case Ti.UI.UNIT_PX:return o;default:return 0}},constants:{currentWindow:void 0,UNKNOWN:0,FACE_DOWN:1,FACE_UP:2,PORTRAIT:3,UPSIDE_PORTRAIT:4,LANDSCAPE_LEFT:5,LANDSCAPE_RIGHT:6,INPUT_BORDERSTYLE_NONE:0,INPUT_BORDERSTYLE_LINE:1,INPUT_BORDERSTYLE_BEZEL:2,INPUT_BORDERSTYLE_ROUNDED:3,KEYBOARD_DEFAULT:2,KEYBOARD_EMAIL:3,KEYBOARD_NUMBER_PAD:6,KEYBOARD_PHONE_PAD:7,KEYBOARD_URL:8,NOTIFICATION_DURATION_LONG:1,NOTIFICATION_DURATION_SHORT:2,PICKER_TYPE_DATE:2,PICKER_TYPE_DATE_AND_TIME:3,PICKER_TYPE_PLAIN:4,PICKER_TYPE_TIME:5,RETURNKEY_DEFAULT:0,RETURNKEY_DONE:1,RETURNKEY_EMERGENCY_CALL:2,RETURNKEY_GO:3,RETURNKEY_GOOGLE:4,RETURNKEY_JOIN:5,RETURNKEY_NEXT:6,RETURNKEY_ROUTE:7,RETURNKEY_SEARCH:8,RETURNKEY_SEND:9,RETURNKEY_YAHOO:10,TEXT_ALIGNMENT_CENTER:"center",TEXT_ALIGNMENT_RIGHT:"right",TEXT_ALIGNMENT_LEFT:"left",TEXT_AUTOCAPITALIZATION_ALL:3,TEXT_AUTOCAPITALIZATION_NONE:0,TEXT_AUTOCAPITALIZATION_SENTENCES:2,TEXT_AUTOCAPITALIZATION_WORDS:1,TEXT_VERTICAL_ALIGNMENT_BOTTOM:"bottom",TEXT_VERTICAL_ALIGNMENT_CENTER:"center",TEXT_VERTICAL_ALIGNMENT_TOP:"top",ANIMATION_CURVE_EASE_IN:1,ANIMATION_CURVE_EASE_IN_OUT:0,ANIMATION_CURVE_EASE_OUT:2,ANIMATION_CURVE_LINEAR:3,SIZE:"auto",FILL:"fill",INHERIT:"inherit",UNIT_PX:"px",UNIT_MM:"mm",UNIT_CM:"cm",UNIT_IN:"in",UNIT_DIP:"dp",_LAYOUT_COMPOSITE:"composite",_LAYOUT_VERTICAL:"vertical",_LAYOUT_HORIZONTAL:"horizontal",_LAYOUT_CONSTRAINING_VERTICAL:"constrainingVertical",_LAYOUT_CONSTRAINING_HORIZONTAL:"constrainingHorizontal"}})});