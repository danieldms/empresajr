define(["Ti/_/Evented","Ti/_/lang"],function(e,t){function i(e){if(!r){var t=localStorage.getItem(n);r=require.is(t,"String")&&JSON.parse(t)||{}}return e?r[e]:r}function o(e,o,a){var l=i(e);return void 0===l?t.val(a,null):s[o]?s[o](l):l}function a(e,t,o){e&&(i(),void 0===o||null===o?delete r[e]:r[e]=s[t]?s[t](o):o,localStorage.setItem(n,JSON.stringify(r)))}var l,r,n="ti:properties",s={Bool:function(e){return!!e},Double:function(e){return parseFloat(e)},Int:function(e){return parseInt(e)},List:function(e){return require.is(e,"Array")?e:[e]},Object:function(e){return e},String:function(e){return""+e}},d=t.setObject("Ti.App.Properties",e,{hasProperty:function(e){return!!i(e)},listProperties:function(){var e,t=i(),o=[];for(e in t)o.push(e);return o},removeProperty:function(e){a(e)}});for(l in s)(function(e){d["get"+e]=function(t,i){return o(t,e,i)},d["set"+e]=function(t,i){a(t,e,i)}})(l);return d});