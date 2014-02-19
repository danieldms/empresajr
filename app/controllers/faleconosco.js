var args = arguments[0] || {};

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
