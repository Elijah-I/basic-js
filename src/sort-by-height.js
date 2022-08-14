function sortByHeight(arr) {
	const base = [...arr]
	const filtered = arr.filter((el) => el !== -1).sort((a, b) => a - b)
	for (pos in base) if (base[pos] === -1) filtered.splice(pos, 0, -1)
	return filtered
}

module.exports = {
	sortByHeight
}
