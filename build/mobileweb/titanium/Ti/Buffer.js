define(["Ti/_/declare","Ti/_/Evented","Ti/Blob","Ti/Codec"],function(e,t,i,o){var a;return a=e("Ti.Buffer",t,{constructor:function(e){e&&e.value&&this._set(e.value)},append:function(e,t){var i=e.value;return t=0|t,length=length||i.length,this._set(this.value+i.substring(t,t+length)),length-t},clear:function(){this._set("")},clone:function(e,t){return new a({value:e?this.value.substring(e,t&&e+t):this.value})},copy:function(e,t,i,o){var a=e.value,t=0|t,i=0|i,r=Math.max(this.length,o&&i+o)-t,e=a.substring(i,r);this._set(this.value.substring(0,t)+e+this.value.substring(t,e.length-t))},fill:function(e,t,i){if(!e)throw Error("Missing fillByte argument");t=0|t,i=0|this.length-t-i,this._set(this.value.substring(0,0|t)+Array(i).join((e+" ").charAt(0))+this.value.substring(i))},insert:function(e,t,i,o){return e.value,i=0|i,t=0|t,this._set(this.value.substring(0,t)+v.substring(i,o&&i+o)+this.value.substring(t)),o||v.length},release:function(){this.length=0},toBlob:function(){return new i({data:this.value})},toString:function(){return""+this.value},_set:function(e){this.constants.__values__.value=""+e},_resize:function(e,t){e=0|e,this._set(this.value.substring(e,t&&0|e+t))},constants:{byteOrder:o.LITTLE_ENDIAN,type:o.CHARSET_UTF8,value:""},properties:{length:{get:function(){return this.value.length},set:function(e,t){return t>e?this._resize(0,e):this.constants.__values__.value+=Array(e-t).join(" "),e}}}})});