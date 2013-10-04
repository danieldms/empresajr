var args = arguments[0] || {};

$.button.add(args.backview);

if(Alloy.Globals.Usuario != null){
	Alloy.Globals.Util.getProjeto(Alloy.Globals.Usuario.id, isProjeto);
}

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
	}
};
