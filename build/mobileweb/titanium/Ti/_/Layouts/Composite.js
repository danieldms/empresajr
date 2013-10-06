define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/UI","Ti/_/lang"],function(e,t,i,o){var n=o.isDef,r="px",a=Math.round;return t("Ti._.Layouts.Composite",e,{_doLayout:function(e,t,o,n,s){var l,d,_,c,u,h,f,p,y,g,v,m,w,I,b,T,E,C,x={width:0,height:0},S=e._children,A=0,k=[],N=[],L=S.length,F=this._measureNode;for(A=0;L>A;A++)l=e._children[A],l._alive&&l.domNode?(l._markedForLayout&&((l._preLayout&&l._preLayout(t,o,n,s)||l._needsMeasuring)&&F(l,l,l._layoutCoefficients,this),d=l._layoutCoefficients,_=d.width,y=d.minWidth,c=d.height,g=d.minHeight,u=d.sandboxWidth,h=d.sandboxHeight,p=d.left,f=d.top,m=_.x1*t+_.x2,void 0!==y.x1&&(m=Math.max(m,y.x1*t+y.x2)),w=c.x1*o+c.x2,void 0!==g.x1&&(w=Math.max(w,g.x1*o+g.x2)),v=l._getContentSize?l._getContentSize(m,w):l._layout._doLayout(l,isNaN(m)?t:m-l._borderLeftWidth-l._borderRightWidth,isNaN(w)?o:w-l._borderTopWidth-l._borderBottomWidth,isNaN(m),isNaN(w)),isNaN(m)&&(m=v.width+l._borderLeftWidth+l._borderRightWidth,void 0!==y.x1&&(m=Math.max(m,y.x1*t+y.x2))),isNaN(w)&&(w=v.height+l._borderTopWidth+l._borderBottomWidth,void 0!==g.x1&&(w=Math.max(w,g.x1*o+g.x2))),n&&0!==p.x1?k.push(l):T=p.x1*t+p.x2*m+p.x3,s&&0!==f.x1?N.push(l):E=f.x1*o+f.x2*w+f.x3,l._measuredSandboxWidth=b=u.x1*o+u.x2+m+(isNaN(T)?0:T),l._measuredSandboxHeight=I=h.x1*o+h.x2+w+(isNaN(E)?0:E),l._measuredWidth=m,l._measuredHeight=w,l._measuredLeft=T,l._measuredTop=E),l._measuredSandboxWidth>x.width&&(x.width=l._measuredSandboxWidth),l._measuredSandboxHeight>x.height&&(x.height=l._measuredSandboxHeight)):this.handleInvalidState(l,e);for(L=k.length,A=0;L>A;A++)l=k[A],p=l._layoutCoefficients.left,u=l._layoutCoefficients.sandboxWidth,l._measuredLeft=T=p.x1*x.width+p.x2*m+p.x3,l._measuredSandboxWidth=b=u.x1*o+u.x2+l._measuredWidth+T,b=l._measuredSandboxWidth,b>x.width&&(x.width=b);for(L=N.length,A=0;L>A;A++)l=N[A],f=l._layoutCoefficients.top,h=l._layoutCoefficients.sandboxHeight,l._measuredTop=E=f.x1*x.height+f.x2*w+f.x3,l._measuredSandboxHeight=I=h.x1*o+h.x2+l._measuredHeight+E,I=l._measuredSandboxHeight,I>x.height&&(x.height=I);for(L=S.length,A=0;L>A;A++)l=S[A],l._markedForLayout&&(i._elementLayoutCount++,C=l.domNode.style,C.zIndex=l.zIndex,C.left=a(l._measuredLeft)+r,C.top=a(l._measuredTop)+r,C.width=a(l._measuredWidth-l._borderLeftWidth-l._borderRightWidth)+r,C.height=a(l._measuredHeight-l._borderTopWidth-l._borderBottomWidth)+r,l._markedForLayout=!1,l.fireEvent("postlayout"));return this._computedSize=x},_getWidth:function(e,t){return!n(t)&&2>n(e.left)+n(e.center&&e.center.x)+n(e.right)&&(t=e._defaultWidth),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getWidth(e._parent,e._parent.width)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_getHeight:function(e,t){return!n(t)&&2>n(e.top)+n(e.center&&e.center.y)+n(e.bottom)&&(t=e._defaultHeight),t===i.INHERIT?e._parent._parent?e._parent._parent._layout._getHeight(e._parent,e._parent.height)===i.SIZE?i.SIZE:i.FILL:i.FILL:t},_isDependentOnParent:function(e){var t=e._layoutCoefficients;return!isNaN(t.width.x1)&&0!==t.width.x1||!isNaN(t.height.x1)&&0!==t.height.x1||0!==t.left.x1||0!==t.top.x1},_doAnimationLayout:function(e,t){var i=e._parent._measuredWidth,o=e._parent._measuredHeight,n=t.width.x1*i+t.width.x2,r=t.height.x1*o+t.height.x2;return{width:n,height:r,left:t.left.x1*i+t.left.x2*n+t.left.x3,top:t.top.x1*o+t.top.x2*r+t.top.x3}},_measureNode:function(e,t,o,n){e._needsMeasuring=!1;for(var r,a,s,l,d,_,c,u,h,f,p,y,g,v=n.getValueType,m=n.computeValue,w=n._getWidth(e,t.width),I=v(w),b=m(w,I),T=t._minWidth,E=v(T),C=m(T,E),x=n._getHeight(e,t.height),S=v(x),A=m(x,S),k=t._minHeight,N=v(k),L=m(k,N),F=t.left,U=v(F),O=m(F,U),V=t.center&&t.center.x,R=v(V),P=m(V,R),D=t.right,M=v(D),z=m(D,M),W=t.top,B=v(W),H=m(W,B),G=t.center&&t.center.y,q=v(G),Y=m(G,q),j=t.bottom,X=v(j),$=m(j,X),Z=o.sandboxWidth,K=o.sandboxHeight,J=[[I,b,U,O,R,P,M,z],[S,A,B,H,q,Y,X,$]],Q=0;2>Q;Q++)l=J[Q],d=l[0],_=l[1],c=l[2],u=l[3],h=l[4],f=l[5],p=l[6],y=l[7],r=a=0,d===i.SIZE?r=a=0/0:d===i.FILL?(r=1,"%"===c?r-=u:"#"===c?a=-u:"%"===p?r-=y:"#"===p&&(a=-y)):"%"===d?r=_:"#"===d?a=_:"%"===c?"%"===h?r=2*(f-u):"#"===h?(r=-2*u,a=2*f):"%"===p?r=1-u-y:"#"===p&&(r=1-u,a=-y):"#"===c?"%"===h?(r=2*f,a=-2*u):"#"===h?a=2*(f-u):"%"===p?(r=1-y,a=-u):"#"===p&&(r=1,a=-y-u):"%"===h?"%"===p?r=2*(y-f):"#"===p&&(r=-2*f,a=2*y):"#"===h&&("%"===p?(r=2*y,a=-2*f):"#"===p&&(a=2*(y-f))),o[g=0===Q?"width":"height"].x1=r,o[g].x2=a;J={minWidth:[E,C,U,O,R,P,M,z],minHeight:[N,L,B,H,q,Y,X,$]};for(Q in J)l=J[Q],d=l[0],_=l[1],c=l[2],u=l[3],h=l[4],f=l[5],p=l[6],y=l[7],r=a=s=0,d===i.SIZE?r=a=0/0:d===i.FILL?(r=1,"%"===c?r-=u:"#"===c?a=-u:"%"===p?r-=y:"#"===p&&(a=-y)):"%"===d?r=_:"#"===d?a=_:r=a=s=void 0,o[Q].x1=r,o[Q].x2=a,o[Q].x3=s;for(J=[[U,O,R,P,M,z],[B,H,q,Y,X,$]],Q=0;2>Q;Q++){if(l=J[Q],c=l[0],u=l[1],h=l[2],f=l[3],p=l[4],y=l[5],r=a=s=0,"%"===c)r=u;else if("#"===c)s=u;else if("%"===h)r=f,a=-.5;else if("#"===h)a=-.5,s=f;else if("%"===p)r=1-y,a=-1;else if("#"===p)r=1,a=-1,s=-y;else switch("left"===Q?n._defaultHorizontalAlignment:n._defaultVerticalAlignment){case"center":r=.5,a=-.5;break;case"end":r=1,a=-1}o[g=0===Q?"left":"top"].x1=r,o[g].x2=a,o[g].x3=s}Z.x1="%"===M?z:0,Z.x2="#"===M?z:0,K.x1="%"===X?$:0,K.x2="#"===X?$:0},_defaultHorizontalAlignment:"center",_defaultVerticalAlignment:"center"})});