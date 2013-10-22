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

function setRegion(evt) {
    // For the iOS platform, wait for the complete event to ensure the region is set
    if (false) {
        $.mapview.region = {
            latitude:37.390749, longitude:-122.081651,
            latitudeDelta:0.01, longitudeDelta:0.01
        };
    }
}

//$.mapview.region = {latitude:37.390749, longitude:-122.081651, latitudeDelta:0.01, longitudeDelta:0.01};
