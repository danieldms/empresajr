define(["Ti/_/declare","Ti/_/Evented","Ti/Buffer","Ti/Filesystem"],function(e,t,i,o){return e("Ti.IOStream",t,{constructor:function(e){e=e||{},this._data=e.data||"",this._mode=e.mode||o.MODE_APPEND},close:function(){this._closed=!0},isReadable:function(){return!this._closed},isWriteable:function(){return!this._closed&&(this._mode===o.MODE_WRITE||this._mode===o.MODE_APPEND)},read:function(e,t,o){if(this.isReadable()){var a=this._data,r=o||a.length,l=e.append(new i({value:a.substring(t||0,r)}));return this._data=a.substring(r),l}return 0},write:function(e,t,i){if(this.isWriteable()){var o=e.value;return t=0|t,i=i||o.length,this._data+=o.substring(t,i),i-t}return 0}})});