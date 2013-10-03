define(["Ti/_","Ti/API","Ti/_/style"],function(e,t,i){var o=require.is,n={innerHTML:1,className:1,value:1},r={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},a={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},s={set:function(e,t,l){if(2===arguments.length){for(var d in t)s.set(e,d,t[d]);return e}var c=t.toLowerCase(),u=a[c]||t,_=n[u];return"style"!==u||require.is(l,"String")?_||o(l,"Boolean")||o(l,"Function")?(e[t]=l,e):(e.setAttribute(r[c]||t,l),e):i.set(e,l)},remove:function(e,t){return e.removeAttribute(t),e}};return{create:function(e,t,i,n){var r=i?i.ownerDocument:document;return o(e,"String")&&(e=r.createElement(e)),t&&s.set(e,t),i&&this.place(e,i,n),e},attr:s,place:function(e,t){return t.appendChild(e),e},detach:function(e){return e.parentNode&&e.parentNode.removeChild(e)},destroy:function(e){try{var t=e.ownerDocument.createElement("div");t.appendChild(this.detach(e)||e),t.innerHTML=""}catch(i){}},calculateDistance:function(e,t,i,o){return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-o,2))},unitize:function(e){return isNaN(e-0)||e-0!=e?e:e+"px"},computeSize:function(i,n,r){if(o(i,"Number")&&isNaN(i))return 0;var a=require.is(i);if("String"===a){var s=require("Ti/UI");if(i===s.SIZE)r&&(i=void 0);else{var l=parseFloat(i),d=i.match(/.*(%|mm|cm|em|pt|in|px|dp)$/);switch(d=d?d[1]:"px"){case"%":if(n==s.SIZE)r?void 0:s.SIZE;else if(!require.is(n,"Number"))return t.error("Could not compute percentage size/position of element."),void 0;return l/100*n;case"mm":l/=10;case"cm":return.393700787*l*e.dpi;case"em":case"pt":l/=12;case"pc":l/=6;case"in":return l*e.dpi;case"px":return l;case"dp":return l*e.dpi/96}}}else"Number"!==a&&(i=void 0);return i}}});