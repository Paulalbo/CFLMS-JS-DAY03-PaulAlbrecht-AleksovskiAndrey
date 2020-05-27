
numberofminutes(200);

function numberofminutes (min){
	var hours = Math.round(min/60);
	var minutes = (min % 60);

	document.write(min + "minutes = " + hours + " hour(s) and " + minutes + " minute(s).");
}
