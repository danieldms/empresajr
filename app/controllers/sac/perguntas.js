var args = arguments[0] || {};

$.button.addEventListener('click', function(e){
	Ti.App.fireEvent('app:toggle', null);
	$.prazo.blur();
	$.preco.blur();
	$.credibilidade.blur();
	$.aplicabilidade.blur();
	$.inovacao.blur();
	$.qualidade.blur();
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
	var data = {'indica': $.Sindica.value , 'preco': $.SPreco.value, 'prazo': $.Sprazo.value, 'credibilidade': $.Scredibilidade.value, 
				'aplicabilidade': $.Saplicabilidade.value, 'inovacao': $.Sinovacao.value, 'qualidade': $.Squalidade.value,
				'preco_texto': $.preco.value, 'prazo_texto': $.prazo.value, 'credibilidade_texto': $.credibilidade.value, 
				'aplicabilidade_texto': $.aplicabilidade.value, 'inovacao_texto': $.inovacao.value, 'qualidade_texto': $.qualidade.value,
				'class': 'newPesquisa', 'type': 'mobile', 'projetos_id': Alloy.Globals.Projeto.id };
	Ti.App.fireEvent('app:preload', null);
	Alloy.Globals.Util.sendQuestionario(data, processa);
}

function processa(data){
	Ti.App.fireEvent('app:preload', null);
	if(data != null){
		alert(data.message);
		if(data.type == 'sucesso'){
			Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false});
		}
	}
};

$.preco.addEventListener('return', function() {
    $.prazo.focus();
});

$.prazo.addEventListener('return', function() {
    $.credibilidade.focus();
});

$.credibilidade.addEventListener('return', function() {
    $.aplicabilidade.focus();
});

$.aplicabilidade.addEventListener('return', function() {
    $.inovacao.focus();
});

$.inovacao.addEventListener('return', function() {
    $.qualidade.focus();
});

$.qualidade.addEventListener('return', function(){
	enviar();
});

$.SPreco.addEventListener('change', function(e){
	$.SPreco.value = $.SPreco.value.toFixed();
});

$.Sindica.addEventListener('change', function(e){
	$.Sindica.value = $.Sindica.value.toFixed();
});

$.Sprazo.addEventListener('change', function(e){
	$.Sprazo.value = $.Sprazo.value.toFixed();
});

$.Scredibilidade.addEventListener('change', function(e){
	$.Scredibilidade.value = $.Scredibilidade.value.toFixed();
});

$.Saplicabilidade.addEventListener('change', function(e){
	$.Saplicabilidade.value = $.Saplicabilidade.value.toFixed();
});

$.Sinovacao.addEventListener('change', function(e){
	$.Sinovacao.value = $.Sinovacao.value.toFixed();
});

$.Squalidade.addEventListener('change', function(e){
	$.Squalidade.value = $.Squalidade.value.toFixed();
});

