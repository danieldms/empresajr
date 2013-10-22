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

$.enviar.addEventListener('click', function(e){
	Alloy.Globals.Util.newSac($.nome.value, $.assunto.value, $.email.value, $.telefone.value, $.mensagem.value, isSac);
});

function isSac(e){
	Ti.API.log(e);
	if(e.type == "sucesso"){
		alert(e.message);
	}else{
		
	}
};


