define({stop:function(e){e&&(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation())},off:function(e){for(var t,e=require.is(e,"Array")?e:[e],i=0,o=e.length;o>i;)(t=e[i++])&&t();e.splice(0)}});