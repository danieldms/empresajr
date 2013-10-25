define(["Ti/_","Ti/_/lang"],function(e,t){function i(e,t){for(var i,o,a,r,l,_,c,u,h=[],f=[{cls:0,refs:[]}],p={},g=1,y=e.length,v=0;y>v;++v){if(a=e[v],!a)throw Error('Unknown base class for "'+t+'" ['+v+"]");if(s(a,"Object"))a=e[v]=n(a);else if(!s(a,"Function"))throw Error('Base class not a function for "'+t+'" ['+v+"]");for(o=a._meta?a._meta.bases:[a],r=0,i=o.length-1;i>=0;--i)l=o[i].prototype,l.hasOwnProperty("declaredClass")||(l.declaredClass="uniqName_"+d++),c=l.declaredClass,p.hasOwnProperty(c)||(p[c]={count:0,refs:[],cls:o[i]},++g),_=p[c],r&&r!==_&&(_.refs.push(r),++r.count),r=_;++r.count,f[0].refs.push(r)}for(;f.length;){for(r=f.pop(),h.push(r.cls),--g;u=r.refs,1==u.length;){if(r=u[0],!r||--r.count){r=0;break}h.push(r.cls),--g}if(r)for(v=0,y=u.length;y>v;++v)r=u[v],--r.count||f.push(r)}if(g)throw Error("Can't build consistent linearization for \""+t+'"');return a=e[0],h[0]=a?a._meta&&a===h[h.length-a._meta.bases.length]?a._meta.bases.length:1:0,h}function o(e,i){return function(){var o,n,a,r,l=arguments,d=l,u=l[0],h=e.length,f=this.declaredClass;if(f&&(_[f]||(_[f]=0),this.widgetId=f+":"+_[f]++),i&&(u&&u.preamble||this.preamble))for(r=Array(e.length),r[0]=l,n=0;(u=l[0])&&(o=u.preamble)&&(l=o.apply(this,l)||l),o=e[n].prototype,o=o.hasOwnProperty("preamble")&&o.preamble,o&&(l=o.apply(this,l)||l),++n!==h;)r[n]=l;for(n=h-1;n>=0;--n)o=e[n],a=o._meta,a&&(o=a.ctor,t.mixProps(this,a.hidden)),s(o,"Function")&&o.apply(this,r?r[n]:l);if(s(u,"Object")){o=this.constants;for(n in u)u.hasOwnProperty(n)&&((o&&n in o?o.__values__:this)[n]=u[n])}this.toString===c.toString&&(this.toString=function(){return"[object "+(f?f.replace(/\./g,""):"Object")+"]"}),o=this.postscript,o&&o.apply(this,d)}}function n(e){var t=Function();return l(t.prototype,e),t._meta={bases:[t],hidden:e},t}function a(e,t){for(var i in t)t.hasOwnProperty(i)&&!/^(constructor|properties|constants|__values__)$/.test(i)&&(s(t[i],"Function")&&(t[i].nom=name),e[i]=t[i]);return e}function r(e,r,d){s(e,"String")||(d=r,r=e,e=""),d=d||{};var _,u,h,f=[d.constructor],p=1,g={},y=s(r);if("Array"===y?(f=i(r,e),r=f[p=f.length-f[0]]):"Function"===y?(h=r._meta,f=f.concat(h?h.bases:r)):"Object"===y?f[1]=r=n(r):r=0,r)for(u=p-1;_=Function(),_.prototype=r.prototype,g=new _,u;--u)h=f[u],(h._meta?a:l)(g,h.prototype),_=Function(),_.superclass=r,_.prototype=g,r=g.constructor=_;return a(g,d),h=d.constructor,h!==c.constructor&&(h.nom="constructor",g.constructor=h),l(f[0]=_=o(f,h),{_meta:{bases:f,hidden:d,ctor:d.constructor},superclass:r&&r.prototype,extend:function(e){return a(this.prototype,e),this},prototype:g}),l(g,{constructor:_,isInstanceOf:function(e){for(var t=this.constructor._meta.bases,i=0,o=t.length;o>i;++i)if(t[i]===e)return!0;return this instanceof e}}),e&&(g.declaredClass=e,t.setObject(e,_)),_}var s=require.is,l=require.mix,d=0,_={},c=Object.prototype;return e.declare=r});