define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/UI","Ti/_/lang"],function(e,t,i,o){var n=o.isDef,r=Math.round;return t("Ti._.Layouts.ConstrainingVertical",e,{_doLayout:function(e,t,o,n,a){var s,l,d,_,c,u,h,f,p,g,y,v,m,w,I,b,T,C={width:0,height:0},E=e._children,x=0,S="px",k=[],A=0,N=0,L=E.length,F=this._measureNode;for(x=0;L>x;x++)s=e._children[x],s._alive&&s.domNode?s._markedForLayout&&((s._preLayout&&s._preLayout(t,o,n,a)||s._needsMeasuring)&&F(s,s,s._layoutCoefficients,this),l=s._layoutCoefficients,_=l.height,0===_.x2||isNaN(_.x2)?(d=l.width,c=l.sandboxWidth,u=l.sandboxHeight,g=d.x1*t+d.x2,y=_.x1*o+_.x2*(o-A)+_.x3,p=s._getContentSize?s._getContentSize(g,y):s._layout._doLayout(s,isNaN(g)?t:g-s._borderLeftWidth-s._borderRightWidth,isNaN(y)?o:y-s._borderTopWidth-s._borderBottomWidth,isNaN(g),isNaN(y)),isNaN(g)&&(g=p.width+s._borderLeftWidth+s._borderRightWidth),isNaN(y)&&(y=p.height+s._borderTopWidth+s._borderBottomWidth),v=s._measuredSandboxHeight=u.x1*o+u.x2+y,A+=v,s._measuredWidth=g,s._measuredHeight=y):N++):this.handleInvalidState(s,e);for(b=o-A,A=Math.floor(b/N),x=0;L>x;x++)s=e._children[x],s._markedForLayout&&(l=s._layoutCoefficients,_=l.height,0===_.x2||isNaN(_.x2)||(d=l.width,c=l.sandboxWidth,u=l.sandboxHeight,g=d.x1*t+d.x2,y=_.x1*o+_.x2*(L-1>x?A:b-A*(N-1))+_.x3,p=s._getContentSize?s._getContentSize(g,y):s._layout._doLayout(s,isNaN(g)?t:g-s._borderLeftWidth-s._borderRightWidth,isNaN(y)?o:y-s._borderTopWidth-s._borderBottomWidth,isNaN(g),isNaN(y)),isNaN(g)&&(g=p.width+s._borderLeftWidth+s._borderRightWidth),isNaN(y)&&(y=p.height+s._borderTopWidth+s._borderBottomWidth),s._measuredWidth=g,s._measuredHeight=y,v=s._measuredSandboxHeight=u.x1*o+u.x2+y));for(A=0,x=0;L>x;x++)s=e._children[x],s._measuredRunningHeight=A,s._markedForLayout?(l=s._layoutCoefficients,c=l.sandboxWidth,h=l.top,f=l.left,n&&0!==f.x1?k.push(s):(g=s._measuredWidth,w=s._measuredLeft=f.x1*t+f.x2*g+f.x3,m=s._measuredSandboxWidth=c.x1*t+c.x2+g+(isNaN(w)?0:w),s._measuredSandboxWidth>C.width&&(C.width=s._measuredSandboxWidth)),I=s._measuredTop=h.x1*o+h.x2+A):s._measuredSandboxWidth>C.width&&(C.width=s._measuredSandboxWidth),A+=s._measuredSandboxHeight;for(C.height=A,L=k.length,x=0;L>x;x++)s=k[x],c=s._layoutCoefficients.sandboxWidth,m=s._measuredSandboxWidth=c.x1*t+c.x2+s._measuredWidth,m>C.width&&(C.width=m);for(x=0;L>x;x++)s=k[x],f=s._layoutCoefficients.left,c=s._layoutCoefficients.sandboxWidth,g=s._measuredWidth,m=s._measuredSandboxWidth,m>C.width&&(C.width=m),w=s._measuredLeft=f.x1*C.width+f.x2*g+f.x3,s._measuredSandboxWidth+=isNaN(w)?0:w;for(L=E.length,x=0;L>x;x++)s=E[x],s._markedForLayout&&(i._elementLayoutCount++,s=E[x],T=s.domNode.style,T.zIndex=s.zIndex,T.left=r(s._measuredLeft)+S,T.top=r(s._measuredTop)+S,T.width=r(s._measuredWidth-s._borderLeftWidth-s._borderRightWidth)+S,T.height=r(s._measuredHeight-s._borderTopWidth-s._borderBottomWidth)+S,s._markedForLayout=!1,s.fireEvent("postlayout"));return this._computedSize=C},_getWidth:function(e,t){return!n(t)&&2>n(e.left)+n(e.center&&e.center.x)+n(e.right)&&(t=e._defaultWidth),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getWidth(e._parent,e._parent.width)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_getHeight:function(e,t){return!n(t)&&(t=e._defaultHeight),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getHeight(e._parent,e._parent.height)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_isDependentOnParent:function(e){var t=e._layoutCoefficients;return!isNaN(t.width.x1)&&0!==t.width.x1||!isNaN(t.height.x1)&&0!==t.height.x1||!isNaN(t.height.x2)&&0!==t.height.x2||0!==t.sandboxWidth.x1||0!==t.sandboxHeight.x1||0!==t.left.x1||0!==t.top.x1},_doAnimationLayout:function(e,t){var i=e._parent._measuredWidth,o=e._parent._measuredHeight,n=e._measuredRunningHeight,r=t.width.x1*i+t.width.x2;return{width:r,height:t.height.x1*o+t.height.x2*(o-n)+t.height.x3,left:t.left.x1*i+t.left.x2*r+t.left.x3,top:t.top.x1*o+t.top.x2+n}},_measureNode:function(e,t,o,n){e._needsMeasuring=!1;var r,a,s,l=n.getValueType,d=n.computeValue,_=n._getWidth(e,t.width),c=l(_),u=d(_,c),h=n._getHeight(e,t.height),f=l(h),p=d(h,f),g=t.left,y=l(g),v=d(g,y),m=t.center&&t.center.x,w=l(m),I=d(m,w),b=t.right,T=l(b),C=d(b,T),E=t.top,x=l(E),S=d(E,x),k=t.bottom,A=l(k),N=d(k,A),L=o.width,F=o.height,U=o.sandboxWidth,V=o.sandboxHeight,O=o.left,R=o.top;if(r=a=0,c===i.SIZE?r=a=0/0:c===i.FILL?(r=1,"%"===y?r-=v:"#"===y?a=-v:"%"===T?r-=C:"#"===T&&(a=-C)):"%"===c?r=u:"#"===c?a=u:"%"===y?"%"===w?r=2*(I-v):"#"===w?(r=-2*v,a=2*I):"%"===T?r=1-v-C:"#"===T&&(r=1-v,a=-C):"#"===y?"%"===w?(r=2*I,a=-2*v):"#"===w?a=2*(I-v):"%"===T?(r=1-C,a=-v):"#"===T&&(r=1,a=-C-v):"%"===w?"%"===T?r=2*(C-I):"#"===T&&(r=-2*I,a=2*C):"#"===w&&("%"===T?(r=2*C,a=-2*I):"#"===T&&(a=2*(C-I))),L.x1=r,L.x2=a,U.x1="%"===T?C:0,U.x2="#"===T?C:0,r=a=s=0,f===i.SIZE?r=a=s=0/0:f===i.FILL?(a=1,"%"===x&&(r=-S),"#"===x&&(s=-S),"%"===A&&(r=-N),"#"===A&&(s=-N)):"%"===f?r=p:"#"===f&&(s=p),F.x1=r,F.x2=a,F.x3=s,r=a=0,"%"===x&&(r=S),"#"===x&&(a=S),"%"===A&&(r+=N),"#"===A&&(a+=N),V.x1=r,V.x2=a,r=a=s=0,"%"===y)r=v;else if("#"===y)s=v;else if("%"===w)r=I,a=-.5;else if("#"===w)a=-.5,s=I;else if("%"===T)r=1-C,a=-1;else if("#"===T)r=1,a=-1,s=-C;else switch(n._defaultHorizontalAlignment){case"center":r=.5,a=-.5;break;case"end":r=1,a=-1}O.x1=r,O.x2=a,O.x3=s,R.x1="%"===x?S:0,R.x2="#"===x?S:0},_defaultHorizontalAlignment:"center",_defaultVerticalAlignment:"start"})});