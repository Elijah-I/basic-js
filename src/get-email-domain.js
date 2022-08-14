function getEmailDomain(email) {
	return email.split("@").pop()
}

module.exports = {
	getEmailDomain
}
