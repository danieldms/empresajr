define(["Ti/_","Ti/_/declare","Ti/_/Evented"],function(e,t,i){return t("Ti.Blob",i,{constructor:function(e){e=e||{},this._data=e.data||""},postscript:function(){var t,i=this.mimeType,o=this.constants.__values__;(this._isBinary=e.isBinaryMimeType(i))&&(o.size=o.length),i.indexOf("image/")||(t=new Image,require.on.once(t,"load",function(){o.width=t.width,o.height=t.height}),t.src=""+this)},append:function(e){e&&(this._data=(this._data||"")+(""+e))},toString:function(){return(this._isBinary?"data:"+this.mimeType+";base64,":"")+(this._data||"")},constants:{file:null,height:0,length:0,mimeType:"",nativePath:null,size:0,text:function(){return this._isBinary?null:this._data||""},width:0}})});