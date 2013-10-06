define(["Ti/_/declare","Ti/_/Evented","Ti/_/style","Ti/UI"],function(e,t,i,o){function a(){o._layoutInProgress?u.once(o,"postlayout",function(){requestAnimationFrame(r)}):requestAnimationFrame(r)}function r(){var e,t,i,o,r,l,n,_,u,y,f,h,p,w=c();s=0;for(e in C)for(t=C[e],r=0;t.length>r;r++)if(i=t[r],!i.paused){if(y=i.duration?Math.min(1,(w-i.ts)/i.duration):1,f=d[i.curve](i.forward?y:1-y),o=i.elem,o._isAttachedToActiveWin())for(prop in i.props){if(p=i.props[prop],_=p[0],u=p[1],1===y&&(h=i.forward?u:_),"transform"===prop){if(1!==y){for(h=[],n=_.length,l=0;n>l;l++)(12>l||l>14)&&(h[l]=_[l]+(u[l]-_[l])*f);s=1}16===h.length?(l=h.splice(12),h="matrix3d("+h.join(",")+") rotate3d("+l.join(",")+"deg)"):(l=h.pop(),h="matrix("+h.join(",")+") rotate("+l+"deg)"),prop=E}else if(g[prop]){if(1!==y){for(h=[],l=0;4>l;l++)h[l]=Math.floor(_[l]+(u[l]-_[l])*f);s=1}h="rgba("+h.join(",")+")"}else v[prop]&&(1!==y&&(h=_+(u-_)*f,s=1),h="opacity"===prop?h:h+"px");i.prev!==h&&(o.domNode.style[prop]=h),i.prev=h}1===y&&(i.ts=w,i.duration&&i.reverse&&i.forward?(i.forward=0,s=1):i.repeat-->0?s=i.forward=1:(t.splice(r--,1),i.promise.resolve(),t.length||delete C[e]))}s&&a()}function l(e){var t,i,o,a;if(e=e.trim().toLowerCase(),"#"===e.charAt(0))i=4==e.length?4:8,isNaN(e=Number("0x"+e.substring(1)))||(o=(1<<i)-1,a=4===i?17:1,a=[(e>>2*i&o)*a,(e>>i&o)*a,(e&o)*a,1]);else if(t=e.match(w))for(a=t[1].split(/\s*,\s*/),t=0;3>t;)a[t++]|=0;else k&&(a=k[e]);return a?(a[3]=isNaN(t=parseFloat(a[3]))?1:Math.min(Math.max(t,0),1),a):void 0}function n(e,t,i,o){var a,r,l,n,s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];if(e)if(a=e[1],r=e[2].split(","),l=r.length,a&&16===l)for(n=0;12>n;n++)s[n]=r[n];else a||6!==l||(s[0]=r[0],s[1]=r[1],s[4]=r[2],s[5]=r[3],s[3]=r[4],s[7]=r[5]);if(t)if(a=t[1],r=t[2].split(","),l=r.length,a&&4===l)for(n=0;4>n;n++)s[12+n]=r[n];else a||1!==l||(s[14]=1,s[15]=r[0]);return i=2===o?[i.a,i.b,0,i.tx,i.c,i.d,0,i.ty,0,0,1,0,0,0,1,i.rotation]:[i.m11,i.m12,i.m13,i.m14,i.m21,i.m22,i.m23,i.m24,i.m31,i.m32,i.m33,i.m34,i.rotationX,i.rotationY,i.rotationZ,i.rotation],[s,i]}for(var s,d=[function(e){return e*=2,1>e?Math.pow(e,2)/2:-1*(--e*(e-2)-1)/2},function(e){return Math.pow(e,2)},function(e){return-1*e*(e-2)},function(e){return e}],_=window,c=Date.now,u=require.on,y=0,f=["ms","moz","webkit","o"],h=f.length,p={autoreverse:1,bottom:1,center:1,curve:1,delay:1,duration:1,repeat:1,right:1,visible:1,zIndex:1},g={backgroundColor:1,color:1},v={height:1,left:1,opacity:1,top:1,width:1},w=/^rgba?\(([\s\.,0-9]+)\)/,I=/3d/,m=/^Ti\.UI\.(2|3)DMatrix$/,b=/matrix(3d)?\(([^\)]*)/,T=/rotate(3d)?\(([^\)]*)/,C={},E=i.discover("transform"),k=require(require.config.ti.colorsModule),A=e("Ti.UI.Animation",t,{properties:{autoreverse:void 0,backgroundColor:void 0,bottom:void 0,center:void 0,color:void 0,curve:void 0,delay:void 0,duration:void 0,height:void 0,left:void 0,opacity:void 0,repeat:void 0,right:void 0,top:void 0,transform:void 0,visible:void 0,width:void 0,zIndex:void 0}});--h>=0&&!_.requestAnimationFrame;)_.requestAnimationFrame=_[f[h]+"RequestAnimationFrame"];return _.requestAnimationFrame||(_.requestAnimationFrame=function(e){var t=c(),i=Math.max(0,16-(t-y)),o=window.setTimeout(function(){e(t+i)},i);return y=t+i,o}),A._play=function(e,t){function o(){var o,r,w,E,k,A,S,x,F,L,N={},U=e._parent._layout.calculateAnimation(e,t);for(w in h)if(A=h[w],!p[w]&&void 0!==A){for(o=0;f.length>o;o++)delete f[o].props[w],require.isEmpty(f[o].props)&&f.splice(o--,1);if(E=i.get(e.domNode,w),g[w])E=l(E),A=l(A),(A>E||E>A)&&(N[w]=[E,A]);else if(v[w])isNaN(E=parseFloat(E))&&"opacity"===w&&(E=1),A=w in U?U[w]:A,E!==A&&(N[w]=[E,A]);else if("transform"===w&&(k=A.declaredClass.match(m))){if(k=0|k[1],F=E.match(b),L=E.match(T),I.test(E)||3===k)S=n(F,L,A,k),E=S[0],A=S[1];else if(2===k){if(E=[1,0,0,1,0,0,0],F)for(x=F[2].split(","),r=Math.min(6,x.length),o=0;r>o;o++)E[o]=parseFloat(x[o]);L&&(x=L[2].split(","),x.length&&(E[6]=parseFloat(x[0]))),A=[A.a,A.b,A.c,A.d,A.tx,A.ty,A.rotation],S=[E,A]}(A>E||E>A)&&(N[w]=S)}}C[u].push({id:y,elem:e,promise:_,props:N,ts:c(),reverse:!!h.autoreverse,forward:1,curve:Math.max(0,Math.min(d.length-1,0|h.curve)),duration:0|h.duration,repeat:!!h.repeat}),t.fireEvent("start"),s||(s=1,a())}function r(){for(var e=C[u],t=0,i=e&&e.length;i>t;t++)if(e[t].id===y)return e[t]}var _=new require.Promise,u=e.widgetId,y=0|1e9*Math.random(),f=C[u]=C[u]||[],h=t.properties.__values__,w=0|h.delay,E=!!h.visible;return w?setTimeout(o,w):o(),_.source=e,_.animation=t,_.pause=function(){var e=r();return e=!!e&&(e.paused||(e.paused=c())),t.fireEvent("pause"),e},_.resume=function(){var e=r();return e&&(e.paused&&(e.ts+=c()-e.paused),s||(s=1,a())),e=!!e&&!(e.paused=0),t.fireEvent("resume"),e},_.cancel=function(e){for(var o,a,r,l=C[u],n=0,s=l&&l.length,d=!1;s>n;n++)if(l[n].id===y){if(o=l[n],e){r=o.elem.domNode;for(a in o.props)s=o.props[a][0],i.set(r,a,v[a]&&"opacity"!==a?s+"px":s)}l.splice(n,1),l.length||delete C[u],d=!0;break}return t.fireEvent("cancel"),d},_.then(function(){void 0!==h.visible&&(e.visible=E),void 0!==h.zIndex&&(e.zIndex=zIndex),t.fireEvent("complete")})},A});