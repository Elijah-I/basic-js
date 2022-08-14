const { NotImplementedError } = require("../extensions/index.js")

function repeater(str, opts) {
	const options = {
		repeatTimes: 1,
		separator: "+",
		addition: "",
		additionRepeatTimes: 1,
		additionSeparator: "|",
		...opts
	}

	const fill = (t, f, s) => {
		return t ? new Array(t).fill(`${f}`).join(s) : ""
	}

	const suffix = fill(
		options.additionRepeatTimes,
		options.addition,
		options.additionSeparator
	)

	const line = fill(options.repeatTimes, str + suffix, options.separator)

	return line
}

module.exports = {
	repeater
}
