define(["Ti/_/declare","Ti/_/lang"],function(e,t){var i,o,n=50,r=Math.PI/6,a=.5,s=!1;return t.setObject("Ti._.Gestures.Swipe",{processTouchStartEvent:function(e){1==e.touches.length&&1==e.changedTouches.length?(s=!1,i={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY},o=Date.now()):i=null},processTouchEndEvent:function(e){if(0===e.touches.length&&1===e.changedTouches.length&&i){var t,l,d,c=e.changedTouches[0].clientX,u=e.changedTouches[0].clientY,_=Math.abs(i.x-c),h=Math.abs(i.y-u),f=Math.sqrt(Math.pow(i.x-c,2)+Math.pow(i.y-u,2));if(!s&&(s=f>n),s&&(t=n>=f||0===_||0===h?!0:_>h?r>Math.atan(h/_):r>Math.atan(_/h),t&&(l=_>h?i.x-c>0?"left":"right":0>i.y-u?"down":"up",d=Math.abs(f/(Date.now()-o)),d>a)))return{swipe:[{x:c,y:u,direction:l}]}}i=null},processTouchCancelEvent:function(){i=null}})});