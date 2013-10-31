define(["Ti/_/declare","Ti/_/UI/FontWidget","Ti/_/dom","Ti/_/css","Ti/_/style","Ti/_/lang","Ti/Locale","Ti/UI"],function(e,t,i,o,l,a,r,n){var s=l.set,d=i.unitize,_=2,c={post:"_setText"};return e("Ti.UI.Label",t,{constructor:function(){this._add(this._textContainer=n.createView({width:n.INHERIT,height:n.SIZE,center:{y:"50%"}}));var e=this,t=this._textContainerDomNode=this._textContainer.domNode;e._textContainer._getContentSize=function(i){var o=e._textContainerDomNode.innerHTML,l=e._measureText(o,t,e._hasSizeWidth()?void 0:i);return{width:l.width,height:l.height}},this._addStyleableDomNode(t),this.wordWrap=!0},_defaultWidth:n.SIZE,_defaultHeight:n.SIZE,_getText:function(){var e,t,i=0,o=0,l=r._getString(this.textid,this.text);if(void 0===l)return"";for(l+="";l.length>o;)if("	"===l[o]){var a="",n=_-t%_;for(e=0;n>e;e++)a+="&nbsp;";l=l.substring(0,o)+a+l.substring(o+1),o+=a.length,t+=n}else"\n"===l[o]?(l=l.substring(0,o)+"<br/>"+l.substring(o+1),o+=5,i=o,t=0):(o++,t++);return l.match(/<br\/>$/)&&(l+="&nbsp;"),l},_setText:function(){this._textContainerDomNode.innerHTML=this._getText(),this._triggerLayout()},_setTextShadow:function(){var e=this.shadowColor&&""!==this.shadowColor?this.shadowColor:void 0;s(this._textContainerDomNode,"textShadow",this.shadowOffset||e?(this.shadowOffset?d(this.shadowOffset.x)+" "+d(this.shadowOffset.y):"0px 0px")+" 0.1em "+a.val(e,"black"):"")},properties:{ellipsize:{set:function(e){return s(this._textContainerDomNode,"textOverflow",e?"ellipsis":"clip"),e},value:!0},html:{set:function(e){return this._textContainerDomNode.innerHTML=e,this._hasSizeDimensions()&&this._triggerLayout(),e}},shadowColor:{post:function(){this._setTextShadow()}},shadowOffset:{post:function(){this._setTextShadow()}},text:c,textAlign:{set:function(e){return s(this._textContainerDomNode,"textAlign",/(center|right)/.test(e)?e:"left"),e}},textid:c,wordWrap:{set:function(e){return s(this._textContainerDomNode,"whiteSpace",e?"normal":"nowrap"),e}},verticalAlign:{set:function(e){var t,i,o=this.center||{},l=this._textContainer;switch(e){case n.TEXT_VERTICAL_ALIGNMENT_TOP:t=0;break;case n.TEXT_VERTICAL_ALIGNMENT_CENTER:o.y="50%";break;case n.TEXT_VERTICAL_ALIGNMENT_BOTTOM:i=0}return l.top=t,l.center=o,l.bottom=i,e},value:n.TEXT_VERTICAL_ALIGNMENT_CENTER}}})});