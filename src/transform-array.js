const { NotImplementedError } = require("../extensions/index.js")

function transform(arr) {
	if (!Array.isArray(arr))
		throw new Error("'arr' parameter must be an instance of the Array!")

	const modded = [...arr].reduce(
		(acc, el) => {
			const current = acc.data.length

			switch (el) {
				case "--discard-next":
					acc.action = "discard"
					break

				case "--discard-prev":
					if (current > 0) acc.data[current - 1] = "*"
					break

				case "--double-next":
					acc.action = "double"
					break

				case "--double-prev":
					if (current > 0) {
						const double = acc.data[current - 1]
						if (double !== "*")
							acc.data.splice(current - 1, 0, double)
					}
					break

				default:
					if (acc.action) {
						if (acc.action === "double" && el !== "*")
							acc.data.push(el)

						if (acc.action === "discard") el = "*"

						acc.action = null
					}

					acc.data.push(el)
			}

			return acc
		},
		{ data: [], action: null }
	)

	return modded.data.filter((el) => el !== "*")
}

module.exports = {
	transform,
}
