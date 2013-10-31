var args = arguments[0] || {};

var comentario = Titanium.UI.createView({
	height:Ti.UI.SIZE, width:'100%',
	left: 0, top: 0
});

$.button.addEventListener('click', function(e){
	Ti.App.fireEvent('app:toggle', null);
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

function clickPDF(){
	if(Alloy.Globals.Projeto.url != null){
		Ti.App.fireEvent('app:setLayout', {'layout':'pdf', 'swipe': false});
	}else{
		alert("Não foi adicionado nenhum arquivo!");
	}
}

if(Alloy.Globals.Usuario != null){
	Alloy.Globals.Util.getProjeto(Alloy.Globals.Usuario.id, processa);
};

$.enviar.addEventListener('click', function(e){
	Ti.App.fireEvent('app:preload', null);
	Alloy.Globals.Util.newComentario($.mensagem.value, Alloy.Globals.Projeto.id, Alloy.Globals.Usuario.id, newComentario);
});

function processa(e){
	if(e.type == "sucesso"){
		Alloy.Globals.Projeto = e;
		$.titulo_projeto.text = e.titulo;
		$.descritivo.text = e.descricao;
		$.deadline.text = e.deadline;
		
		if(e.previsto < 40){
			$.previsto.color = "#000";
		}
		$.sprevisto.width = e.previsto+'%';
		$.previsto.text = e.previsto + '%';
		
		if(e.realizado < 40){
			$.realizado.color = "#000";
		}
		$.srealizado.width = e.realizado +'%';
		$.realizado.text = e.realizado +'%';
			
		for(var i=0, j = e.comentarios.length; i<j; i++){
			processaComentario(e.comentarios[i]);
		};
		
		if(e.realizado >= 100 && e.avaliacao == 'true' && Alloy.Globals.dialog == null){
			var alerta = Titanium.UI.createAlertDialog({ title: 'Projeto Concluído', message: 'Deseja fazer uma avaliação do projeto?', buttonNames: ['Agora', 'Agora não'], cancel: 1, });
			alerta.addEventListener('click', function(e) {	
			   	if (e.cancel === e.index || e.cancel === true) {
			   		Alloy.Globals.dialog = 0;
			      	return;
			   	}
			   	switch (e.index) {
			      	case 0: 	Ti.App.fireEvent('app:setLayout', {'layout':'sac/perguntas', 'swipe': false});
				      	break;
				
				    case 1: Titanium.API.info('Clicked button 1 (NO)');
				    		Alloy.Globals.dialog = 0;
				    	break;
				
				    default:
						break;			
				}
			});
			alerta.show();
		}
	}else{
		alert(e.message);
	}
};

function newComentario(e){
	Ti.App.fireEvent('app:preload', null);
	if(e.type == 'sucesso'){
		alert(e.message);
		Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false});
	}
};

function processaComentario(data){
	var color = null;
	if(data.usuarios_id == Alloy.Globals.Usuario.id){
		color = "#105A99";
	}else{
		color = "#259D2D";
	}
	var view = Ti.UI.createView({height:15, top:0, layout:"vertical" });
	var label = Ti.UI.createLabel({left: 10, top: 4, color: color, text: data.nome, font:{fontSize: 10, fontWeight: 'bold'}});
	var time = Ti.UI.createLabel({right: 5, top: "-14", textAlign: "right", text: data.data, font:{fontSize: 10}, color: "#CCC"});
	view.add(label);
	view.add(time);
	$.comentario.add(view);
	
	var line = Ti.UI.createView({left:0,top:2, backgroundColor:"#ccc", height:1, width: "100%" });
	$.comentario.add(line);
	
	var descricao = Ti.UI.createLabel({left: 10,top: 5, right: 10, text:data.descricao, font:{fontSize: 10}, color: "#9B9B9B" });
	$.comentario.add(descricao);	
	$.comentario.setHeight(Ti.UI.SIZE);
};

