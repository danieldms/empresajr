var args = arguments[0] || {};

$.button.add(args.backview); 

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
				Ti.UI.createAlertDialog({message: e.projeto.message, title: e.projeto.titulo}).show();
			}
		}else{
			Ti.UI.createAlertDialog({message: e.message, title: e.error}).show();
		}
	}
};

function setProjeto(e){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false});
};
