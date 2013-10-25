define(["Ti/_/Evented","Ti/_/lang"],function(e,t){function i(e){"online"===e.type&&!l&&(l=1),"offline"===e.type&&l&&(l=0),a.fireEvent("change",{networkType:a.networkType,networkTypeName:a.networkTypeName,online:l})}var o=navigator.connection,l=navigator.onLine,a=t.setObject("Ti.Network",e,{constants:{NETWORK_LAN:1,NETWORK_MOBILE:3,NETWORK_NONE:0,NETWORK_UNKNOWN:-1,NETWORK_WIFI:2,networkType:function(){return l?o&&o.type==o.WIFI?a.NETWORK_WIFI:o&&o.type==o.ETHERNET?a.NETWORK_LAN:!o||o.type!=o.CELL_2G&&o.type!=o.CELL_3G?a.NETWORK_UNKNOWN:a.NETWORK_MOBILE:a.NETWORK_NONE},networkTypeName:function(){return l?o&&o.type==o.WIFI?"WIFI":o&&o.type==o.ETHERNET?"LAN":!o||o.type!=o.CELL_2G&&o.type!=o.CELL_3G?"UNKNOWN":"MOBILE":"NONE"},online:function(){return l}},properties:{httpURLFormatter:null},createHTTPClient:function(e){return new(require("Ti/Network/HTTPClient"))(e)},decodeURIComponent:function(e){return decodeURIComponent(e)},encodeURIComponent:function(e){return encodeURIComponent(e)}});return require.on(window,"online",i),require.on(window,"offline",i),a});