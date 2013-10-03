var args = arguments[0] || {};

$.button.add(args.backview); 

var util = require('util');

$.entrar.addEventListener('click', function(e){
	Ti.API.log($.username.value +" "+ $.senha.value + " " + isLogin);
	util.login($.username.value, $.senha.value, isLogin);
});

function isLogin(e){
	if(e.type == 'sucesso'){
		util.getProjeto(e.id, setProjeto);
	}else{
		if(e.type == 'error'){
			Ti.UI.createAlertDialog({title: e.type, message: e.message}).show();
		}
	}
};

function setProjeto(e){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false, 'data': e });
};
