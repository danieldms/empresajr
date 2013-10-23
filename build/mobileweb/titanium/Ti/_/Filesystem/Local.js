define(["Ti/_","Ti/_/declare","Ti/_/encoding","Ti/_/lang","Ti/API","Ti/Blob"],function(e,t,i,o,n,a){function r(e,t){return m.getItem("ti:fs:"+(t?"meta:":"blob:")+e)}function l(e,t,i){return m.setItem("ti:fs:"+(i?"meta:":"blob:")+e,t),t.length}function s(e){var t=new XMLHttpRequest;return t.overrideMimeType("text/plain; charset=x-user-defined"),t.open("GET","."+e,!1),t.send(null),200===t.status?{data:t.responseText,mimeType:t.getResponseHeader("Content-Type")}:null}function d(e){var t,i=[];return p||(p={"/":"tD\nr1"},require("./titanium/filesystem.registry").split(/\n|\|/).forEach(function(e,t){var o,n=0,e=e.split("	"),a=e.length;if(0===t&&"ts"===e[0])v=e[1],p[I]+="\nc"+v;else{for(;a>n&&!e[n];n++);i=i.slice(0,n).concat(o=e[n]),p[I+i.join(I)]="n"+o+"\nt"+(n+1==a?"D":"F\ns"+e[n+1])}})),(t=p[e])&&t+"\nr1\ne1\nc"+v+"\nm"+v}function _(){return g||(g=require("Ti/Filesystem"))}function c(e,t,i,o){var a,i=i||1,r=e+t.slice(0,i).join(I);return o&&o.readonly?(n.error('Unable to create "'+r+'" because parent is readonly'),!1):(a=new y({nativePath:r,type:"D"}),a.createDirectory(),++i>t.length?!0:c(e,t,i,a))}function u(e){if(e){var t=e.match(k),i=(t[1]?t[1]:t[2]+t[3])||I;return e=t[1]?t[2]:t[4],e?c(i,e.split(I)):!0}return!1}function h(e,t){var i,o,n=e.nativePath,a=RegExp("^(ti:fs:meta|ti:fs:blob):"+n+(/\/$/.test(n)?"":I)+"(.*)"),r=0,l=m.length;if(t=_().getFile(t.nativePath,e.name),u(t.nativePath)){for(;l>r;)o=m.key(r++),(i=o.match(a))&&m.setItem(i[1]+":"+t.nativePath+I+i[2],m.getItem(o)||"");return!0}return!1}function f(){for(var e,t=/^ti:fs:tmp:\/\//,i=0,o=m.length;o>i;)e=m.key(i++),t.test(e)&&m.removeItem(e)}var p,y,g,v=Date.now(),w=require.is,m=localStorage,I="/",b={n:"sname",c:"i_created",m:"i_modified",t:"s_type",y:"s_mimeType",e:"b_remote",x:"bexecutable",r:"breadonly",s:"isize",l:"bsymbolicLink",h:"bhidden"},T={i:function(e){return e-0},s:function(e){return""+e},b:function(e){return!!(0|e)}},C="ti:fs:meta:",E="ti:fs:blob:",k=/(\/)?([^\:]*)(\:\/\/)?(.*)/,S="application/octet-stream,text/plain,text/html,text/css,text/xml,text/mathml,image/gif,image/jpeg,image/png,image/x-icon,image/svg+xml,application/x-javascript,application/json,application/pdf,application/x-opentype,audio/mpeg,video/mpeg,video/quicktime,video/x-flv,video/x-ms-wmv,video/x-msvideo,video/ogg,video/mp4,video/webm,text/csv".split(","),A={txt:1,html:2,htm:2,css:3,xml:4,mml:5,gif:6,jpeg:7,jpg:7,png:8,ico:9,svg:10,js:11,json:12,pdf:13,otf:14,mp3:15,mpeg:16,mpg:16,mov:17,flv:18,wmv:19,avi:20,ogg:21,ogv:21,mp4:22,m4v:22,webm:23,csv:24};return f(),require.on(window,"beforeunload",f),function(e,t){for(var i in e)r(i,1)||l(i,"c"+t+"\nm"+t+"\ntD\ne0\nx0\nl0\nh0\nr"+e[i],1)}({"appdata://":0,"/":1,"tmp://":0},Date.now()),y=t("Ti._.Filesystem.Local",null,{constructor:function(e){if(w(e,"String")){var t=e.match(k),i=!t[1]&&t[3];if(/^\.\./.test(e=i?t[4]:t[2]))throw Error('Irrational path "'+e+'"');this.constants.__values__.nativePath=(i?t[2]+"://":I)+e}this._type=e&&"D"!==e._type?"F":"D"},postscript:function(){var e,t,i=this.constants,o=this.nativePath,n=o&&r(o,1)||d(o),a=o.match(k),l=(a[1]?a[1]:a[2]+a[3])||I;n&&(this._exists=1)&&n.split("\n").forEach(function(e){var t=b[e.charAt(0)],o=t.substring(1),n=T[t.charAt(0)](e.substring(1));(i.hasOwnProperty(o)?i.__values__:this)[o]=n},this),o=a[1]?a[2]:a[4],e=o.split(I),i.name=e.pop(),e=e.join(I),t=i.parent=o?new y(l+e):null,t&&t.readonly||a&&a[1]&&(i.readonly=!0)},constants:{name:"",executable:!1,readonly:!1,size:0,symbolicLink:!1,nativePath:"",parent:null,writable:{get:function(){return!this.readonly},set:function(e){return this.constants.__value__.readonly=!e},value:!0}},properties:{hidden:!1},append:function(e){if(this.isFile()){switch(e&&e.declaredClass){case"Ti.Filesystem.File":e=e.read();case"Ti.Blob":this._mimeType=e.mimeType,e=e.text}var t=this.read();return t.append(e),this.write(t)}return!1},copy:function(e){if(this.exists&&e){var t=_(),e="Ti.Filesystem.File"===e.declaredClass?e:t.getFile.apply(null,arguments),i=e.parent,o=this.isFile();return e.exists()?e.readonly?!1:e.isFile()?o?e.write(this.read()):(Ti.API.error("Destination is not a directory"),!1):o?t.getFile(e.nativePath,this.name).write(this.read()):h(this,e):i&&(i.createDirectory(),!i.exists()||i.readonly||!o&&!e.createDirectory())?!1:o?e.write(this.read()):h(this,e)}return!1},createDirectory:function(){return this._create("D")},createFile:function(){return this._create("F")},createTimestamp:function(){return this._created||null},deleteDirectory:function(e){if(this.isDirectory()&&!this.readonly){for(var t=this.nativePath,i=RegExp("^ti:fs:(meta|blob):"+t+(/\/$/.test(t)?"":I)+".*"),o=0,n=m.length;n>o;)if(i.test(key=m.key(o++))){if(!e)return Ti.API.error('Directory "'+t+'" not empty'),!1;m.removeItem(key)}return this._exists=0,m.removeItem(C+t),m.removeItem(E+t),!0}return!1},deleteFile:function(){if(this.exists()&&this.isFile()&&!this.readonly){var e=this.nativePath;return this._exists=0,m.removeItem(C+e),m.removeItem(E+e),!0}return!1},exists:function(){return!!this._exists},extension:function(){var e=this.name.match(/\.(.+)$/);return e?e[1]:""},getDirectoryListing:function(){function e(e,i){var o,n=e.match(i);n&&n[1]&&0>t.indexOf(o=n[1].split(I)[0])&&t.push(o)}var t=[];if(this.isDirectory()){for(var i=this.nativePath+(/\/$/.test(this.nativePath)?"":I),o=RegExp("^"+C+i+"(.*)"),n=RegExp("^"+i+"(.*)"),a=0,r=m.length;r>a;)e(m.key(a++),o);for(a in p)e(a,n)}return t.sort()},isDirectory:function(){return"D"===this._type},isFile:function(){return"F"===this._type},modificationTimestamp:function(){return this._modified||null},move:function(){return this.copy.apply(this,arguments)&&this[this.isFile()?"deleteFile":"deleteDirectory"](1)},open:function(e){var t=require("Ti/Filesystem/FileStream");return this.exists()&&this.isFile()?new t({mode:e,data:this.read().text}):null},read:function(){if(this.exists()&&this.isFile()){var t,i=this.nativePath,o=this._remote?(t=s(i)).data:r(i)||"",n=S[A[this.extension()]||0],l=t&&t.mimeType||this._mimeType||n,d=0,_=o.length,c="",u={file:this,data:o,length:_,mimeType:l="application/octet-stream"===l&&l!==n?n:l,nativePath:i};if(this._remote&&e.isBinaryMimeType(l)){for(;_>d;)c+=String.fromCharCode(255&o.charCodeAt(d++));u.data=btoa(c)}return new a(u)}return null},rename:function(e){if(this.exists&&!this.readonly){var t,i,o=this.nativePath,n=o,a=m.getItem(E+n),r=RegExp("^ti:fs:(meta|blob):"+n+(/\/$/.test(n)?"":I)+"(.*)"),l=n.match(k),s=(l[1]?l[1]:l[2]+l[3])||I,d=0,_=m.length;if(this.constants.__values__,n=l[1]?l[2]:l[4],!n)return Ti.API.error("Can't rename root \""+s+'"'),!1;if(n=n.split(I),n.pop(),n.push(e),t=new y(n=s+n.join(I)),t.exists()||t.parent.readonly)return!1;if("D"===this._type)for(;_>d;)i=m.key(d++),(l=i.match(r))&&(m.setItem("ti:fs:"+l[1]+":"+n+I+l[2],m.getItem(i)),m.removeItem(i));return this._save(n,e),a&&m.setItem(E+n,a),m.removeItem(C+o),m.removeItem(E+o),!0}return!1},resolve:function(){return this.nativePath},spaceAvailable:function(){return"remainingSpace"in m?m.remainingSpace:null},write:function(e,t){var i=this.nativePath;if(i&&this.isFile()&&!this.readonly&&this.parent&&!this.parent.readonly){switch(e&&w(e,"String")&&(this._mimeType=S[1]),e&&e.declaredClass){case"Ti.Filesystem.File":e=e.read();case"Ti.Blob":this._mimeType=e.mimeType,e=e._data||""}return this._exists=1,this._modified=Date.now(),this._created||(this._created=this._modified),this.constants.__values__.size=l(i,t?this.read()+e:e),this._save()}return!1},_create:function(e){return!this.exists()&&this.parent&&!this.parent.readonly&&u(this.parent.nativePath)?(this._created=this._modified=Date.now(),this._exists=1,this._type=e,this._save()):!1},_save:function(e,t){var i,e=e||this.nativePath;return e?(i=["n",t||this.name,"\nc",this._created,"\nm",this._modified,"\nt",this._type,"\ne0\nx0\nr",0|this.readonly,"\nl",0|this.symbolicLink,"\nh",0|this.hidden],"F"===this._type&&i.push("\ns"+this.size),this._mimeType&&i.push("\ny"+this._mimeType),l(e,i.join(""),1),!0):!1}})});