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

Ti.API.info(Ti.Platform.name);

mobileMap();

function mobileMap() {
	var empresa = Titanium.Map.createAnnotation({
	    latitude:-12.995626,
	    longitude:-38.520156,
	    title:"Empresa JR.",
	    subtitle:'Av. Reitor Miguel Calmon, s/n, Vale do Canela - Escola de Administração da Ufba, no térreo - Salvador/BA - Tel (71) 3245-0757',
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true
	});
	
	var mapa = Titanium.Map.createView({
		id:'mapview',
		mapType: Titanium.Map.SATELLITE_TYPE,
		region: {latitude:-12.995626, longitude:-38.520156, latitudeDelta: 0.01, longitudeDelta: 0.01},
		animate:true, regionFit: true, userLocation: true, annotations: [empresa],
		height: '100%', width: '100%', top: 0, left: 0
	});

	$.mapview.add(mapa);
}

//$.mapview.region = {latitude:37.390749, longitude:-122.081651, latitudeDelta:0.01, longitudeDelta:0.01};
