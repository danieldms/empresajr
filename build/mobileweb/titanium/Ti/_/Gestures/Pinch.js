define(["Ti/_/declare","Ti/_/lang"],function(e,t){function i(e){if(o&&2==o.length&&2==e.touches.length){var t=Math.sqrt(Math.pow(e.touches[0].clientX-e.touches[1].clientX,2)+Math.pow(e.touches[0].clientY-e.touches[1].clientY,2)),i=0,a=Date.now();return r&&(i=Math.abs(r/n-t/n)/((a-l)/1e3)),r=t,l=a,{pinch:[{scale:t/n,velocity:i}]}}}var o=null,a=null,n=null,r=null,l=null,s=100;return t.setObject("Ti._.Gestures.Pinch",{processTouchStartEvent:function(e){var t=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY,r=e.touches.length,l=e.changedTouches.length;1==r&&1==l?(o=[{x:t,y:i}],a=setTimeout(function(){o=null},s)):2==r&&1==l?(clearTimeout(a),o&&(o.push({x:t,y:i}),n=Math.sqrt(Math.pow(o[0].x-o[1].x,2)+Math.pow(o[0].y-o[1].y,2)))):2==r&&2==l?(o=[{x:t,y:i},{x:e.changedTouches[1].clientX,y:e.changedTouches[1].clientY}],n=Math.sqrt(Math.pow(o[0].x-o[1].x,2)+Math.pow(o[0].y-o[1].y,2))):o=null},processTouchEndEvent:function(e){var t=i(e);return o=null,t},processTouchMoveEvent:function(e){return i(e)},processTouchCancelEvent:function(){o=null}})});