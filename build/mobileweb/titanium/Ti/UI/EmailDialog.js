define(["Ti/_","Ti/_/declare","Ti/_/Evented","Ti/_/lang"],function(e,t,i,o){return t("Ti.UI.EmailDialog",i,{open:function(){var t,i,r=this.toRecipients||[],a="mailto:"+r.join(","),n={subject:"subject",ccRecipients:"cc",bccRecipients:"bcc",messageBody:"body"},l={};for(t in n)(i=this[t])&&(require.is(i,"Array")&&(i=i.join(",")),l[n[t]]=i);this.html||l.body&&(l.body=e.escapeHtmlEntities(l.body)),l=o.urlEncode(l),location.href=a+(l?"?"+l:""),this.fireEvent("complete",{result:this.SENT,success:!0})},isSupported:function(){return!0},constants:{CANCELLED:0,FAILED:3,SAVED:1,SENT:2},properties:{bccRecipients:void 0,ccRecipients:void 0,html:!1,messageBody:void 0,subject:void 0,toRecipients:void 0}})});