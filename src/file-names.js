function renameFiles(names) {
	return names.reduce((acc, file) => {
		if (acc.includes(file)) {
			let last = 0
			for (renamed of acc)
				if (renamed.indexOf(file) === 0) {
					const tryLast = renamed
						.replace(file, "")
						.replace("(", "")
						.replace(")", "")

					if (tryLast.indexOf("(") < 0) last = +tryLast
				}

			acc.push(`${file}(${last + 1})`)
		} else acc.push(file)

		return acc
	}, [])
}

module.exports = {
	renameFiles
}
