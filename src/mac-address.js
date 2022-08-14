function isMAC48Address(n) {
	const parts = n.split("-")
	return (
		parts.length === 6 &&
		parts.every((part) => /[0-9A-F]{2}/.test(part.toUpperCase()))
	)
}

module.exports = {
	isMAC48Address
}
