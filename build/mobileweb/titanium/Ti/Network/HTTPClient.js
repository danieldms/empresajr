define(["Ti/_","Ti/_/declare","Ti/_/has","Ti/_/lang","Ti/_/Evented","Ti/Filesystem","Ti/Network","Ti/Blob","Ti/_/event","Ti/App"],function(e,t,i,o,l,a,r,n,s,d){var _=require.is,c=require.on;return t("Ti.Network.HTTPClient",l,{constructor:function(){var e=this._xhr=new XMLHttpRequest;this._handles=[c(e,"error",this,"_onError"),e.upload&&c(e.upload,"error",this,"_onError"),c(e,"progress",this,function(e){e.progress=e.lengthComputable?e.loaded/e.total:!1,_(this.ondatastream,"Function")&&this.ondatastream.call(this,e)}),e.upload&&c(e.upload,"progress",this,function(e){e.progress=e.lengthComputable?e.loaded/e.total:!1,_(this.onsendstream,"Function")&&this.onsendstream.call(this,e)})],e.onreadystatechange=o.hitch(this,function(){var t,o=this.constants,l=this.onload;switch(e.readyState){case 0:o.readyState=this.UNSENT;break;case 1:o.readyState=this.OPENED;break;case 2:o.readyState=this.LOADING;break;case 3:o.readyState=this.HEADERS_RECEIVED;break;case 4:clearTimeout(this._timeoutTimer),this._completed=1,o.readyState=this.DONE,this._aborted||((t=this.file)&&(t=a.getFile(t),t.writable&&t.write(e.responseText)),o.responseText=e.responseText,o.responseData=new n({data:e.responseText,length:e.responseText.length,mimeType:e.getResponseHeader("Content-Type")||"text/plain"}),o.responseXML=e.responseXML,i("ti-instrumentation")&&instrumentation.stopTest(this._requestInstrumentationTest,this.location),e.status>=400&&(l=this._onError),_(l,"Function")&&l.call(this))}this._fireStateChange()})},destroy:function(){this._xhr&&(this._xhr.abort(),this._xhr=null),s.off(this._handles),l.destroy.apply(this,arguments)},_onError:function(e){this.abort(),_(e,"Object")||(e={message:e}),e.source=this,e.type="error",e.error||(e.error=e.message||this._xhr.status),parseInt(e.error)||(e.error="Can't reach host"),_(this.onerror,"Function")&&this.onerror.call(this,e)},abort:function(){clearTimeout(this._timeoutTimer),this._aborted=1,this.connected&&this._xhr.abort(),this.constants.readyState=this.UNSENT,this._fireStateChange()},_fireStateChange:function(){_(this.onreadystatechange,"Function")&&this.onreadystatechange.call(this)},getResponseHeader:function(e){return this._xhr.readyState>1?this._xhr.getResponseHeader(e):null},open:function(t,i,o){var l=Ti.Network.httpURLFormatter,a=this.constants,r=this.withCredentials,n=e.getAbsolutePath(l?l(i):i),s=n.match(/^((?:.+\:)?\/\/)?(?:.+@)?(.*)$/);s&&this.username&&this.password&&(n=(s[1]||"")+(this.domain?this.domain+"\\":"")+this.username+":"+this.password+"@"+s[2]),this.abort(),this._xhr.open(a.connectionType=t,a.location=n,r||void 0===o?!0:!!o),r&&(this._xhr.withCredentials=r)},send:function(e){try{var t=0|this.timeout;this._aborted=this._completed=0,i("ti-instrumentation")&&(this._requestInstrumentationTest=instrumentation.startTest("HTTP Request")),e=_(e,"Object")?o.urlEncode(e):e,e&&this._xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this._xhr.setRequestHeader("X-Titanium-Id",d.guid),this._xhr.send(e),clearTimeout(this._timeoutTimer),t&&(this._timeoutTimer=setTimeout(o.hitch(this,function(){this.connected&&(this.abort(),!this._completed&&this._onError("Request timed out"))}),t))}catch(l){}},setRequestHeader:function(e,t){this._xhr.setRequestHeader(e,t)},properties:{ondatastream:void 0,onerror:void 0,onload:void 0,onreadystatechange:void 0,onsendstream:void 0,timeout:void 0,username:null,password:null,domain:null,withCredentials:!1},constants:{DONE:4,HEADERS_RECEIVED:2,LOADING:3,OPENED:1,UNSENT:1,connected:function(){return this.readyState>=this.OPENED},connectionType:void 0,location:void 0,readyState:this.UNSENT,responseData:void 0,responseText:void 0,responseXML:void 0,status:function(){return this._xhr.status},statusText:function(){return this._xhr.statusText}}})});