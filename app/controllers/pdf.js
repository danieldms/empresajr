var args = arguments[0] || {};

try{
	$.index.url = Alloy.Globals.Projeto.url;
}catch(err){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false});	
}
