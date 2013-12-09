var args = arguments[0] || {};

var disabled = false;

$.headers.add(args.headers);
$.headers.setHeight(args.height);

/*if(Ti.Platform.version <= 6.1){
	$.navContent.top = 0;
	$.navView.height = '44dp';
}
*//*
$.button.addEventListener('click', function(e){
	Ti.App.fireEvent('app:toggle', null);
	$.nome.blur();
	$.email.blur();
	$.telefone.blur();
	$.assunto.blur();
	$.mensagem.blur();
});

$.button.addEventListener('touchstart', function(e){
	this.backgroudColor = "#000";
	this.opacity = 0.2;
});


$.button.addEventListener('touchend', function(e){
	this.backgroudColor = "transparent";
	this.opacity = 1;
});
*/
$.enviar.addEventListener('click', function(e){
	enviar();
});

function enviar(){
	if($.nome.value != null && ($.email.value != null || $.telefone.value != null) 
		&& $.assunto.value != null && $.mensagem.value != null){
		Ti.App.fireEvent('app:preload', null);
		Alloy.Globals.Util.newSac($.nome.value, $.assunto.value, $.email.value, $.telefone.value, $.mensagem.value, processa);
	}
}

function processa(e){
	Ti.App.fireEvent('app:preload', null);
	alert(e.message);
	
	if(e.type == "sucesso"){
		$.nome.value = '';
		$.assunto.value = '';
		$.email.value = '';
		$.telefone.value = '';
		$.mensagem.value = '';		
	}
};

$.nome.addEventListener('return', function(e){
	$.email.focus();
});

$.email.addEventListener('return', function(e){
	$.telefone.focus();
});

$.telefone.addEventListener('return', function(e){
	$.assunto.focus();
});

$.assunto.addEventListener('return', function(e){
	$.mensagem.focus();
});

$.mensagem.addEventListener('return', function(e){
	enviar();
});
