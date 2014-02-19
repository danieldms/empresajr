var args = arguments[0] || {};


if(Titanium.Network.networkType != Titanium.Network.NETWORK_NONE){
	
	setTimeout(function() {
		Titanium.App.fireEvent('app:preload');
	}, 200);
	
	var webView = Ti.UI.createWebView({
	    url: 'http://www.youtube.com/embed/AsFCPsZyC2I?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0',
	    enableZoomControls: false,
	    scalesPageToFit: true,
	    scrollsToTop: false,
	    showScrollbars: false,
	    loading: true
	});
	
	webView.addEventListener('load', function() {
		Titanium.App.fireEvent('app:preload');
	});
	
	$.video.add(webView);
}else{
	alert('Conexão com a internet indisponível!');
}
