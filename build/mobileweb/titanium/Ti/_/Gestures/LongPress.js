define(["Ti/_/declare","Ti/_/lang"],function(e,t){var i=null,o=null,n=500,a=25;return t.setObject("Ti._.Gestures.LongPress",{processTouchStartEvent:function(e,t){var a=e.changedTouches,r=a[0].clientX,l=a[0].clientY;clearTimeout(i),1==e.touches.length&&1==e.changedTouches.length&&(o={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY},i=setTimeout(function(){require("Ti/UI")._fireGestureEvents({longpress:[{x:r,y:l}]},t)},n))},processTouchEndEvent:function(e){0===e.touches.length&&1===e.changedTouches.length&&clearTimeout(i)},processTouchMoveEvent:function(e){(!o||Math.abs(o.x-e.changedTouches[0].clientX)>a||Math.abs(o.y-e.changedTouches[0].clientY)>a)&&clearTimeout(i)},processTouchCancelEvent:function(){clearTimeout(i)}})});