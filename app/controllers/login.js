var args = arguments[0] || {};

$.button.add(args.backview); 

var util = require('util');

$.entrar.addEventListener('click', function(e){
	util.login($.username.value, $.senha.value, isLogin);
});

function isLogin(e){
	if(e != null){
		if(e.type != 'error'){
			setProjeto();
		}else{
			Ti.UI.createAlertDialog({message: e.message, title: e.error}).show();
		}
	}
};

function setProjeto(e){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false, 'data': e });
};
