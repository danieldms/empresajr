define(["Ti/_","Ti/_/string"],function(e,t){function i(e,i,o){for(var n,r=0,a=" "+e.className+" ",i=require.is(i,"Array")?i:i.split(" ");i.length>r;r++)n=a.indexOf(" "+i[r]+" "),o&&-1===n?a+=i[r]+" ":o||-1===n||(a=a.substring(0,n)+a.substring(n+i[r].length+1));e.className=t.trim(a)}return e.css={add:function(e,t){i(e,t,1)},remove:function(e,t){i(e,t)},clean:function(e){return e.replace(/[^A-Za-z0-9\-]/g,"")}}});