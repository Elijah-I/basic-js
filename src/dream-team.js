const { NotImplementedError } = require("../extensions/index.js")

function createDreamTeam(members) {
	if (!Array.isArray(members)) return false

	return members
		.filter((el) => typeof el === "string")
		.map((el) => el.toUpperCase().trim()[0])
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.join("")
}

module.exports = {
	createDreamTeam,
}
