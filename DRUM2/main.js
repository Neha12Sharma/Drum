var numberOfDrumButtons = document.querySelectorAll(".drum").length; 
for ( i = 0; i < numberOfDrumButtons; i++) { 

document.querySelectorAll(".drum")[i].addEventListener("click", function handleclick() { 

	var buttonStyle = this.innerHTML; 
	sound(buttonStyle); 
	animation(buttonStyle); 
}); 
} 

document.addEventListener("keypress", function(event) { 
sound(event.key);
animation(event.key); 
}); 

function sound(key){ 
switch (key) { 
	case "w": 
	var sound1 = new Audio("sounds/crash.mp3"); 
	sound1.play(); 
	break; 

	case "a": 
	var sound2 = new Audio("DRUM2/Sounds/kick-bass.mp3"); 
	sound2.play(); 
	break; 

	case "s": 
	var sound3 = new Audio("DRUM2/Sounds/snare.mp3"); 
	sound3.play(); 
	break; 

	case "d": 
	var sound4 = new Audio("DRUM2/Sounds/tom-1.mp3"); 
	sound4.play(); 
	break; 

	case "j": 
	var sound5 = new Audio("DRUM2/Sounds/tom-2.mp3"); 
	sound5.play(); 
	break; 

	default: console.log(key); 
} 
} 

function animation(currentKey) { 
var activeButton = document.querySelector("." + currentKey); 
activeButton.classList.add("animation"); 

setTimeout(function() { 
	activeButton.classList.remove("animation"); 
}, 100); 
}