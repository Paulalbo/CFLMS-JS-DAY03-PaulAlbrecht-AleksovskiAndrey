
document.write("<strong>" + multiply([1, 3, 7, 10, 2]) + "</strong>");


function multiply (array) {
	var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
