function deleteDigit(n) {
	arr = n.toString().split("")
	const variants = []

	for (i in arr) {
		const current = [...arr]
		current.splice(i, 1)
		variants.push(+current.join(""))
	}

	return Math.max(...variants)
}

module.exports = {
	deleteDigit
}
