define(["require","Ti/_/lang","Ti/_/Evented","Ti/API"],function(e,t,i,o){function a(e,t){return s[e]||t||e||""}var r=t.val(navigator.language,navigator.browserLanguage).replace(/^([^\-\_]+)[\-\_](.+)?$/,function(e,t,i){return t.toLowerCase()+(i&&"-"+i.toUpperCase())}),l=r.split("-"),n=l[0],s={},d=e.config,_=d.app;document.body.dir=/^ar|he$/.test(n)?"RTL":"LTR",document.title=_.name=_.names[n]||_.name;try{~d.locales.indexOf(n)&&(s=e("./Locale/"+n+"/i18n"))}catch(c){}return Object.defineProperty(window,"L",{value:a,enumarable:!0}),String.formatDate=function(e){return o.debug('Method "String.formatDate" is not implemented yet.'),""+e},String.formatTime=function(e){return o.debug('Method "String.formatTime" is not implemented yet.'),""+e},String.formatCurrency=function(e){return o.debug('Method "String.formatCurrency" is not implemented yet.'),e},String.formatDecimal=function(e){return o.debug('Method "String.formatDecimal" is not implemented yet.'),e},t.setObject("Ti.Locale",i,{constants:{currentCountry:l[1]||"",currentLanguage:l[0]||"",currentLocale:r},formatTelephoneNumber:function(e){return e},getCurrencyCode:function(){return""},getCurrencySymbol:function(){return""},getLocaleCurrencySymbol:function(){return""},getString:a,_getString:function(e,i){return t.val(i,a(e,i))}})});