define(function(){function e(e){if(!(a||e&&"readystatechange"==e.type&&!r[o.readyState])){for(;s.length;)s.shift()();a=1}}function t(){r[o.readyState]?e():setTimeout(t,30)}function i(e,t,i){var o,n,r;if(require.is(e,"Number")||(i=t,t=e,e=1e3),o=i?function(){i.call(t)}:t,a)o();else{for(o.priority=e,n=0,r=s.length;r>n&&e>=s[n].priority;n++);s.splice(n,0,o)}}var o=document,n=require.on,r={loaded:1,complete:1},a=!!r[o.readyState],s=[];return a||(s.concat([n(o,"DOMContentLoaded",e),n(window,"load",e)]),"onreadystatechange"in o?s.push(require.on(o,"readystatechange",e)):t()),i.load=function(e,t,o){i(o)},i});