define(["Ti/_/encoding","Ti/_/Evented","Ti/_/lang","Ti/Blob"],function(e,t,i,o){function n(e,t){for(var i=[],o=0,n=8*e.length;n>o;o+=8)i[o>>5]|=(255&e.charCodeAt(o/8))<<(t?t-o:o)%32;return i}function r(e,t){for(var i="0123456789abcdef",o=0,n=4*e.length,r=[];n>o;o++)r.push(i.charAt(15&e[o>>2]>>8*((t?t-o:o)%4)+4)+i.charAt(15&e[o>>2]>>8*((t?t-o:o)%4)));return r.join("")}function a(e,t){return e=n(e,24),e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t,e}function s(e,t){var i=(65535&e)+(65535&t),o=(e>>16)+(t>>16)+(i>>16);return o<<16|65535&i}function l(e,t){return e<<t|e>>>32-t}function d(e,t,i,o,n,r){return s(l(s(s(t,e),s(o,r)),n),i)}function c(e,t,i,o,n,r,a){return d(t&i|~t&o,e,t,n,r,a)}function _(e,t,i,o,n,r,a){return d(t&o|i&~o,e,t,n,r,a)}function u(e,t,i,o,n,r,a){return d(t^i^o,e,t,n,r,a)}function h(e,t,i,o,n,r,a){return d(i^(t|~o),e,t,n,r,a)}function f(e,t,i,o){return 20>e?t&i|~t&o:40>e?t^i^o:60>e?t&i|t&o|i&o:t^i^o}function p(e){return 20>e?1518500249:40>e?1859775393:60>e?-1894007588:-899497514}function g(e,t){return e>>>t|e<<32-t}function v(e){return g(e,7)^g(e,18)^e>>>3}function y(e){return g(e,17)^g(e,19)^e>>>10}function m(e){return e&&"Ti.Blob"===e.declaredClass}function w(t){return atob(e.utf8encode(t))}function I(e){return m(e)?e._isBinary?w(e._data):e._data:e}var T=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998];return i.setObject("Ti.Utils",t,{base64decode:function(e){return m(e)&&e._isBinary?e:new o({data:w(e._data||e)})},base64encode:function(t){return m(t)&&t._isBinary?t:new o({data:e.utf8decode(btoa(t._data||t))})},md5HexDigest:function(t){var i,t=e.utf8encode(I(t)),o=8*t.length,a=1732584193,l=-271733879,d=-1732584194,f=271733878,p=0;for(t=n(t),t[o>>5]|=128<<o%32,t[(o+64>>>9<<4)+14]=o,i=t.length;i>p;p+=16){var g=a,v=l,y=d,m=f;a=c(a,l,d,f,t[p+0],7,-680876936),f=c(f,a,l,d,t[p+1],12,-389564586),d=c(d,f,a,l,t[p+2],17,606105819),l=c(l,d,f,a,t[p+3],22,-1044525330),a=c(a,l,d,f,t[p+4],7,-176418897),f=c(f,a,l,d,t[p+5],12,1200080426),d=c(d,f,a,l,t[p+6],17,-1473231341),l=c(l,d,f,a,t[p+7],22,-45705983),a=c(a,l,d,f,t[p+8],7,1770035416),f=c(f,a,l,d,t[p+9],12,-1958414417),d=c(d,f,a,l,t[p+10],17,-42063),l=c(l,d,f,a,t[p+11],22,-1990404162),a=c(a,l,d,f,t[p+12],7,1804603682),f=c(f,a,l,d,t[p+13],12,-40341101),d=c(d,f,a,l,t[p+14],17,-1502002290),l=c(l,d,f,a,t[p+15],22,1236535329),a=_(a,l,d,f,t[p+1],5,-165796510),f=_(f,a,l,d,t[p+6],9,-1069501632),d=_(d,f,a,l,t[p+11],14,643717713),l=_(l,d,f,a,t[p+0],20,-373897302),a=_(a,l,d,f,t[p+5],5,-701558691),f=_(f,a,l,d,t[p+10],9,38016083),d=_(d,f,a,l,t[p+15],14,-660478335),l=_(l,d,f,a,t[p+4],20,-405537848),a=_(a,l,d,f,t[p+9],5,568446438),f=_(f,a,l,d,t[p+14],9,-1019803690),d=_(d,f,a,l,t[p+3],14,-187363961),l=_(l,d,f,a,t[p+8],20,1163531501),a=_(a,l,d,f,t[p+13],5,-1444681467),f=_(f,a,l,d,t[p+2],9,-51403784),d=_(d,f,a,l,t[p+7],14,1735328473),l=_(l,d,f,a,t[p+12],20,-1926607734),a=u(a,l,d,f,t[p+5],4,-378558),f=u(f,a,l,d,t[p+8],11,-2022574463),d=u(d,f,a,l,t[p+11],16,1839030562),l=u(l,d,f,a,t[p+14],23,-35309556),a=u(a,l,d,f,t[p+1],4,-1530992060),f=u(f,a,l,d,t[p+4],11,1272893353),d=u(d,f,a,l,t[p+7],16,-155497632),l=u(l,d,f,a,t[p+10],23,-1094730640),a=u(a,l,d,f,t[p+13],4,681279174),f=u(f,a,l,d,t[p+0],11,-358537222),d=u(d,f,a,l,t[p+3],16,-722521979),l=u(l,d,f,a,t[p+6],23,76029189),a=u(a,l,d,f,t[p+9],4,-640364487),f=u(f,a,l,d,t[p+12],11,-421815835),d=u(d,f,a,l,t[p+15],16,530742520),l=u(l,d,f,a,t[p+2],23,-995338651),a=h(a,l,d,f,t[p+0],6,-198630844),f=h(f,a,l,d,t[p+7],10,1126891415),d=h(d,f,a,l,t[p+14],15,-1416354905),l=h(l,d,f,a,t[p+5],21,-57434055),a=h(a,l,d,f,t[p+12],6,1700485571),f=h(f,a,l,d,t[p+3],10,-1894986606),d=h(d,f,a,l,t[p+10],15,-1051523),l=h(l,d,f,a,t[p+1],21,-2054922799),a=h(a,l,d,f,t[p+8],6,1873313359),f=h(f,a,l,d,t[p+15],10,-30611744),d=h(d,f,a,l,t[p+6],15,-1560198380),l=h(l,d,f,a,t[p+13],21,1309151649),a=h(a,l,d,f,t[p+4],6,-145523070),f=h(f,a,l,d,t[p+11],10,-1120210379),d=h(d,f,a,l,t[p+2],15,718787259),l=h(l,d,f,a,t[p+9],21,-343485551),a=s(a,g),l=s(l,v),d=s(d,y),f=s(f,m)}return r([a,l,d,f])},sha1:function(t){var i,o,n,t=e.utf8encode(I(t)),d=1732584193,c=-271733879,_=-1732584194,u=271733878,h=-1009589776,g=0,v=Array(80);for(t=a(t,8*t.length),n=t.length;n>g;g+=16){var y=d,m=c,w=_,T=u,b=h;for(i=0;80>i;i++)v[i]=16>i?t[g+i]:l(v[i-3]^v[i-8]^v[i-14]^v[i-16],1),o=s(s(l(d,5),f(i,c,_,u)),s(s(h,v[i]),p(i))),h=u,u=_,_=l(c,30),c=d,d=o;d=s(d,y),c=s(c,m),_=s(_,w),u=s(u,T),h=s(h,b)}return r([d,c,_,u,h],3)},sha256:function(t){var i,o,n,l,t=e.utf8encode(I(t)),d=1779033703,c=-1150833019,_=1013904242,u=-1521486534,h=1359893119,f=-1694144372,p=528734635,m=1541459225,w=0,b=Array(64);for(t=a(t,8*t.length),o=t.length;o>w;w+=16){var E=d,C=c,A=_,S=u,k=h,x=f,N=p,L=m;for(i=0;64>i;i++)b[i]=16>i?t[w+i]:s(s(s(y(b[i-2]),b[i-7]),v(b[i-15])),b[i-16]),n=s(s(s(s(m,g(h,6)^g(h,11)^g(h,25)),h&f^~h&p),T[i]),b[i]),l=s(g(d,2)^g(d,13)^g(d,22),d&c^d&_^c&_),m=p,p=f,f=h,h=s(u,n),u=_,_=c,c=d,d=s(n,l);d=s(d,E),c=s(c,C),_=s(_,A),u=s(u,S),h=s(h,k),f=s(f,x),p=s(p,N),m=s(m,L)}return r([d,c,_,u,h,f,p,m],3)}})});