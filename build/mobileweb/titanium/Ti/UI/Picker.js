define(["Ti/_/declare","Ti/_/event","Ti/UI/View","Ti/_/UI/Widget","Ti/UI","Ti/_/lang","Ti/_/dom","Ti/_/ready"],function(e,t,i,o,a,l,r,n){var s=require.is,d=6,_=r.unitize(d),c={},u=require.on,f=e(o,{constructor:function(){function e(){t!==i.value&&(t=i.value,o.fireEvent("change",{value:i.valueAsDate}))}var t,i=this._input=r.create("input",{style:{left:_,top:_,right:_,bottom:_,position:"absolute"}},this.domNode),o=this;o._handles=[u(i,"ontouchstart"in window?"touchend":"click",e),u(i,"keyup",e)]},destroy:function(){t.off(this._handles),o.prototype.destroy.apply(this,arguments)},_getContentSize:function(){return c[this.type]},properties:{type:{set:function(e){return this._input.type=e}},min:{set:function(e){return this._input.min=l.val(e,""),e}},max:{set:function(e){return this._input.max=l.val(e,""),e}},value:{set:function(e){try{this._input.valueAsDate=e}catch(t){}}}}});return n(function(){var e=r.create("input",{style:{height:a.SIZE,width:a.SIZE}},document.body);["Date","Time","DateTime"].forEach(function(t){try{e.type=t}catch(i){}c[t]={width:e.clientWidth+2*d,height:e.clientHeight+2*d}}),r.detach(e)}),e("Ti.UI.Picker",i,{constructor:function(){this.layout="constrainingHorizontal",this._columns=[],this._getBorderFromCSS()},_currentColumn:null,_addColumn:function(e){this._columns.push(e),e._parentPicker=this;for(var t=0,i=this._columns.length,o=this.width===a.SIZE?a.SIZE:100/i+"%",r=this.height===a.SIZE?a.SIZE:"100%";i>t;t++)e=this._columns[t],e.width=o,e.height=r,e._setCorners(0===t,t===i-1,_);e._pickerChangeEventListener=l.hitch(this,function(e){var t={column:e.column,columnIndex:this._columns.indexOf(e.column),row:e.row,rowIndex:e.rowIndex};if(this.type===a.PICKER_TYPE_PLAIN){var i=[];for(var o in this._columns){var l=this._columns[o].selectedRow;l&&i.push(l.title)}t.selectedValue=i}this.fireEvent("change",t)}),e.addEventListener("change",e._pickerChangeEventListener),this._add(e),this._publish(e)},_updateColumnHeights:function(){var e,t=0;for(e in this._columns)t=Math.max(t,this._columns[e]._getTallestRowHeight());for(e in this._columns)this._columns[e]._setTallestRowHeight(t)},_defaultWidth:a.SIZE,_defaultHeight:a.SIZE,add:function(e){if(s(e,"Array"))for(var t in e)this.add(e[t]);else l.isDef(e.declaredClass)&&("Ti.UI.PickerColumn"===e.declaredClass?this._addColumn(e):"Ti.UI.PickerRow"===e.declaredClass&&(null===this._currentColumn&&this._addColumn(this._currentColumn=a.createPickerColumn()),this._currentColumn.addRow(e)))},destroy:function(){this._dateTimeInput&&this._dateTimeInput.destroy(),o.prototype.destroy.apply(this,arguments)},getSelectedRow:function(e){var t=this._columns[e];return t&&t.selectedRow},setSelectedRow:function(e,t){var i=this._columns[e];i&&(i.selectedRow=i.rows[t])},properties:{columns:{get:function(){return this._columns},set:function(e){this._removeAllChildren();for(var t in this._columns){var i=this._columns[t];i.removeEventListener(i._pickerChangeEventListener),i._parentPicker=void 0}this._columns=[],e&&this.add(e)}},maxDate:{set:function(e){return this._dateTimeInput&&(this._dateTimeInput.max=e),e}},minDate:{set:function(e){return this._dateTimeInput&&(this._dateTimeInput.min=e),e}},type:{set:function(e,t){function i(e){var t=o._dateTimeInput=new f({type:e,width:a.INHERIT,height:a.INHERIT});t.addEventListener("change",function(e){o.properties.__values__.value=e.value,o.fireEvent("change",e)}),t.min=o.min,t.max=o.max,o._add(t)}var o=this;if(e!==t)switch(this.columns=void 0,this._dateTimeInput=null,e){case a.PICKER_TYPE_DATE:i("Date");break;case a.PICKER_TYPE_TIME:i("Time");break;case a.PICKER_TYPE_DATE_AND_TIME:i("DateTime")}return e},value:a.PICKER_TYPE_PLAIN},value:{set:function(e){return this._dateTimeInput&&(this._dateTimeInput.value=e),e}}}})});