function getMatrixElementsSum(matrix) {
	let total = 0

	for (rowOrder in matrix) {
		const row = matrix[rowOrder]

		if (rowOrder == 0) {
			total = row.reduce((a, b) => a + b)
		} else {
			const prewRow = matrix[rowOrder - 1]

			for (inRowOrder in row)
				if (prewRow[inRowOrder] !== 0) total += row[inRowOrder]
		}
	}

	return total
}

module.exports = {
	getMatrixElementsSum
}
