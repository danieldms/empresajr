define(["Ti/_/declare","Ti/_/lang"],function(e,t){function i(e){var t;return a?(t=o(e),a=null,{draggingcancel:t}):void 0}function o(e){var t=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY,o=t-a.x,n=i-a.y;return[{x:t,y:i,distanceX:o,distanceY:n,distance:Math.sqrt(Math.pow(o,2)+Math.pow(n,2))}]}var a,n=25;return t.setObject("Ti._.Gestures.Drag",{processTouchStartEvent:function(e){if(1==e.touches.length&&1==e.changedTouches.length){var t,n;return a={x:t=e.changedTouches[0].clientX,y:n=e.changedTouches[0].clientY},{draggingstart:o(e)}}return a?i(e):void 0},processTouchEndEvent:function(e){if(a){var t,r=Math.sqrt(Math.pow(e.changedTouches[0].clientX-a.x,2)+Math.pow(e.changedTouches[0].clientY-a.y,2));return 0===e.touches.length&&1===e.changedTouches.length&&r>n?(t=o(e),a=null,{draggingend:t}):i(e)}},processTouchMoveEvent:function(e){return a?1==e.touches.length&&1==e.changedTouches.length?{dragging:o(e)}:i(e):void 0},processTouchCancelEvent:function(e){return a&&i(e)}})});