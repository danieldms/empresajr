var args = arguments[0] || {};

$.button.addEventListener('click', function(e){
	Ti.App.fireEvent('app:toggle', null);
});

$.button.addEventListener('touchstart', function(e){
	this.backgroudColor = "#000";
	this.opacity = 0.2;
});


$.button.addEventListener('touchend', function(e){
	this.backgroudColor = "transparent";
	this.opacity = 1;
});
$.entrar.addEventListener('click', function(e){
	Alloy.Globals.Util.login($.username.value, $.senha.value, isLogin);
});

function isLogin(e){
	Ti.API.log(e);
	if(e != null){
		if(e.type != 'error'){
			if(e.projeto.count > 0){
				Alloy.Globals.Usuario = e;
				setProjeto();
			}else{
				alert(e.projeto.message);
			}
		}else{
			alert(e.message);
		}
	}
};

function setProjeto(e){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false});
};
