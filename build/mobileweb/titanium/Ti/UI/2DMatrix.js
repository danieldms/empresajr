define(["Ti/_/declare","Ti/_/Evented","Ti/_/lang","Ti/Platform"],function(e,t,i,o){function a(e,t,i){var o=0==t?1:0,a=2==t?1:2,r=0==e?1:0,l=2==e?1:2;return i[r][o]*i[l][a]-i[r][a]*i[l][o]}function r(e,t,i,o,a,r,l,n){return{a:e.a*t+e.b*o,b:e.a*i+e.b*a,c:e.c*t+e.d*o,d:e.c*i+e.d*a,tx:e.a*r+e.b*l+e.tx,ty:e.c*r+e.d*l+e.ty,rotation:e.rotation+(0|n)}}var l,n="gecko"===o.runtime,s=function(e){return n?e+"px":e};return l=e("Ti.UI.2DMatrix",t,{properties:{a:1,b:0,c:0,d:1,tx:0,ty:0,rotation:0},constructor:function(e){e&&require.mix(this,e)},invert:function(){var e=0,t=0,i=[[this.a,this.b,this.tx],[this.c,this.d,this.ty],[0,0,1]],o=i,n=this.a*a(0,0,i)-this.b*a(0,1,i)+this.tx*a(0,2,i);if(Math.abs(n)>1e-10)for(n=1/n;3>t;t++)for(;3>e;e++)o[t][e]=a(e,t,i)*n,1==(e+t)%2&&(o[t][e]=-o[t][e]);return new l(r(this,o[0][0],o[0][1],o[1][0],o[1][1],o[0][2],o[1][2]))},multiply:function(e){return new l(r(this,e.a,e.b,e.c,e.d,e.tx,e.ty,e.rotation))},rotate:function(e){return new l({a:this.a,b:this.b,c:this.c,d:this.d,tx:this.tx,ty:this.ty,rotation:this.rotation+e})},scale:function(e,t){return new l(r(this,e,0,0,i.val(t,e),0,0))},translate:function(e,t){return new l(r(this,1,0,0,1,e,t))},toCSS:function(){for(var e=0,t=[this.a,this.b,this.c,this.d,this.tx,this.ty];6>e;e++)t[e]=t[e].toFixed(6),e>4&&(t[e]=s(t[e]));return"matrix("+t.join(",")+") rotate("+this.rotation+"deg)"}})});