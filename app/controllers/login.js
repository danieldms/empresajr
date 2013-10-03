var args = arguments[0] || {};

$.button.add(args.backview); 

var util = require('util');

$.entrar.addEventListener('click', function(e){
		if (Ti.Platform.osname == "mobileweb") {
		    Ti.Network.httpURLFormatter = function(url) {
		        var m, newPrefix = window.location.protocol + "//" + window.location.hostname,
		            ports = {
		                "162.243.4.229": ":80" // leave blank for port 80 (Option 1)
		            };
		 
		        if (url.indexOf(newPrefix) == -1 && url.indexOf("://") != -1) {
		            if (m = url.match(/(https?)\:\/\/([^\:\/]*):?(\d*)(.*)/)) {
		                return newPrefix + ports[m[2]] + m[4];
		            }
		        }
		    };
		}
		
		 var client = Ti.Network.createHTTPClient({
		     // function called when the response data is available
		     onload : function(e) {
		         Ti.API.info("Received text: " + this.responseText);
		         Ti.API.info("Received text: " + this.status);
		     },
		     // function called when an error occurs, including a timeout
		     onerror : function(e) {
		         Ti.API.debug(e.error);
		     },
		     timeout : 5000  // in milliseconds
		 });
		
		var url = Ti.Network.httpURLFormatter(util.url);
		Ti.API.log(url);
		 // Prepare the connection.
		 client.open("POST",  url);
		 // Send the request.
		var params = {'username': $.username.value, 
					  'password': $.senha.value,
					  'type': 'mobile',
					  'class': 'login'};
		 client.send(params);
	
});

function isLogin(e){
	if(e.type == 'sucesso'){
		util.getProjeto(e.id, setProjeto);
	}else{
		if(e.type == 'error'){
			Ti.UI.createAlertDialog({title: e.type, message: e.message}).show();
		}
	}
};

function setProjeto(e){
	Ti.App.fireEvent('app:setLayout', {'layout':'sac', 'swipe': false, 'data': e });
};
