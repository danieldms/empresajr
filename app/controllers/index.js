var currentView = null;
var currentMenu = null;
var direction = 'left';

// Referente ao Button superior que abre o slide do menu
var backView = Ti.UI.createView({
	height: '50dp',
	width: '50dp',
	left: 0
});

var backbutton = Ti.UI.createImageView({
	height: '15dp',
	width: '25dp',
	image: 'images/icons/menu.png'
});

backView.addEventListener('click', function(e){
	Ti.App.fireEvent('app:swipe');
});

backView.addEventListener('touchstart', function(e){
	this.backgroundColor = "#000";
	this.opacity = 0.2;
});

backView.addEventListener('touchend', function(e){
	this.backgroundColor = "transparent";
	this.opacity = 1;
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
		if(this.restrito === "true"){			
			layout= "login"; 
		}else{
			layout = this.id;
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
		var spin = Titanium.UI.createAnimation({duration: 100});
		if(this.subView == 'sub_mkt'){
			var	sub = $.sub_mkt; 
		}
		
		if(this.toggle === "false"){
			this.toggle = "true";
			t = t.rotate(180);
			sub.setHeight(160);
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

// Funcao que abre o slide do menu
function swipe(direct){
	if(direct != direction && direction == 'left'){
		$.main.animate({
			left: 260,
			duration: 400
		});
		direction = 'right';
	}
	
	if(direct != direction && direction == 'right'){
		$.main.animate({
			left: 0,
			duration: 400
		});
		direction = 'left';
	}	
};

$.index.addEventListener('swipe', function(e){
	if(e.direction == "left" || e.direction == "right"){
		swipe(e.direction);
	}
});

Ti.App.addEventListener("app:swipe", function(e){
	if(direction == 'left'){
		swipe('right');
	}else{
		swipe('left');
	}
});

Ti.App.addEventListener("app:setLayout", function(e){	
	var view = Alloy.createController(e.layout, args).getView();
	
	$.main.add(view);
	$.main.remove(currentView);

	currentView = view;
	view = null;
	
	if(e.swipe == null){
		Ti.App.fireEvent("app:swipe", null);
	}
});

if(currentView == null){
	currentView = Alloy.createController("mainView", args).getView();
	$.main.add(currentView);
};

if (Ti.UI.Android){
  $.index.windowSoftInputMode = Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
}
$.index.open();
