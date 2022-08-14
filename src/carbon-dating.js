const { NotImplementedError } = require("../extensions/index.js")

const LOG_OF_TWO = 0.693
const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

function dateSample(sampleActivity) {
	const data = parseFloat(sampleActivity)

	if (typeof sampleActivity !== "string") return false
	if (isNaN(data) || data < 1 || data > 15) return false

	return Math.ceil(
		(Math.log(MODERN_ACTIVITY / data) * HALF_LIFE_PERIOD) / LOG_OF_TWO
	)
}

module.exports = {
	dateSample,
}
