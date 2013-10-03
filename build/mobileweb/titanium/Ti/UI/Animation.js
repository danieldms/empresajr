define(["Ti/_/declare","Ti/_/Evented","Ti/_/style","Ti/UI"],function(e,t,i,o){function r(){o._layoutInProgress?u.once(o,"postlayout",function(){requestAnimationFrame(a)}):requestAnimationFrame(a)}function a(){var e,t,i,o,a,n,l,c,u,f,h,y,p,w=_();s=0;for(e in E)for(t=E[e],a=0;t.length>a;a++)if(i=t[a],!i.paused){if(f=i.duration?Math.min(1,(w-i.ts)/i.duration):1,h=d[i.curve](i.forward?f:1-f),o=i.elem,o._isAttachedToActiveWin())for(prop in i.props){if(p=i.props[prop],c=p[0],u=p[1],1===f&&(y=i.forward?u:c),"transform"===prop){if(1!==f){for(y=[],l=c.length,n=0;l>n;n++)(12>n||n>14)&&(y[n]=c[n]+(u[n]-c[n])*h);s=1}16===y.length?(n=y.splice(12),y="matrix3d("+y.join(",")+") rotate3d("+n.join(",")+"deg)"):(n=y.pop(),y="matrix("+y.join(",")+") rotate("+n+"deg)"),prop=C}else if(g[prop]){if(1!==f){for(y=[],n=0;4>n;n++)y[n]=Math.floor(c[n]+(u[n]-c[n])*h);s=1}y="rgba("+y.join(",")+")"}else v[prop]&&(1!==f&&(y=c+(u-c)*h,s=1),y="opacity"===prop?y:y+"px");i.prev!==y&&(o.domNode.style[prop]=y),i.prev=y}1===f&&(i.ts=w,i.duration&&i.reverse&&i.forward?(i.forward=0,s=1):i.repeat-->0?s=i.forward=1:(t.splice(a--,1),i.promise.resolve(),t.length||delete E[e]))}s&&r()}function n(e){var t,i,o,r;if(e=e.trim().toLowerCase(),"#"===e.charAt(0))i=4==e.length?4:8,isNaN(e=Number("0x"+e.substring(1)))||(o=(1<<i)-1,r=4===i?17:1,r=[(e>>2*i&o)*r,(e>>i&o)*r,(e&o)*r,1]);else if(t=e.match(w))for(r=t[1].split(/\s*,\s*/),t=0;3>t;)r[t++]|=0;else k&&(r=k[e]);return r?(r[3]=isNaN(t=parseFloat(r[3]))?1:Math.min(Math.max(t,0),1),r):void 0}function l(e,t,i,o){var r,a,n,l,s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];if(e)if(r=e[1],a=e[2].split(","),n=a.length,r&&16===n)for(l=0;12>l;l++)s[l]=a[l];else r||6!==n||(s[0]=a[0],s[1]=a[1],s[4]=a[2],s[5]=a[3],s[3]=a[4],s[7]=a[5]);if(t)if(r=t[1],a=t[2].split(","),n=a.length,r&&4===n)for(l=0;4>l;l++)s[12+l]=a[l];else r||1!==n||(s[14]=1,s[15]=a[0]);return i=2===o?[i.a,i.b,0,i.tx,i.c,i.d,0,i.ty,0,0,1,0,0,0,1,i.rotation]:[i.m11,i.m12,i.m13,i.m14,i.m21,i.m22,i.m23,i.m24,i.m31,i.m32,i.m33,i.m34,i.rotationX,i.rotationY,i.rotationZ,i.rotation],[s,i]}for(var s,d=[function(e){return e*=2,1>e?Math.pow(e,2)/2:-1*(--e*(e-2)-1)/2},function(e){return Math.pow(e,2)},function(e){return-1*e*(e-2)},function(e){return e}],c=window,_=Date.now,u=require.on,f=0,h=["ms","moz","webkit","o"],y=h.length,p={autoreverse:1,bottom:1,center:1,curve:1,delay:1,duration:1,repeat:1,right:1,visible:1,zIndex:1},g={backgroundColor:1,color:1},v={height:1,left:1,opacity:1,top:1,width:1},w=/^rgba?\(([\s\.,0-9]+)\)/,m=/3d/,I=/^Ti\.UI\.(2|3)DMatrix$/,b=/matrix(3d)?\(([^\)]*)/,T=/rotate(3d)?\(([^\)]*)/,E={},C=i.discover("transform"),k=require(require.config.ti.colorsModule),A=e("Ti.UI.Animation",t,{properties:{autoreverse:void 0,backgroundColor:void 0,bottom:void 0,center:void 0,color:void 0,curve:void 0,delay:void 0,duration:void 0,height:void 0,left:void 0,opacity:void 0,repeat:void 0,right:void 0,top:void 0,transform:void 0,visible:void 0,width:void 0,zIndex:void 0}});--y>=0&&!c.requestAnimationFrame;)c.requestAnimationFrame=c[h[y]+"RequestAnimationFrame"];return c.requestAnimationFrame||(c.requestAnimationFrame=function(e){var t=_(),i=Math.max(0,16-(t-f)),o=window.setTimeout(function(){e(t+i)},i);return f=t+i,o}),A._play=function(e,t){function o(){var o,a,w,C,k,A,S,x,N,F,L={},O=e._parent._layout.calculateAnimation(e,t);for(w in y)if(A=y[w],!p[w]&&void 0!==A){for(o=0;h.length>o;o++)delete h[o].props[w],require.isEmpty(h[o].props)&&h.splice(o--,1);if(C=i.get(e.domNode,w),g[w])C=n(C),A=n(A),(A>C||C>A)&&(L[w]=[C,A]);else if(v[w])isNaN(C=parseFloat(C))&&"opacity"===w&&(C=1),A=w in O?O[w]:A,C!==A&&(L[w]=[C,A]);else if("transform"===w&&(k=A.declaredClass.match(I))){if(k=0|k[1],N=C.match(b),F=C.match(T),m.test(C)||3===k)S=l(N,F,A,k),C=S[0],A=S[1];else if(2===k){if(C=[1,0,0,1,0,0,0],N)for(x=N[2].split(","),a=Math.min(6,x.length),o=0;a>o;o++)C[o]=parseFloat(x[o]);F&&(x=F[2].split(","),x.length&&(C[6]=parseFloat(x[0]))),A=[A.a,A.b,A.c,A.d,A.tx,A.ty,A.rotation],S=[C,A]}(A>C||C>A)&&(L[w]=S)}}E[u].push({id:f,elem:e,promise:c,props:L,ts:_(),reverse:!!y.autoreverse,forward:1,curve:Math.max(0,Math.min(d.length-1,0|y.curve)),duration:0|y.duration,repeat:!!y.repeat}),t.fireEvent("start"),s||(s=1,r())}function a(){for(var e=E[u],t=0,i=e&&e.length;i>t;t++)if(e[t].id===f)return e[t]}var c=new require.Promise,u=e.widgetId,f=0|1e9*Math.random(),h=E[u]=E[u]||[],y=t.properties.__values__,w=0|y.delay,C=!!y.visible;return w?setTimeout(o,w):o(),c.source=e,c.animation=t,c.pause=function(){var e=a();return e=!!e&&(e.paused||(e.paused=_())),t.fireEvent("pause"),e},c.resume=function(){var e=a();return e&&(e.paused&&(e.ts+=_()-e.paused),s||(s=1,r())),e=!!e&&!(e.paused=0),t.fireEvent("resume"),e},c.cancel=function(e){for(var o,r,a,n=E[u],l=0,s=n&&n.length,d=!1;s>l;l++)if(n[l].id===f){if(o=n[l],e){a=o.elem.domNode;for(r in o.props)s=o.props[r][0],i.set(a,r,v[r]&&"opacity"!==r?s+"px":s)}n.splice(l,1),n.length||delete E[u],d=!0;break}return t.fireEvent("cancel"),d},c.then(function(){void 0!==y.visible&&(e.visible=C),void 0!==y.zIndex&&(e.zIndex=zIndex),t.fireEvent("complete")})},A});