function encodeLine(str) {
	return Array.from(str)
		.reduce((acc, el, i, base) => {
			if (i > 0 && el === base[i - 1]) acc[acc.length - 1] += el
			else acc.push(el)
			return acc
		}, [])
		.map((el) => (el.length === 1 ? el : `${el.length}${el[0]}`))
		.join("")
}

module.exports = {
	encodeLine
}
