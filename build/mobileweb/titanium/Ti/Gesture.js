define(["Ti/_/Evented","Ti/_/lang","Ti/UI","Ti/_/ready"],function(e,t,i,o){function l(){var e=!!(window.innerWidth&&window.innerWidth>window.innerHeight);return c.constants.__values__.orientation=e?i.LANDSCAPE_LEFT:i.PORTRAIT,c.constants.__values__.landscape=e,c.constants.__values__.portrait=!e,c.orientation}function a(e){var t=null,o=Math.abs(e.beta||0|e.y),l=Math.abs(e.gamma||0|e.x);5>o&&l>170&&(t=i.FACE_DOWN),5>o&&5>l&&(t=i.FACE_UP),o>50&&0>o&&s!=t&&(t=i.UPSIDE_PORTRAIT),null!==t&&s!==t&&c.fireEvent("orientationchange",{orientation:s=t,source:e.source})}var r=window,n=require.on,s=null,d=Date.now(),_={},c=t.setObject("Ti.Gesture",e,{_updateOrientation:function(){l(),s!==c.orientation&&c.fireEvent("orientationchange",{orientation:s=c.orientation})},isLandscape:function(){return c.landscape},isPortrait:function(){return c.portrait},constants:{portrait:!1,landscape:!1,orientation:i.UNKNOWN}});return o(function(){l()}),n(r,"MozOrientation",a),n(r,"deviceorientation",a),n(r,"devicemotion",function(e){var t,i,o,l,a=e.acceleration||e.accelerationIncludingGravity,r=a&&{x:a.x,y:a.y,z:a.z,source:e.source};r&&(void 0!==_.x&&(t=Math.abs(_.x-r.x)>10,i=Math.abs(_.y-r.y)>10,o=Math.abs(_.z-r.z)>10,(t&&(i||o)||i&&o)&&(l=Date.now(),(r.timestamp=l-d)>300&&(d=l,c.fireEvent("shake",r)))),_=r)}),c});