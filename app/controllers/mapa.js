var args = arguments[0] || {};

var destination = [-12.995626,-38.520156];
var me =  [-12.99,-38.52];

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
	ignore:true,
	height: '100%', width: '100%', top: 0, left: 0
});

$.mapview.add(mapa);

Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 10;
Titanium.Geolocation.purpose = "Directions";
Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (!e.success || e.error)
    {
        alert('Error - ' + JSON.stringify(e.error));
        return;
    }   

   // me = [ e.coords.latitude,e.coords.longitude];
});
/*	var aWebView = Ti.UI.createWebView({
		ignore:'true',
		enableZoomControls:false, scalesPageToFit:true,
		url : 'https://maps.google.com.br/maps?q=Av.%20Reitor%20Miguel%20Calmon,%20s/n,%20Vale%20do%20Canela%20-%20Escola%20de%20Administra%C3%A7%C3%A3o%20da%20Ufba,%20no%20t%C3%A9rreo%20-%20Salvador/BA&ie=UTF-8&&output=embed'
	});
	aWebView.addEventListener('load', function(e) {
		Ti.API.info('webview loaded: '+ e.url);
	});
	
	$.mapview.add(aWebView);
	*/
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
 
Titanium.Geolocation.distanceFilter = 10;

var cur;
Titanium.Geolocation.getCurrentPosition(function(e){
	if (e.error){
   		alert('HFL cannot get your current location');
        return;
    }

    cur = [e.coords.latitude, e.coords.longitude];
});

function traceRoute(){
	Titanium.Geolocation.getCurrentPosition(function(e){
		if (e.error){
	   		alert('HFL cannot get your current location');
	        return;
	    }
	
	    cur = [e.coords.latitude, e.coords.longitude];
	});

	Titanium.Platform.openURL('https://maps.google.com/maps?saddr='+cur+'&daddr=-12.995626,-38.520156&f=d&sensor=false&doflg=ptm&hl=en&dirflg=d&output=embed');

	   
	
/*
	var aWebView = Ti.UI.createWebView({
		url : 'https://maps.google.com/maps?saddr=-12.99,-38.52&daddr=-12.995626,-38.520156&f=d&sensor=false&doflg=ptm&hl=en&dirflg=d&output=embed'
	});
	aWebView.addEventListener('load', function(e) {
		Ti.API.info('webview loaded: '+ e.url);
	});
	
	$.mapview.add(aWebView);
	
	var mode = "d"; 
	var url = "http://maps.googleapis.com/maps/api/directions/json?origin="+me+"&destination="+destination+"&sensor=true&mode=DRIVING&waypoints=optimize:true|"+me+"|"+destination;
	//var url = "http://maps.google.com/maps?saddr="+me+"&daddr="+destination+"&f=d&sensor=true&doflg=ptm&hl=en&dirflg="+mode+"&output=kml";         
	 
	var xhr = Titanium.Network.createHTTPClient();
	xhr.open('GET',url);
	xhr.onload = function(e){
	    var xml = JSON.parse(this.responseText);
	    //var coords = xml.routes[0].legs[0].steps;	     
	    var points = [];
	    
	    for(var i=0;i<xml.routes.length; i++){
			var routes = xml.routes[i];
			for (var j=0; j < routes.legs.length; j++) {
				var legs = routes.legs[j];
				//points.push({latitude: legs.start_location.lat, longitude: legs.start_location.lng});
				//points.push({latitude: legs.end_location.lat, longitude: legs.end_location.lng});
				for (var k=0; k < legs.steps.length; k++) {
					var steps = legs.steps[k];
					
					var start = [steps.start_location.lat, steps.start_location.lng];
				  	points.push({latitude: steps.start_location.lat, longitude: steps.start_location.lng});
				  	
				  	var end = [steps.end_location.lat, steps.end_location.lng];
					points.push({latitude: steps.end_location.lat, longitude: steps.end_location.lng});
					
					
				};
			};
		};
				
	    var route = {name:'mapRoute', points:points, color: "blue", width:4};
	    mapa.addRoute(route);
	};
	xhr.send();*/
}

