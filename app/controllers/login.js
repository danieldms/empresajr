var args = arguments[0] || {};

$.button.add(args.backview); 

var util = require('util');

$.entrar.addEventListener('click', function(e){
		var xhr = Titanium.Network.createHTTPClient();
		xhr.open("POST", util.url);
		var params = {'username': $.username.value, 
					  'password': $.senha.value,
					  'type': 'mobile',
					  'class': 'login'};

		xhr.onload = function(e){
			Ti.API.log(this.responseText);
			var json = JSON.parse(this.responseText);
		};
		xhr.send(params);
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
