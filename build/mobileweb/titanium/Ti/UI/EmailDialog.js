define(["Ti/_","Ti/_/declare","Ti/_/Evented","Ti/_/lang"],function(e,t,i,o){return t("Ti.UI.EmailDialog",i,{open:function(){var t,i,a=this.toRecipients||[],r="mailto:"+a.join(","),l={subject:"subject",ccRecipients:"cc",bccRecipients:"bcc",messageBody:"body"},n={};for(t in l)(i=this[t])&&(require.is(i,"Array")&&(i=i.join(",")),n[l[t]]=i);this.html||n.body&&(n.body=e.escapeHtmlEntities(n.body)),n=o.urlEncode(n),location.href=r+(n?"?"+n:""),this.fireEvent("complete",{result:this.SENT,success:!0})},isSupported:function(){return!0},constants:{CANCELLED:0,FAILED:3,SAVED:1,SENT:2},properties:{bccRecipients:void 0,ccRecipients:void 0,html:!1,messageBody:void 0,subject:void 0,toRecipients:void 0}})});