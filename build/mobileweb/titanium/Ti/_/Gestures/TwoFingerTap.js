define(["Ti/_/declare","Ti/_/lang"],function(e,t){var i=null,o=null,n=null,r=100,a=25;return t.setObject("Ti._.Gestures.TwoFingerTap",{processTouchStartEvent:function(e){var t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,s=e.touches.length,l=e.changedTouches.length;1==s&&1==l?(i=[{x:t,y:a}],n=setTimeout(function(){i=null,o=null},r)):2==s&&1==l?(clearTimeout(n),i&&i.push({x:t,y:a})):2==s&&2==l?i=[{x:t,y:a},{x:e.changedTouches[1].clientX,y:e.changedTouches[1].clientY}]:(i=null,o=null)},processTouchEndEvent:function(e){var t,s,l,d=e.changedTouches,c=d[0].clientX,u=d[0].clientY,_=e.touches.length,h=d.length,f={};if(1==_&&1==h)o=[{x:c,y:u}],n=setTimeout(function(){i=null,o=null},r);else if(0!==_||1!==h&&2!==h)i=null,o=null;else if(i&&2===i.length){for(o||(o=[]),t=0;h>t;t++)o.push({x:d[t].clientX,y:d[t].clientY});return 2===o.length&&(s=a>Math.abs(i[0].x-o[0].x)&&a>Math.abs(i[0].y-o[0].y),l=a>Math.abs(i[1].x-o[1].x)&&a>Math.abs(i[1].y-o[1].y),s&&l||(s=a>Math.abs(i[0].x-o[1].x)&&a>Math.abs(i[0].y-o[1].y),l=a>Math.abs(i[1].x-o[0].x)&&a>Math.abs(i[1].y-o[0].y)),s&&l&&(f.twofingertap=[{x:(i[0].x+i[1].x)/2,y:(i[0].y+i[1].y)/2}])),i=null,o=null,f}},processTouchCancelEvent:function(){i=null,o=null}})});