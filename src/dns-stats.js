const { NotImplementedError } = require("../extensions/index.js")

function getDNSStats(domains) {
	return domains.reduce((res, domain) => {
		let useDomain = ""
		subDomains = domain.split(".").reverse()

		for (subDomain of subDomains) {
			useDomain += `.${subDomain}`
			if (!res[useDomain]) res[useDomain] = 0
			res[useDomain]++
		}

		return res
	}, {})
}

module.exports = {
	getDNSStats
}
