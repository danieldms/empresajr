var args = arguments[0] || {};

$.button.add(args.backview);

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


