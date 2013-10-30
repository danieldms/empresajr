define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/UI","Ti/_/lang"],function(e,t,i,o){var n=o.isDef,a=Math.round;return t("Ti._.Layouts.Vertical",e,{_doLayout:function(e,t,o,n,r){var l,s,d,_,c,u,h,f,y,p,g,v,m,w,I,b={width:0,height:0},T=e._children,E=0,C="px",x=[],S=0,k=T.length,A=this._measureNode;for(E=0;k>E;E++)l=e._children[E],l._alive&&l.domNode?(l._measuredRunningHeight=S,l._markedForLayout&&((l._preLayout&&l._preLayout(t,o,n,r)||l._needsMeasuring)&&A(l,l,l._layoutCoefficients,this),s=l._layoutCoefficients,d=s.width,_=s.height,c=s.sandboxWidth,u=s.sandboxHeight,f=s.left,h=s.top,p=d.x1*t+d.x2,g=_.x1*o+_.x2*(o-S)+_.x3,y=l._getContentSize?l._getContentSize(p,g):l._layout._doLayout(l,isNaN(p)?t:p-l._borderLeftWidth-l._borderRightWidth,isNaN(g)?o:g-l._borderTopWidth-l._borderBottomWidth,isNaN(p),isNaN(g)),isNaN(p)&&(p=y.width+l._borderLeftWidth+l._borderRightWidth),isNaN(g)&&(g=y.height+l._borderTopWidth+l._borderBottomWidth),l._measuredWidth=p,l._measuredHeight=g,n&&0!==f.x1?x.push(l):(w=l._measuredLeft=f.x1*t+f.x2*p+f.x3,m=l._measuredSandboxWidth=c.x1*t+c.x2+p+(isNaN(w)?0:w)),l._measuredTop=h.x1*o+h.x2+S,v=l._measuredSandboxHeight=u.x1*o+u.x2+g),l._measuredSandboxWidth>b.width&&(b.width=l._measuredSandboxWidth),S=b.height+=l._measuredSandboxHeight):this.handleInvalidState(l,e);for(k=x.length,E=0;k>E;E++)l=x[E],c=l._layoutCoefficients.sandboxWidth,m=l._measuredSandboxWidth=c.x1*t+c.x2+l._measuredWidth,m>b.width&&(b.width=m);for(E=0;k>E;E++)l=x[E],f=l._layoutCoefficients.left,c=l._layoutCoefficients.sandboxWidth,p=l._measuredWidth,m=l._measuredSandboxWidth,m>b.width&&(b.width=m),w=l._measuredLeft=f.x1*b.width+f.x2*p+f.x3,l._measuredSandboxWidth+=isNaN(w)?0:w;for(k=T.length,E=0;k>E;E++)l=T[E],l._markedForLayout&&(i._elementLayoutCount++,l=T[E],I=l.domNode.style,I.zIndex=l.zIndex,I.left=a(l._measuredLeft)+C,I.top=a(l._measuredTop)+C,I.width=a(l._measuredWidth-l._borderLeftWidth-l._borderRightWidth)+C,I.height=a(l._measuredHeight-l._borderTopWidth-l._borderBottomWidth)+C,l._markedForLayout=!1,l.fireEvent("postlayout"));return this._computedSize=b},_getWidth:function(e,t){return!n(t)&&2>n(e.left)+n(e.center&&e.center.x)+n(e.right)&&(t=e._defaultWidth),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getWidth(e._parent,e._parent.width)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_getHeight:function(e,t){return!n(t)&&(t=e._defaultHeight),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getHeight(e._parent,e._parent.height)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_isDependentOnParent:function(e){var t=e._layoutCoefficients;return!isNaN(t.width.x1)&&0!==t.width.x1||!isNaN(t.height.x1)&&0!==t.height.x1||!isNaN(t.height.x2)&&0!==t.height.x2||0!==t.sandboxWidth.x1||0!==t.sandboxHeight.x1||0!==t.left.x1||0!==t.top.x1},_doAnimationLayout:function(e,t){var i=e._parent._measuredWidth,o=e._parent._measuredHeight,n=e._measuredRunningHeight,a=t.width.x1*i+t.width.x2;return{width:a,height:t.height.x1*o+t.height.x2*(o-n)+t.height.x3,left:t.left.x1*i+t.left.x2*a+t.left.x3,top:t.top.x1*o+t.top.x2+n}},_measureNode:function(e,t,o,n){e._needsMeasuring=!1;var a,r,l,s=n.getValueType,d=n.computeValue,_=n._getWidth(e,t.width),c=s(_),u=d(_,c),h=n._getHeight(e,t.height),f=s(h),y=d(h,f),p=t.left,g=s(p),v=d(p,g),m=t.center&&t.center.x,w=s(m),I=d(m,w),b=t.right,T=s(b),E=d(b,T),C=t.top,x=s(C),S=d(C,x),k=t.bottom,A=s(k),L=d(k,A),N=o.width,U=o.height,F=o.sandboxWidth,O=o.sandboxHeight,V=o.left,R=o.top;if(a=r=0,c===i.SIZE?a=r=0/0:c===i.FILL?(a=1,"%"===g?a-=v:"#"===g?r=-v:"%"===T?a-=E:"#"===T&&(r=-E)):"%"===c?a=u:"#"===c?r=u:"%"===g?"%"===w?a=2*(I-v):"#"===w?(a=-2*v,r=2*I):"%"===T?a=1-v-E:"#"===T&&(a=1-v,r=-E):"#"===g?"%"===w?(a=2*I,r=-2*v):"#"===w?r=2*(I-v):"%"===T?(a=1-E,r=-v):"#"===T&&(a=1,r=-E-v):"%"===w?"%"===T?a=2*(E-I):"#"===T&&(a=-2*I,r=2*E):"#"===w&&("%"===T?(a=2*E,r=-2*I):"#"===T&&(r=2*(E-I))),N.x1=a,N.x2=r,F.x1="%"===T?E:0,F.x2="#"===T?E:0,a=r=l=0,f===i.SIZE?a=r=l=0/0:f===i.FILL?(r=1,"%"===x&&(a=-S),"#"===x&&(l=-S),"%"===A&&(a=-L),"#"===A&&(l=-L)):"%"===f?a=y:"#"===f&&(l=y),U.x1=a,U.x2=r,U.x3=l,a=r=0,"%"===x&&(a=S),"#"===x&&(r=S),"%"===A&&(a+=L),"#"===A&&(r+=L),O.x1=a,O.x2=r,a=r=l=0,"%"===g)a=v;else if("#"===g)l=v;else if("%"===w)a=I,r=-.5;else if("#"===w)r=-.5,l=I;else if("%"===T)a=1-E,r=-1;else if("#"===T)a=1,r=-1,l=-E;else switch(n._defaultHorizontalAlignment){case"center":a=.5,r=-.5;break;case"end":a=1,r=-1}V.x1=a,V.x2=r,V.x3=l,R.x1="%"===x?S:0,R.x2="#"===x?S:0},_defaultHorizontalAlignment:"center",_defaultVerticalAlignment:"start"})});