var args = arguments[0] || {};

try{
	Ti.API.log("http://empresajr.com/app/uploads/"+Alloy.Globals.Projeto.url.src);
	
	$.index.url = "http://empresajr.com/app/uploads/"+Alloy.Globals.Projeto.url.src;
	
}catch(err){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false});	
}
