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
	var data = {'':''};	
	Alloy.Globals.Util.sendQuestionario(data, processa);
}

function processa(data){
	Ti.API.info("chegou aqui");
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
