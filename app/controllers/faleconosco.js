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
	enviar();
});

function enviar(){
	Alloy.Globals.Util.newSac($.nome.value, $.assunto.value, $.email.value, $.telefone.value, $.mensagem.value, processa);
}

function processa(e){
	if(e.type == "sucesso"){
		alert(e.message);
		$.nome.value = '';
		$.assunto.value = '';
		$.email.value = '';
		$.telefone.value = '';
		$.mensagem.value = '';		
	}else{
		alert(e.message);
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
