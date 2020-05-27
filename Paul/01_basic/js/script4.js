
degreesconverter ("90")

function degreesconverter (degrees) {
	var radians = degrees * (Math.PI/180)
	radians = radians.toFixed(5);
	document.write("<strong>" + degrees + " degrees</strong>" + " are " + "<strong>" + radians + " radians. </strong>")
}
