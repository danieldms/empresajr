define(["Ti/_/declare","Ti/UI","Ti/UI/View"],function(e,t,i){var o=[];return e("Ti._.UI.SuperView",i,{destroy:function(){this.close(),i.prototype.destroy.apply(this,arguments)},open:function(){if(!this._opened){this._opened=1,t._addWindow(this,1).show();var e=o.length;e&&o[e-1]._handleBlurEvent(2),o.push(this),this.fireEvent("open"),this._handleFocusEvent()}},close:function(){if(this.tab)this.tab.close(this);else if(this._opened){var e=o.indexOf(this),i=e===o.length-1;if(t._removeWindow(this),~e&&(i&&this._handleBlurEvent(1),o.splice(e,1)),this.fireEvent("close"),i){for(e=o.length-1;e>=0&&!o[e]._opened;e--);e>=0&&o[e]._handleFocusEvent()}this._opened=0}},_handleFocusEvent:function(){this.fireEvent("focus")},_handleBlurEvent:function(){this.fireEvent("blur")}})});