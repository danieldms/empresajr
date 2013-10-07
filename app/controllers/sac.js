var args = arguments[0] || {};

$.button.add(args.backview);

if(Alloy.Globals.Usuario != null){
	Alloy.Globals.Util.getProjeto(Alloy.Globals.Usuario.id, isProjeto);
};

$.enviar.addEventListener('click', function(e){
	$.mensagem.value = '';
	$.content.setContentHeight('auto');
});

function isProjeto(e){
	Ti.API.log(e);
	if(e.type == "sucesso"){
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
		var color = null;
		for(var i=0, j = e.comentarios.length; i<j; i++){
			if(e.comentarios[i].usuarios_id == Alloy.Globals.Usuario.id){
				color = "#105A99";
			}else{
				color = "#259D2D";
			}
		  	var view = Ti.UI.createView({height:15, top:0, layout:"vertical" });
		  	var label = Ti.UI.createLabel({left: 10, top: 0, color: color, text: e.comentarios[i].nome, font:{fontSize: 10, fontWeight: 'bold'}});
		  	var time = Ti.UI.createLabel({right: 5, top: "-12", textAlign: "right", text: e.comentarios[i].data, font:{fontSize: 10}, color: "#CCC"});
		 	view.add(label);
		  	view.add(time);
		  	$.comentario.add(view);
		  	var line = Ti.UI.createView({left:0,top:2, backgroundColor:"#ccc", height:1, width: "100%" });
		  	$.comentario.add(line);
		  	var descricao = Ti.UI.createLabel({left: 10, right: 10, bottom: 15, text:e.comentarios[i].descricao, font:{fontSize: 10}, color: "#9B9B9B" });
		  	$.comentario.add(descricao);		  
		};
		$.content.setContentHeight('auto');
	}else{
		alert(e.message);
	}
};


