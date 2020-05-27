var currentTime = new Date()
var year = currentTime.getFullYear()

ageCalculator("1996")

function ageCalculator(birth_year) {
	var age = year-birth_year
	var secage = age - 1
	document.write("You are either <strong>" + secage + "</strong> or <strong>" + age + "</strong> years old.")
}
