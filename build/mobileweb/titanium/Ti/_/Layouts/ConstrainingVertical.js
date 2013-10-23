define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/UI","Ti/_/lang"],function(e,t,i,o){var n=o.isDef,a=Math.round;return t("Ti._.Layouts.ConstrainingVertical",e,{_doLayout:function(e,t,o,n,r){var l,s,d,_,c,u,h,f,p,g,y,v,m,w,I,b,T,E={width:0,height:0},C=e._children,x=0,S="px",k=[],A=0,N=0,L=C.length,F=this._measureNode;for(x=0;L>x;x++)l=e._children[x],l._alive&&l.domNode?l._markedForLayout&&((l._preLayout&&l._preLayout(t,o,n,r)||l._needsMeasuring)&&F(l,l,l._layoutCoefficients,this),s=l._layoutCoefficients,_=s.height,0===_.x2||isNaN(_.x2)?(d=s.width,c=s.sandboxWidth,u=s.sandboxHeight,g=d.x1*t+d.x2,y=_.x1*o+_.x2*(o-A)+_.x3,p=l._getContentSize?l._getContentSize(g,y):l._layout._doLayout(l,isNaN(g)?t:g-l._borderLeftWidth-l._borderRightWidth,isNaN(y)?o:y-l._borderTopWidth-l._borderBottomWidth,isNaN(g),isNaN(y)),isNaN(g)&&(g=p.width+l._borderLeftWidth+l._borderRightWidth),isNaN(y)&&(y=p.height+l._borderTopWidth+l._borderBottomWidth),v=l._measuredSandboxHeight=u.x1*o+u.x2+y,A+=v,l._measuredWidth=g,l._measuredHeight=y):N++):this.handleInvalidState(l,e);for(b=o-A,A=Math.floor(b/N),x=0;L>x;x++)l=e._children[x],l._markedForLayout&&(s=l._layoutCoefficients,_=s.height,0===_.x2||isNaN(_.x2)||(d=s.width,c=s.sandboxWidth,u=s.sandboxHeight,g=d.x1*t+d.x2,y=_.x1*o+_.x2*(L-1>x?A:b-A*(N-1))+_.x3,p=l._getContentSize?l._getContentSize(g,y):l._layout._doLayout(l,isNaN(g)?t:g-l._borderLeftWidth-l._borderRightWidth,isNaN(y)?o:y-l._borderTopWidth-l._borderBottomWidth,isNaN(g),isNaN(y)),isNaN(g)&&(g=p.width+l._borderLeftWidth+l._borderRightWidth),isNaN(y)&&(y=p.height+l._borderTopWidth+l._borderBottomWidth),l._measuredWidth=g,l._measuredHeight=y,v=l._measuredSandboxHeight=u.x1*o+u.x2+y));for(A=0,x=0;L>x;x++)l=e._children[x],l._measuredRunningHeight=A,l._markedForLayout?(s=l._layoutCoefficients,c=s.sandboxWidth,h=s.top,f=s.left,n&&0!==f.x1?k.push(l):(g=l._measuredWidth,w=l._measuredLeft=f.x1*t+f.x2*g+f.x3,m=l._measuredSandboxWidth=c.x1*t+c.x2+g+(isNaN(w)?0:w),l._measuredSandboxWidth>E.width&&(E.width=l._measuredSandboxWidth)),I=l._measuredTop=h.x1*o+h.x2+A):l._measuredSandboxWidth>E.width&&(E.width=l._measuredSandboxWidth),A+=l._measuredSandboxHeight;for(E.height=A,L=k.length,x=0;L>x;x++)l=k[x],c=l._layoutCoefficients.sandboxWidth,m=l._measuredSandboxWidth=c.x1*t+c.x2+l._measuredWidth,m>E.width&&(E.width=m);for(x=0;L>x;x++)l=k[x],f=l._layoutCoefficients.left,c=l._layoutCoefficients.sandboxWidth,g=l._measuredWidth,m=l._measuredSandboxWidth,m>E.width&&(E.width=m),w=l._measuredLeft=f.x1*E.width+f.x2*g+f.x3,l._measuredSandboxWidth+=isNaN(w)?0:w;for(L=C.length,x=0;L>x;x++)l=C[x],l._markedForLayout&&(i._elementLayoutCount++,l=C[x],T=l.domNode.style,T.zIndex=l.zIndex,T.left=a(l._measuredLeft)+S,T.top=a(l._measuredTop)+S,T.width=a(l._measuredWidth-l._borderLeftWidth-l._borderRightWidth)+S,T.height=a(l._measuredHeight-l._borderTopWidth-l._borderBottomWidth)+S,l._markedForLayout=!1,l.fireEvent("postlayout"));return this._computedSize=E},_getWidth:function(e,t){return!n(t)&&2>n(e.left)+n(e.center&&e.center.x)+n(e.right)&&(t=e._defaultWidth),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getWidth(e._parent,e._parent.width)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_getHeight:function(e,t){return!n(t)&&(t=e._defaultHeight),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getHeight(e._parent,e._parent.height)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_isDependentOnParent:function(e){var t=e._layoutCoefficients;return!isNaN(t.width.x1)&&0!==t.width.x1||!isNaN(t.height.x1)&&0!==t.height.x1||!isNaN(t.height.x2)&&0!==t.height.x2||0!==t.sandboxWidth.x1||0!==t.sandboxHeight.x1||0!==t.left.x1||0!==t.top.x1},_doAnimationLayout:function(e,t){var i=e._parent._measuredWidth,o=e._parent._measuredHeight,n=e._measuredRunningHeight,a=t.width.x1*i+t.width.x2;return{width:a,height:t.height.x1*o+t.height.x2*(o-n)+t.height.x3,left:t.left.x1*i+t.left.x2*a+t.left.x3,top:t.top.x1*o+t.top.x2+n}},_measureNode:function(e,t,o,n){e._needsMeasuring=!1;var a,r,l,s=n.getValueType,d=n.computeValue,_=n._getWidth(e,t.width),c=s(_),u=d(_,c),h=n._getHeight(e,t.height),f=s(h),p=d(h,f),g=t.left,y=s(g),v=d(g,y),m=t.center&&t.center.x,w=s(m),I=d(m,w),b=t.right,T=s(b),E=d(b,T),C=t.top,x=s(C),S=d(C,x),k=t.bottom,A=s(k),N=d(k,A),L=o.width,F=o.height,U=o.sandboxWidth,V=o.sandboxHeight,O=o.left,R=o.top;if(a=r=0,c===i.SIZE?a=r=0/0:c===i.FILL?(a=1,"%"===y?a-=v:"#"===y?r=-v:"%"===T?a-=E:"#"===T&&(r=-E)):"%"===c?a=u:"#"===c?r=u:"%"===y?"%"===w?a=2*(I-v):"#"===w?(a=-2*v,r=2*I):"%"===T?a=1-v-E:"#"===T&&(a=1-v,r=-E):"#"===y?"%"===w?(a=2*I,r=-2*v):"#"===w?r=2*(I-v):"%"===T?(a=1-E,r=-v):"#"===T&&(a=1,r=-E-v):"%"===w?"%"===T?a=2*(E-I):"#"===T&&(a=-2*I,r=2*E):"#"===w&&("%"===T?(a=2*E,r=-2*I):"#"===T&&(r=2*(E-I))),L.x1=a,L.x2=r,U.x1="%"===T?E:0,U.x2="#"===T?E:0,a=r=l=0,f===i.SIZE?a=r=l=0/0:f===i.FILL?(r=1,"%"===x&&(a=-S),"#"===x&&(l=-S),"%"===A&&(a=-N),"#"===A&&(l=-N)):"%"===f?a=p:"#"===f&&(l=p),F.x1=a,F.x2=r,F.x3=l,a=r=0,"%"===x&&(a=S),"#"===x&&(r=S),"%"===A&&(a+=N),"#"===A&&(r+=N),V.x1=a,V.x2=r,a=r=l=0,"%"===y)a=v;else if("#"===y)l=v;else if("%"===w)a=I,r=-.5;else if("#"===w)r=-.5,l=I;else if("%"===T)a=1-E,r=-1;else if("#"===T)a=1,r=-1,l=-E;else switch(n._defaultHorizontalAlignment){case"center":a=.5,r=-.5;break;case"end":a=1,r=-1}O.x1=a,O.x2=r,O.x3=l,R.x1="%"===x?S:0,R.x2="#"===x?S:0},_defaultHorizontalAlignment:"center",_defaultVerticalAlignment:"start"})});