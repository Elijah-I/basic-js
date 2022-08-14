function getCommonCharacterCount(s1, s2) {
	let left = s2
	for (char of Array.from(s1)) left = left.replace(char, "")

	return s2.length - left.length
}

module.exports = {
	getCommonCharacterCount
}
