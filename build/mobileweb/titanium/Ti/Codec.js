define(["Ti/_/declare","Ti/_/lang","Ti/_/Evented"],function(e,t,i){function o(e){throw Error("Missing "+e+" argument")}function a(e,t){return e===r.TYPE_DOUBLE||e===r.TYPE_FLOAT?parseFloat(t):parseInt(t)}var r;return r=t.setObject("Ti.Codec",i,{decodeNumber:function(e){return(!e||!e.source)&&o("source"),e.type||o("type"),a(e.type,e.source.buffer)},decodeString:function(e){(!e||!e.source)&&o("source");var t=e.source.buffer||"",i=0|e.position,a=e.length;return t.substring(i,a&&i+a)},encodeNumber:function(e){return(!e||!e.source)&&o("source"),e.dest||o("dest"),e.type||o("type"),dest.append(new(require("Ti/Buffer"))({buffer:""+a(e.type,e.source.buffer)}))},encodeString:function(e){(!e||!e.source)&&o("source"),e.dest||o("dest");var t=e.source.buffer||"",i=0|e.destPosition;return t=new(require("Ti/Buffer"))({buffer:t.substring(0|e.sourcePosition,e.sourceLength||t.length)}),i?dest.insert(t,i):dest.append(t)},getNativeByteOrder:function(){return this.LITTLE_ENDIAN},constants:{BIG_ENDIAN:2,CHARSET_ASCII:"ascii",CHARSET_ISO_LATIN_1:"ios-latin-1",CHARSET_UTF16:"utf16",CHARSET_UTF16BE:"utf16be",CHARSET_UTF16LE:"utf16le",CHARSET_UTF8:"utf8",LITTLE_ENDIAN:1,TYPE_BYTE:"byte",TYPE_DOUBLE:"double",TYPE_FLOAT:"float",TYPE_INT:"int",TYPE_LONG:"long",TYPE_SHORT:"short"}})});