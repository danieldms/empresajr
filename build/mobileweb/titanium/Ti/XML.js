define(["Ti/_/Evented","Ti/_/lang"],function(e,t){return[["Document","doctype,implementation,documentElement,inputEncoding,xmlEncoding,domConfig","xmlStandalone,xmlVersion,strictErrorChecking,documentURI"],["Node","nodeName,nodeType,parentNode,childNodes,firstChild,lastChild,previousSibling,nextSibling,attributes,ownerDocument,namespaceURI,localName,baseURI","textContent,nodeValue,prefix"],["NamedNodeMap","length"],["CharacterData","length","data"],["Attr","name,specified,ownerElement,schemaTypeInfo,isId","value"],["Element","tagName,schemaTypeInfo"],["Text","isElementContentWhitespace,wholeText"],["DocumentType","name,entities,notations,publicId,systemId,internalSubset"],["Notation","publicId,systemId"],["NodeList","length"],["Entity","publicId,systemId,notationName,inputEncoding,xmlEncoding,xmlVersion"],["ProcessingInstruction","target","data"]].forEach(function(e){var i=window[e[0]];i&&t.generateAccessors(i,e[1],e[2])}),t.setObject("Ti.XML",e,{parseString:function(e){return(new DOMParser).parseFromString(e,"text/xml")},serializeToString:function(e){return(new XMLSerializer).serializeToString(e)}})});