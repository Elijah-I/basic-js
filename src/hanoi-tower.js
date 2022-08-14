const { NotImplementedError } = require("../extensions/index.js")

function calculateHanoi(disksNumber, turnsSpeed) {
	const turns = 2 ** disksNumber - 1
	const seconds = Math.floor((turns / turnsSpeed) * 3600)
	return { turns, seconds }
}

module.exports = {
	calculateHanoi,
}
