define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/UI","Ti/_/lang"],function(e,t,i,o){var n=o.isDef,r=Math.round;return t("Ti._.Layouts.ConstrainingVertical",e,{_doLayout:function(e,t,o,n,a){var s,l,d,c,_,u,h,f,p,g,y,v,m,w,T,I,b,E={width:0,height:0},C=e._children,x=0,S="px",A=[],k=0,N=0,L=C.length,F=this._measureNode;for(x=0;L>x;x++)s=e._children[x],s._alive&&s.domNode?s._markedForLayout&&((s._preLayout&&s._preLayout(t,o,n,a)||s._needsMeasuring)&&F(s,s,s._layoutCoefficients,this),l=s._layoutCoefficients,c=l.height,0===c.x2||isNaN(c.x2)?(d=l.width,_=l.sandboxWidth,u=l.sandboxHeight,g=d.x1*t+d.x2,y=c.x1*o+c.x2*(o-k)+c.x3,p=s._getContentSize?s._getContentSize(g,y):s._layout._doLayout(s,isNaN(g)?t:g-s._borderLeftWidth-s._borderRightWidth,isNaN(y)?o:y-s._borderTopWidth-s._borderBottomWidth,isNaN(g),isNaN(y)),isNaN(g)&&(g=p.width+s._borderLeftWidth+s._borderRightWidth),isNaN(y)&&(y=p.height+s._borderTopWidth+s._borderBottomWidth),v=s._measuredSandboxHeight=u.x1*o+u.x2+y,k+=v,s._measuredWidth=g,s._measuredHeight=y):N++):this.handleInvalidState(s,e);for(I=o-k,k=Math.floor(I/N),x=0;L>x;x++)s=e._children[x],s._markedForLayout&&(l=s._layoutCoefficients,c=l.height,0===c.x2||isNaN(c.x2)||(d=l.width,_=l.sandboxWidth,u=l.sandboxHeight,g=d.x1*t+d.x2,y=c.x1*o+c.x2*(L-1>x?k:I-k*(N-1))+c.x3,p=s._getContentSize?s._getContentSize(g,y):s._layout._doLayout(s,isNaN(g)?t:g-s._borderLeftWidth-s._borderRightWidth,isNaN(y)?o:y-s._borderTopWidth-s._borderBottomWidth,isNaN(g),isNaN(y)),isNaN(g)&&(g=p.width+s._borderLeftWidth+s._borderRightWidth),isNaN(y)&&(y=p.height+s._borderTopWidth+s._borderBottomWidth),s._measuredWidth=g,s._measuredHeight=y,v=s._measuredSandboxHeight=u.x1*o+u.x2+y));for(k=0,x=0;L>x;x++)s=e._children[x],s._measuredRunningHeight=k,s._markedForLayout?(l=s._layoutCoefficients,_=l.sandboxWidth,h=l.top,f=l.left,n&&0!==f.x1?A.push(s):(g=s._measuredWidth,w=s._measuredLeft=f.x1*t+f.x2*g+f.x3,m=s._measuredSandboxWidth=_.x1*t+_.x2+g+(isNaN(w)?0:w),s._measuredSandboxWidth>E.width&&(E.width=s._measuredSandboxWidth)),T=s._measuredTop=h.x1*o+h.x2+k):s._measuredSandboxWidth>E.width&&(E.width=s._measuredSandboxWidth),k+=s._measuredSandboxHeight;for(E.height=k,L=A.length,x=0;L>x;x++)s=A[x],_=s._layoutCoefficients.sandboxWidth,m=s._measuredSandboxWidth=_.x1*t+_.x2+s._measuredWidth,m>E.width&&(E.width=m);for(x=0;L>x;x++)s=A[x],f=s._layoutCoefficients.left,_=s._layoutCoefficients.sandboxWidth,g=s._measuredWidth,m=s._measuredSandboxWidth,m>E.width&&(E.width=m),w=s._measuredLeft=f.x1*E.width+f.x2*g+f.x3,s._measuredSandboxWidth+=isNaN(w)?0:w;for(L=C.length,x=0;L>x;x++)s=C[x],s._markedForLayout&&(i._elementLayoutCount++,s=C[x],b=s.domNode.style,b.zIndex=s.zIndex,b.left=r(s._measuredLeft)+S,b.top=r(s._measuredTop)+S,b.width=r(s._measuredWidth-s._borderLeftWidth-s._borderRightWidth)+S,b.height=r(s._measuredHeight-s._borderTopWidth-s._borderBottomWidth)+S,s._markedForLayout=!1,s.fireEvent("postlayout"));return this._computedSize=E},_getWidth:function(e,t){return!n(t)&&2>n(e.left)+n(e.center&&e.center.x)+n(e.right)&&(t=e._defaultWidth),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getWidth(e._parent,e._parent.width)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_getHeight:function(e,t){return!n(t)&&(t=e._defaultHeight),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getHeight(e._parent,e._parent.height)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_isDependentOnParent:function(e){var t=e._layoutCoefficients;return!isNaN(t.width.x1)&&0!==t.width.x1||!isNaN(t.height.x1)&&0!==t.height.x1||!isNaN(t.height.x2)&&0!==t.height.x2||0!==t.sandboxWidth.x1||0!==t.sandboxHeight.x1||0!==t.left.x1||0!==t.top.x1},_doAnimationLayout:function(e,t){var i=e._parent._measuredWidth,o=e._parent._measuredHeight,n=e._measuredRunningHeight,r=t.width.x1*i+t.width.x2;return{width:r,height:t.height.x1*o+t.height.x2*(o-n)+t.height.x3,left:t.left.x1*i+t.left.x2*r+t.left.x3,top:t.top.x1*o+t.top.x2+n}},_measureNode:function(e,t,o,n){e._needsMeasuring=!1;var r,a,s,l=n.getValueType,d=n.computeValue,c=n._getWidth(e,t.width),_=l(c),u=d(c,_),h=n._getHeight(e,t.height),f=l(h),p=d(h,f),g=t.left,y=l(g),v=d(g,y),m=t.center&&t.center.x,w=l(m),T=d(m,w),I=t.right,b=l(I),E=d(I,b),C=t.top,x=l(C),S=d(C,x),A=t.bottom,k=l(A),N=d(A,k),L=o.width,F=o.height,U=o.sandboxWidth,O=o.sandboxHeight,R=o.left,V=o.top;if(r=a=0,_===i.SIZE?r=a=0/0:_===i.FILL?(r=1,"%"===y?r-=v:"#"===y?a=-v:"%"===b?r-=E:"#"===b&&(a=-E)):"%"===_?r=u:"#"===_?a=u:"%"===y?"%"===w?r=2*(T-v):"#"===w?(r=-2*v,a=2*T):"%"===b?r=1-v-E:"#"===b&&(r=1-v,a=-E):"#"===y?"%"===w?(r=2*T,a=-2*v):"#"===w?a=2*(T-v):"%"===b?(r=1-E,a=-v):"#"===b&&(r=1,a=-E-v):"%"===w?"%"===b?r=2*(E-T):"#"===b&&(r=-2*T,a=2*E):"#"===w&&("%"===b?(r=2*E,a=-2*T):"#"===b&&(a=2*(E-T))),L.x1=r,L.x2=a,U.x1="%"===b?E:0,U.x2="#"===b?E:0,r=a=s=0,f===i.SIZE?r=a=s=0/0:f===i.FILL?(a=1,"%"===x&&(r=-S),"#"===x&&(s=-S),"%"===k&&(r=-N),"#"===k&&(s=-N)):"%"===f?r=p:"#"===f&&(s=p),F.x1=r,F.x2=a,F.x3=s,r=a=0,"%"===x&&(r=S),"#"===x&&(a=S),"%"===k&&(r+=N),"#"===k&&(a+=N),O.x1=r,O.x2=a,r=a=s=0,"%"===y)r=v;else if("#"===y)s=v;else if("%"===w)r=T,a=-.5;else if("#"===w)a=-.5,s=T;else if("%"===b)r=1-E,a=-1;else if("#"===b)r=1,a=-1,s=-E;else switch(n._defaultHorizontalAlignment){case"center":r=.5,a=-.5;break;case"end":r=1,a=-1}R.x1=r,R.x2=a,R.x3=s,V.x1="%"===x?S:0,V.x2="#"===x?S:0},_defaultHorizontalAlignment:"center",_defaultVerticalAlignment:"start"})});