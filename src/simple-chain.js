const { NotImplementedError } = require("../extensions/index.js")

const chainMaker = {
	chain: [],

	getLength() {
		return this.chain.length
	},
	addLink(value) {
		this.chain.push(`( ${value} )`)
		return this
	},
	removeLink(position) {
		if (
			position < 1 ||
			position > this.getLength() ||
			!Number.isInteger(position)
		) {
			this.chain = []
			throw new Error("You can't remove incorrect link!")
		}

		this.chain.splice(position - 1, 1)

		return this
	},
	reverseChain() {
		this.chain.reverse()
		return this
	},
	finishChain() {
		const data = this.chain.join("~~")
		this.chain = []
		return data
	},
}

module.exports = {
	chainMaker,
}
