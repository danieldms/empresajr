var args = arguments[0] || {};
var projeto = null;

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
if(Alloy.Globals.Usuario != null){
	Alloy.Globals.Util.getProjeto(Alloy.Globals.Usuario.id, processa);
};

$.enviar.addEventListener('click', function(e){
	Alloy.Globals.Util.newComentario($.mensagem.value, projeto.id, Alloy.Globals.Usuario.id, newComentario);
});

function processa(e){
	if(e.type == "sucesso"){
		projeto = e;
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
			$.comentario.setHeight('auto');
		};
		
		if(e.realizado >= 100 && e.avaliacao == null){
				var alert = Titanium.UI.createAlertDialog({ title: 'Projeto Concluído', message: 'Deseja fazer uma avaliação do projeto?', buttonNames: ['Agora', 'Agora não'], cancel: 1, });
				alert.addEventListener('click', function(e) {	
			   	if (e.cancel === e.index || e.cancel === true) {
			      	return;
			   	}
			   	switch (e.index) {
			      	case 0: 	Ti.App.fireEvent('app:setLayout', {'layout':'sac/perguntas', 'swipe': false});
				      	break;
				
				    case 1: Titanium.API.info('Clicked button 1 (NO)');
				    	break;
				
				    default:
						break;			
				}
			});
			alert.show();
		}
	}else{
		alert(e.message);
	}
};

function newComentario(e){
	if(e.type == 'sucesso'){
		processaComentario(e.comentario);
		$.mensagem.value = '';
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
	var time = Ti.UI.createLabel({right: 5, top: "-12", textAlign: "right", text: data.data, font:{fontSize: 10}, color: "#CCC"});
	view.add(label);
	view.add(time);
	$.comentario.add(view);
	var line = Ti.UI.createView({left:0,top:2, backgroundColor:"#ccc", height:1, width: "100%" });
	$.comentario.add(line);
	var descricao = Ti.UI.createLabel({left: 10,top: 5, right: 10, bottom: 15, text:data.descricao, font:{fontSize: 10}, color: "#9B9B9B" });
	$.comentario.add(descricao);	
};

