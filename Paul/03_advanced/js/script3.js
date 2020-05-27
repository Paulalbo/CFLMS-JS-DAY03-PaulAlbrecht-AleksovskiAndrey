function changeBackground (colors) {
	let min = 1; 
	let max = 256;
	var randomNum1 = Math.floor(Math.random() * max)+ min;
	var randomNum2 = Math.floor(Math.random() * max)+ min;
	var randomNum3 = Math.floor(Math.random() * max)+ min;
	
	var bgcolor = "rgb(" + randomNum1 + "," + randomNum2 + "," + randomNum3 + ")"
console.log(bgcolor)

	document.getElementById("changecolor").style.backgroundColor = bgcolor;
};

changeBackground();
