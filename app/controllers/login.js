var args = arguments[0] || {};

$.senha.addEventListener("return", function(e){
	login();
});

$.entrar.addEventListener('click', function(e){
	login();
});

function login(){
	if($.username.value != null && $.senha.value != null){
		Ti.App.fireEvent('app:preload', null);
		Alloy.Globals.Util.login($.username.value, $.senha.value, processa);
	}
}

function processa(e){
	Ti.App.fireEvent('app:preload', null);
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
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'title': 'SAC', 'swipe': false});
};
