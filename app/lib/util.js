var url = "http://162.243.4.229/servidor/empresajr/processa.php";
var usuario = [];
var result = {};
var xhr = Ti.Network.createHTTPClient();

exports.login = function(username, password, _callback){
	if(usuario.length == 0){	
		var params = {'username': username, 
				  'password': password,
		  		  'type': 'mobile',
				  'class': 'login'};
		doPost(params, _callback);
	}	
};

exports.logout = function(){
	usuario = {};
};

function doPost(params, _callback) {

	if (Ti.Platform.osname == "mobileweb") {
		if (window.XMLHttpRequest){
	  		xhr=new XMLHttpRequest();
	  	}else{
	  		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	  	}
	  	
	  	xhr.onreadystatechange = function(){
			if (xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText != null){
					var json = JSON.parse(xhr.responseText);
					if(_callback){
						_callback(json);
					} 
				}
		    }
	  	};
	  	
	  	var data = '?';
		for (var prop in params) {
	      data += prop+"="+params[prop]+"&";
	   	}
	  	
		xhr.open("POST", url + data);			
		xhr.send();
		
	}else{
		xhr.onload = function(e){
			if(e != null){
				var json = JSON.parse(this.responseText);
				if(_callback){
					_callback(json);
				} 
			}
		};	
			
		xhr.open("POST", url);
		xhr.send(params) ;
	}
};

exports.url = url;

exports.getProjeto = function(_id, _callback){
	if(_id != null){
		xhr.open("POST", url);
		var params = {'usuarios_id': _id, 
					  'type': 'mobile',
					  'class': 'getProjeto'};
		xhr.send(params);
		
		xhr.onload = function(e){
			if(e != null){
			var json = JSON.parse(this.responseText);
				if(_callback){
					_callback(json);
				} 
			}
		};

	}	
};

exports.getUsuario = usuario;
