function ucfirst(e){return e?e[0].toUpperCase()+e.substr(1):e}function addNamespace(e){return(CONST.IMPLICIT_NAMESPACES[e]||CONST.NAMESPACE_DEFAULT)+"."+e}function processStyle(e,t,i,o,l){o=o||{},o.classes=i,t.apiName&&(o.apiName=t.apiName),t.id&&(o.id=t.id),t.applyProperties(exports.createStyle(e,o,l))}function isTabletFallback(){return Math.min(Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth)>=700}var _=require("alloy/underscore")._,Backbone=require("alloy/backbone"),CONST=require("alloy/constants");exports.version="1.2.2",exports._=_,exports.Backbone=Backbone;var DEFAULT_WIDGET="widget",IDENTITY_TRANSFORM=void 0,RESET={bottom:null,left:null,right:null,top:null,height:null,width:null,shadowColor:null,shadowOffset:null,backgroundImage:null,backgroundRepeat:null,center:null,layout:null,backgroundSelectedColor:null,backgroundSelectedImage:null,opacity:1,touchEnabled:!0,enabled:!0,horizontalWrap:!0,zIndex:0,backgroundColor:null,font:null,visible:!0,color:null,transform:null,backgroundGradient:{},borderColor:"transparent",borderRadius:null,borderWidth:null};exports.M=function(e,t,i){var o,l=(t||{}).config||{},a=l.adapter||{},r={},n={};a.type?(o=require("alloy/sync/"+a.type),r.sync=function(e,t,i){o.sync(e,t,i)}):r.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a model that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))},r.defaults=l.defaults,i&&(n.migrations=i),o&&_.isFunction(o.beforeModelCreate)&&(l=o.beforeModelCreate(l,e)||l);var s=Backbone.Model.extend(r,n);return s.prototype.config=l,_.isFunction(t.extendModel)&&(s=t.extendModel(s)||s),o&&_.isFunction(o.afterModelCreate)&&o.afterModelCreate(s,e),s},exports.C=function(e,t,i){var o,l={model:i},a=(i?i.prototype.config:{})||{};a.adapter&&a.adapter.type?(o=require("alloy/sync/"+a.adapter.type),l.sync=function(e,t,i){o.sync(e,t,i)}):l.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a collection that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))};var r=Backbone.Collection.extend(l);return r.prototype.config=a,_.isFunction(t.extendCollection)&&(r=t.extendCollection(r)||r),o&&_.isFunction(o.afterCollectionCreate)&&o.afterCollectionCreate(r),r},exports.UI={},exports.UI.create=function(controller,apiName,opts){opts=opts||{};var baseName,ns,parts=apiName.split(".");if(1===parts.length)baseName=apiName,ns=opts.ns||CONST.IMPLICIT_NAMESPACES[baseName]||CONST.NAMESPACE_DEFAULT;else{if(!(parts.length>1))throw"Alloy.UI.create() failed: No API name was given in the second parameter";baseName=parts[parts.length-1],ns=parts.slice(0,parts.length-1).join(".")}opts.apiName=ns+"."+baseName,baseName=baseName[0].toUpperCase()+baseName.substr(1);var style=exports.createStyle(controller,opts);return eval(ns)["create"+baseName](style)},exports.createStyle=function(e,t,i){var o,l;if(!t)return{};o=_.isArray(t.classes)?t.classes.slice(0):_.isString(t.classes)?t.classes.split(/\s+/):[],l=t.apiName,l&&-1===l.indexOf(".")&&(l=addNamespace(l));var a;a=e&&_.isObject(e)?require("alloy/widgets/"+e.widgetId+"/styles/"+e.name):require("alloy/styles/"+e);var r,n,s={};for(r=0,n=a.length;n>r;r++){var d=a[r],c=d.key;if(d.isApi&&-1===c.indexOf(".")&&(c=(CONST.IMPLICIT_NAMESPACES[c]||CONST.NAMESPACE_DEFAULT)+"."+c),d.isId&&t.id&&d.key===t.id||d.isClass&&_.contains(o,d.key));else{if(!d.isApi)continue;if(-1===d.key.indexOf(".")&&(d.key=addNamespace(d.key)),d.key!==l)continue}d.queries&&d.queries.formFactor&&!Alloy[d.queries.formFactor]||_.extend(s,d.style)}var y=_.omit(t,[CONST.CLASS_PROPERTY,CONST.APINAME_PROPERTY]);return _.extend(s,y),s[CONST.CLASS_PROPERTY]=o,s[CONST.APINAME_PROPERTY]=l,i?_.defaults(s,i):s},exports.addClass=function(e,t,i,o){if(!i)return o&&t.applyProperties(o),void 0;var l=t[CONST.CLASS_PROPERTY]||[],a=l.length;i=_.isString(i)?i.split(/\s+/):i;var r=_.union(l,i||[]);return a===r.length?(o&&t.applyProperties(o),void 0):(processStyle(e,t,r,o),void 0)},exports.removeClass=function(e,t,i,o){i=i||[];var l=t[CONST.CLASS_PROPERTY]||[],a=l.length;if(!a||!i.length)return o&&t.applyProperties(o),void 0;i=_.isString(i)?i.split(/\s+/):i;var r=_.difference(l,i);return a===r.length?(o&&t.applyProperties(o),void 0):(processStyle(e,t,r,o,RESET),void 0)},exports.resetClass=function(e,t,i,o){i=i||[],i=_.isString(i)?i.split(/\s+/):i,processStyle(e,t,i,o,RESET)},exports.createWidget=function(e,t,i){return t!==void 0&&null!==t&&_.isObject(t)&&!_.isString(t)&&(i=t,t=DEFAULT_WIDGET),new(require("alloy/widgets/"+e+"/controllers/"+(t||DEFAULT_WIDGET)))(i)},exports.createController=function(e,t){return new(require("alloy/controllers/"+e))(t)},exports.createModel=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Model)(t)},exports.createCollection=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Collection)(t)},exports.isTablet=function(){return Math.min(Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth)>=400}(),exports.isHandheld=!exports.isTablet,exports.Globals={},exports.Models={},exports.Models.instance=function(e){return exports.Models[e]||(exports.Models[e]=exports.createModel(e))},exports.Collections={},exports.Collections.instance=function(e){return exports.Collections[e]||(exports.Collections[e]=exports.createCollection(e))},exports.CFG=require("alloy/CFG");