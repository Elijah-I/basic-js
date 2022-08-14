function minesweeper(matrix) {
	const check = (row, pos, self) => {
		let mines = 0
		if (row) {
			if (row[+pos - 1]) mines++
			if (row[+pos + 1]) mines++
			if (self && row[pos]) mines++
		}
		return mines
	}

	return matrix.reduce((acc, row, i, base) => {
		const prewRow = base[i - 1]
		const nextRow = base[i + 1]

		const settedRow = []

		for (pos in row) {
			let mines = 0

			mines += check(row, pos, false)
			mines += check(prewRow, pos, true)
			mines += check(nextRow, pos, true)

			settedRow.push(mines)
		}

		acc.push(settedRow)

		return acc
	}, [])
}

module.exports = {
	minesweeper
}
