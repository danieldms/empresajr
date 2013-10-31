define(["Ti/_","Ti/_/declare","Ti/_/encoding","Ti/_/lang","Ti/API","Ti/Blob"],function(e,t,i,o,a,n){function r(e,t){return w.getItem("ti:fs:"+(t?"meta:":"blob:")+e)}function l(e,t,i){return w.setItem("ti:fs:"+(i?"meta:":"blob:")+e,t),t.length}function s(e){var t=new XMLHttpRequest;return t.overrideMimeType("text/plain; charset=x-user-defined"),t.open("GET","."+e,!1),t.send(null),200===t.status?{data:t.responseText,mimeType:t.getResponseHeader("Content-Type")}:null}function d(e){var t,i=[];return y||(y={"/":"tD\nr1"},require("./titanium/filesystem.registry").split(/\n|\|/).forEach(function(e,t){var o,a=0,e=e.split("	"),n=e.length;if(0===t&&"ts"===e[0])g=e[1],y[m]+="\nc"+g;else{for(;n>a&&!e[a];a++);i=i.slice(0,a).concat(o=e[a]),y[m+i.join(m)]="n"+o+"\nt"+(a+1==n?"D":"F\ns"+e[a+1])}})),(t=y[e])&&t+"\nr1\ne1\nc"+g+"\nm"+g}function _(){return v||(v=require("Ti/Filesystem"))}function c(e,t,i,o){var n,i=i||1,r=e+t.slice(0,i).join(m);return o&&o.readonly?(a.error('Unable to create "'+r+'" because parent is readonly'),!1):(n=new p({nativePath:r,type:"D"}),n.createDirectory(),++i>t.length?!0:c(e,t,i,n))}function u(e){if(e){var t=e.match(S),i=(t[1]?t[1]:t[2]+t[3])||m;return e=t[1]?t[2]:t[4],e?c(i,e.split(m)):!0}return!1}function h(e,t){var i,o,a=e.nativePath,n=RegExp("^(ti:fs:meta|ti:fs:blob):"+a+(/\/$/.test(a)?"":m)+"(.*)"),r=0,l=w.length;if(t=_().getFile(t.nativePath,e.name),u(t.nativePath)){for(;l>r;)o=w.key(r++),(i=o.match(n))&&w.setItem(i[1]+":"+t.nativePath+m+i[2],w.getItem(o)||"");return!0}return!1}function f(){for(var e,t=/^ti:fs:tmp:\/\//,i=0,o=w.length;o>i;)e=w.key(i++),t.test(e)&&w.removeItem(e)}var y,p,v,g=Date.now(),I=require.is,w=localStorage,m="/",b={n:"sname",c:"i_created",m:"i_modified",t:"s_type",y:"s_mimeType",e:"b_remote",x:"bexecutable",r:"breadonly",s:"isize",l:"bsymbolicLink",h:"bhidden"},T={i:function(e){return e-0},s:function(e){return""+e},b:function(e){return!!(0|e)}},E="ti:fs:meta:",C="ti:fs:blob:",S=/(\/)?([^\:]*)(\:\/\/)?(.*)/,k="application/octet-stream,text/plain,text/html,text/css,text/xml,text/mathml,image/gif,image/jpeg,image/png,image/x-icon,image/svg+xml,application/x-javascript,application/json,application/pdf,application/x-opentype,audio/mpeg,video/mpeg,video/quicktime,video/x-flv,video/x-ms-wmv,video/x-msvideo,video/ogg,video/mp4,video/webm,text/csv".split(","),A={txt:1,html:2,htm:2,css:3,xml:4,mml:5,gif:6,jpeg:7,jpg:7,png:8,ico:9,svg:10,js:11,json:12,pdf:13,otf:14,mp3:15,mpeg:16,mpg:16,mov:17,flv:18,wmv:19,avi:20,ogg:21,ogv:21,mp4:22,m4v:22,webm:23,csv:24};return f(),require.on(window,"beforeunload",f),function(e,t){for(var i in e)r(i,1)||l(i,"c"+t+"\nm"+t+"\ntD\ne0\nx0\nl0\nh0\nr"+e[i],1)}({"appdata://":0,"/":1,"tmp://":0},Date.now()),p=t("Ti._.Filesystem.Local",null,{constructor:function(e){if(I(e,"String")){var t=e.match(S),i=!t[1]&&t[3];if(/^\.\./.test(e=i?t[4]:t[2]))throw Error('Irrational path "'+e+'"');this.constants.__values__.nativePath=(i?t[2]+"://":m)+e}this._type=e&&"D"!==e._type?"F":"D"},postscript:function(){var e,t,i=this.constants,o=this.nativePath,a=o&&r(o,1)||d(o),n=o.match(S),l=(n[1]?n[1]:n[2]+n[3])||m;a&&(this._exists=1)&&a.split("\n").forEach(function(e){var t=b[e.charAt(0)],o=t.substring(1),a=T[t.charAt(0)](e.substring(1));(i.hasOwnProperty(o)?i.__values__:this)[o]=a},this),o=n[1]?n[2]:n[4],e=o.split(m),i.name=e.pop(),e=e.join(m),t=i.parent=o?new p(l+e):null,t&&t.readonly||n&&n[1]&&(i.readonly=!0)},constants:{name:"",executable:!1,readonly:!1,size:0,symbolicLink:!1,nativePath:"",parent:null,writable:{get:function(){return!this.readonly},set:function(e){return this.constants.__value__.readonly=!e},value:!0}},properties:{hidden:!1},append:function(e){if(this.isFile()){switch(e&&e.declaredClass){case"Ti.Filesystem.File":e=e.read();case"Ti.Blob":this._mimeType=e.mimeType,e=e.text}var t=this.read();return t.append(e),this.write(t)}return!1},copy:function(e){if(this.exists&&e){var t=_(),e="Ti.Filesystem.File"===e.declaredClass?e:t.getFile.apply(null,arguments),i=e.parent,o=this.isFile();return e.exists()?e.readonly?!1:e.isFile()?o?e.write(this.read()):(Ti.API.error("Destination is not a directory"),!1):o?t.getFile(e.nativePath,this.name).write(this.read()):h(this,e):i&&(i.createDirectory(),!i.exists()||i.readonly||!o&&!e.createDirectory())?!1:o?e.write(this.read()):h(this,e)}return!1},createDirectory:function(){return this._create("D")},createFile:function(){return this._create("F")},createTimestamp:function(){return this._created||null},deleteDirectory:function(e){if(this.isDirectory()&&!this.readonly){for(var t=this.nativePath,i=RegExp("^ti:fs:(meta|blob):"+t+(/\/$/.test(t)?"":m)+".*"),o=0,a=w.length;a>o;)if(i.test(key=w.key(o++))){if(!e)return Ti.API.error('Directory "'+t+'" not empty'),!1;w.removeItem(key)}return this._exists=0,w.removeItem(E+t),w.removeItem(C+t),!0}return!1},deleteFile:function(){if(this.exists()&&this.isFile()&&!this.readonly){var e=this.nativePath;return this._exists=0,w.removeItem(E+e),w.removeItem(C+e),!0}return!1},exists:function(){return!!this._exists},extension:function(){var e=this.name.match(/\.(.+)$/);return e?e[1]:""},getDirectoryListing:function(){function e(e,i){var o,a=e.match(i);a&&a[1]&&0>t.indexOf(o=a[1].split(m)[0])&&t.push(o)}var t=[];if(this.isDirectory()){for(var i=this.nativePath+(/\/$/.test(this.nativePath)?"":m),o=RegExp("^"+E+i+"(.*)"),a=RegExp("^"+i+"(.*)"),n=0,r=w.length;r>n;)e(w.key(n++),o);for(n in y)e(n,a)}return t.sort()},isDirectory:function(){return"D"===this._type},isFile:function(){return"F"===this._type},modificationTimestamp:function(){return this._modified||null},move:function(){return this.copy.apply(this,arguments)&&this[this.isFile()?"deleteFile":"deleteDirectory"](1)},open:function(e){var t=require("Ti/Filesystem/FileStream");return this.exists()&&this.isFile()?new t({mode:e,data:this.read().text}):null},read:function(){if(this.exists()&&this.isFile()){var t,i=this.nativePath,o=this._remote?(t=s(i)).data:r(i)||"",a=k[A[this.extension()]||0],l=t&&t.mimeType||this._mimeType||a,d=0,_=o.length,c="",u={file:this,data:o,length:_,mimeType:l="application/octet-stream"===l&&l!==a?a:l,nativePath:i};if(this._remote&&e.isBinaryMimeType(l)){for(;_>d;)c+=String.fromCharCode(255&o.charCodeAt(d++));u.data=btoa(c)}return new n(u)}return null},rename:function(e){if(this.exists&&!this.readonly){var t,i,o=this.nativePath,a=o,n=w.getItem(C+a),r=RegExp("^ti:fs:(meta|blob):"+a+(/\/$/.test(a)?"":m)+"(.*)"),l=a.match(S),s=(l[1]?l[1]:l[2]+l[3])||m,d=0,_=w.length;if(this.constants.__values__,a=l[1]?l[2]:l[4],!a)return Ti.API.error("Can't rename root \""+s+'"'),!1;if(a=a.split(m),a.pop(),a.push(e),t=new p(a=s+a.join(m)),t.exists()||t.parent.readonly)return!1;if("D"===this._type)for(;_>d;)i=w.key(d++),(l=i.match(r))&&(w.setItem("ti:fs:"+l[1]+":"+a+m+l[2],w.getItem(i)),w.removeItem(i));return this._save(a,e),n&&w.setItem(C+a,n),w.removeItem(E+o),w.removeItem(C+o),!0}return!1},resolve:function(){return this.nativePath},spaceAvailable:function(){return"remainingSpace"in w?w.remainingSpace:null},write:function(e,t){var i=this.nativePath;if(i&&this.isFile()&&!this.readonly&&this.parent&&!this.parent.readonly){switch(e&&I(e,"String")&&(this._mimeType=k[1]),e&&e.declaredClass){case"Ti.Filesystem.File":e=e.read();case"Ti.Blob":this._mimeType=e.mimeType,e=e._data||""}return this._exists=1,this._modified=Date.now(),this._created||(this._created=this._modified),this.constants.__values__.size=l(i,t?this.read()+e:e),this._save()}return!1},_create:function(e){return!this.exists()&&this.parent&&!this.parent.readonly&&u(this.parent.nativePath)?(this._created=this._modified=Date.now(),this._exists=1,this._type=e,this._save()):!1},_save:function(e,t){var i,e=e||this.nativePath;return e?(i=["n",t||this.name,"\nc",this._created,"\nm",this._modified,"\nt",this._type,"\ne0\nx0\nr",0|this.readonly,"\nl",0|this.symbolicLink,"\nh",0|this.hidden],"F"===this._type&&i.push("\ns"+this.size),this._mimeType&&i.push("\ny"+this._mimeType),l(e,i.join(""),1),!0):!1}})});