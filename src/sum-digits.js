function getSumOfDigits(n) {
	let sum = n
		.toString()
		.split("")
		.reduce((a, b) => +a + +b)

	if (sum > 9) return getSumOfDigits(sum)
	else return sum
}

module.exports = {
	getSumOfDigits
}
