

grades([3,4,5]);

function grades (array) {
	var total=0;
    for (var i=0; i<array.length; i++) {
        total = total + array[i];
    } 
    var avg = total / array.length;

    document.write("Sum: " + total + "<br>");
	document.write("Average: " + avg);
}
