var currentView = null;
var currentMenu = null;
var direction = 'reset';
var touchStartX = 0;
var buttonPressed = false;
var touchRightStarted = false;
var pre = 0;
var titleHeight = '44dp';

//animation for open the slidemenu
var animateRight = Ti.UI.createAnimation({
	left : 250,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var animateReset = Ti.UI.createAnimation({
	left : 0,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

// Referente ao Button superior que abre o slide do menu
var leftButton = Ti.UI.createView({
	top: 0,
	height: '44dp',
	width: '50dp',
	left: 0
});

var borda1 = Ti.UI.createView({
	width: 1, height: '50dp', top: 0, right: 1,
	backgroundColor: "##0C376E"
});

var borda2 = Ti.UI.createView({
	width: 1, height: '50dp', top: 0, right: 0,
	backgroundColor: "#303030"
});

var iconLeftButton = Ti.UI.createImageView({
	height: '15dp',
	width: '25dp',
	image: '/images/icons/menu.png'
});

leftButton.addEventListener('touchstart', function(e){
	iconLeftButton.opacity = 0.2;
});

leftButton.addEventListener('touchend', function(e){
	iconLeftButton.opacity = 1;
	
	if(!touchRightStarted){
		buttonPressed = true;	
		toggleSlide(null);
	}
});

leftButton.add(iconLeftButton);

var header = Ti.UI.createView({
	height: '44dp', width: '100%', backgroundColor: "#105A99",
	top: 0, left: 0
});

var title = Ti.UI.createLabel({
	height: "44dp", 
	font: {fontSize: "18dp", fontWeight: "bold"}, 
	color: "#FFF", 
	textAlign: "center", 
	shadowColor: "#000",
	shadowOffset: {	x: "0dp", y: "1dp"},
});

if (Ti.Platform.name === 'iPhone OS'){
	var version = Titanium.Platform.version.split(".");
	var major = parseInt(version[0]);
	
	if(major >= 7){
		// MENU
		$.itemsMenu.setTop('20dp');
		
		//TITULOS DAS VIEWS
		titleHeight = '64dp';
		var space = Ti.UI.createView({
			top: '20dp', height: '44dp', left: 0, width: '100%'
		});
		
		leftButton.setHeight('44dp');
		title.setHeight('44dp');
		header.setHeight(titleHeight);
		
		space.add(leftButton);
		space.add(title);
		header.add(space);
	}else{
		header.add(leftButton);
		header.add(title);
	}
}else{
	header.add(leftButton);
	header.add(title);
}

$.menuNavView.setHeight(titleHeight);

// Argumentos que são passados para cada controller
var args = {
	'headers': header,
	'height' : titleHeight,
};	

function touchStart(){
	this.backgroundColor = "#000";
};

function touchEnd(){
	this.backgroundColor = 'transparent';
};

function clickMenu(){	
	if(this.subView == null){		
		var layout = null;
		if(this.restrito === "true" && Alloy.Globals.Usuario == null){			
			layout= "login"; 
		}else{
			layout = this.source;
		}
		
		Ti.App.fireEvent("app:setLayout", {'layout': layout, 'title': this.title });	
		layout = null;
					
		if(currentMenu != null && currentMenu != this){
			currentMenu.backgroundColor = 'transparent';
		}
		currentMenu = this;				
	}else{
		// Spin the image
		var t = Ti.UI.create2DMatrix();
		var	sub = null;
		var spin = Titanium.UI.createAnimation({duration: 100});
		if(this.subView == 'sub_mkt'){
			sub = $.sub_mkt; 
		}else{
			if(this.subView == 'sub_fin'){
				sub = $.sub_fin; 
			}else{
				if(this.subView == 'sub_org'){
					sub = $.sub_org; 
				}else{
					if(this.subView == 'sub_gestao'){
						sub = $.sub_gestao; 
					}else{
						if(this.subView == 'sub_abrir'){
							sub = $.sub_abrir; 
						}
					}
				}
			}
		}		
		
		if(this.toggle === "false"){
			this.toggle = "true";
			t = t.rotate(180);
			sub.setHeight(sub.expand);
			spin.transform = t;
			this.children[1].animate(spin);
		}else{
			this.toggle = "false";	
			t = t.rotate(0);
			sub.setHeight(0);
			spin.transform = t;
			this.children[1].animate(spin);		
		}		
	}	
}
/*
$.main.addEventListener('touchstart', function(e) {
	//touchStartX = e.x;
});

$.main.addEventListener('touchend', function(e){
	if(buttonPressed){
		buttonPressed = false;
		return;
	}
	
	if($.main.left >= 150 && touchRightStarted){
		direction = 'right';
		$.main.animate(animateRight);
	}else if($.main.left <= 150){
		direction = 'reset';
		$.main.animate(animateReset);
	}
	
	touchRightStarted = false;
});

$.main.addEventListener('touchmove', function(e){
	var x = '';
	try{
		x = e.source.getParent().getParent().ignore;
	}catch(err){
	}
	
	if((e.source.ignore == null || e.source.ignore == 'undefined') && (x == null || x == 'undefined') ){
		var coords = $.main.convertPointToView({
			x : e.x,
			y : e.y
		}, $.index);
		
		var newLeft = coords.x - touchStartX;
		if(newLeft > 25){
			if ((touchRightStarted && newLeft <= 250 && newLeft >= 0)) {
				$.main.left = newLeft;
			}else{
				// Sometimes newLeft goes beyond its bounds so the view gets stuck.
				// This is a hack to fix that.
				if ((touchRightStarted && newLeft < 0)) {
					$.main.left = 0;
				}
				else if (touchRightStarted && newLeft > 250) {
					$.main.left = 250;
				}	
			}
			
			if (newLeft > 5 && !touchRightStarted) {
				touchRightStarted = true;
			}	
		}	
	}
});*/

function toggleSlide(e){
	if(direction == 'reset'){
		direction = 'right';
		$.main.animate(animateRight);
	}else{
		direction = 'reset';
		$.main.animate(animateReset);
	}
}

Ti.App.addEventListener('app:toggle', function(e){
	if(!touchRightStarted){
		buttonPressed = true;	
		toggleSlide(null);
	}
});

Ti.App.addEventListener("app:setLayout", function(e){
	title.text = e.title;
	
	var view = Alloy.createController(e.layout, args).getView();
	
	$.main.add(view);
	$.main.remove(currentView);

	currentView = view;
	view = null;
	
	if(e.swipe == null){
		toggleSlide(null);
	}
});

if(currentView == null){
	currentView = Alloy.createController("mainView", args).getView();
	$.main.add(currentView);
};

var style;

if (Ti.Platform.name === 'iPhone OS'){
	style = Titanium.UI.iPhone.ActivityIndicatorStyle.BIG;
}else {
	style = Titanium.UI.ActivityIndicatorStyle.PLAIN;
}

$.activityIndicator.style = style;

$.wait.hide();

Ti.App.addEventListener('app:preload', function(e){
	if(pre == 1){
		$.activityIndicator.hide();
		$.wait.hide();
		pre = 0;
	}else{
		$.wait.show();
		$.activityIndicator.show();
		pre = 1;
	}
});
	
Alloy.Globals.preload = $.activityIndicator;

$.index.open();
