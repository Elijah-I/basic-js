const { NotImplementedError } = require("../extensions/index.js")

class DepthCalculator {
	calculateDepth(arr) {
		return Array.isArray(arr)
			? 1 + Math.max(0, ...arr.map((t) => this.calculateDepth(t)))
			: 0
	}
}

module.exports = {
	DepthCalculator,
}
