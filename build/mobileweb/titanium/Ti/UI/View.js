define(["Ti/_/declare","Ti/_/dom","Ti/_/UI/Element","Ti/_/lang","Ti/_/string","Ti/_/Layouts","Ti/_/style","Ti/UI"],function(e,t,i,o,a,l,n,r){return e("Ti.UI.View",i,{constructor:function(){this.constants.__values__.children=[],this.layout="composite",this.containerNode=this.domNode},_publish:function(e){this.children.push(e),e._isPublished=1},_unpublish:function(e){var t=this.children,i=t.indexOf(e);~i&&t.splice(i,1)},add:function(e){this._add(e),this._publish(e)},remove:function(e){this._remove(e),this._unpublish(e)},_defaultWidth:r.FILL,_defaultHeight:r.FILL,constants:{children:void 0},properties:{layout:{set:function(e){var t=e&&e.match(/^(horizontal|vertical|constrainingHorizontal|constrainingVertical)$/);return e=t?t[0]:"composite",this._layout&&(this._layout.destroy(),this._layout=null),this._layout=new(l[a.capitalize("horizontal"!==e||this.horizontalWrap?e:"constrainingHorizontal")])(this),e}},horizontalWrap:{post:function(){this.layout=this.layout},value:!0}}})});