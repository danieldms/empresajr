var args = arguments[0] || {};

$.button.add(args.backview); 

$.entrar.addEventListener('click', function(e){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': true});
});

