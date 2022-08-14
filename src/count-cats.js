const { NotImplementedError } = require("../extensions/index.js")

function countCats(matrix) {
	const flat = matrix.flat()
	return flat.reduce((acc, el) => (acc += el === "^^"), 0)
}

module.exports = {
	countCats,
}
