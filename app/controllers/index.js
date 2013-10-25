var currentView = null;
var currentMenu = null;
var direction = 'reset';
var touchStartX = 0;
var buttonPressed = false;
var touchRightStarted = false;

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
var backView = Ti.UI.createView({
	height: '50dp',
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

var backbutton = Ti.UI.createImageView({
	height: '15dp',
	width: '25dp',
	image: '/images/icons/menu.png'
});

backView.addEventListener('touchstart', function(e){
	this.backgroundColor = "#000";
	this.opacity = 0.2;
});

backView.addEventListener('touchend', function(e){
	this.backgroundColor = "transparent";
	this.opacity = 1;
	
	if(!touchRightStarted){
		buttonPressed = true;	
		toggleSlide(null);
	}
});

backView.add(backbutton);

function touchStart(){
	this.backgroundColor = "#000";
};

function touchEnd(){
	this.backgroundColor = 'transparent';
};

// Argumentos que são passados para cada controller
var args = {
	'backview': backView
};	

function clickMenu(){	
	if(this.subView == null){		
		var layout = null;
		if(this.restrito === "true" && Alloy.Globals.Usuario == null){			
			layout= "login"; 
		}else{
			layout = this.source;
		}
		
		Ti.App.fireEvent("app:setLayout", {'layout': layout });	
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

$.main.addEventListener('touchstart', function(e) {
	touchStartX = e.x;
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
	
	if(e.source.id != 'mapview' && e.source.id != "view" && e.source.id != 'scrollview'){
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
});

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

$.index.open();
