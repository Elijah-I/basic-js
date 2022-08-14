class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect
		this.lengthABC = 26
		this.startPosition = 65
	}

	config(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!")
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		if (message.length > key.length) {
			key = key.repeat(Math.ceil(message.length / key.length))
		}

		this.message = message
		this.key = key
	}

	encrypt(message, key) {
		this.config(message, key)

		let res = ""
		let indent = 0

		for (let i = 0; i < this.message.length; i++) {
			const char = this.message.charCodeAt(i) - this.startPosition
			const shift = this.key.charCodeAt(i - indent) - this.startPosition

			if (char < 0 || char > this.lengthABC) {
				res += this.message[i]
				indent++
			} else {
				res += String.fromCharCode(
					((char + shift) % this.lengthABC) + this.startPosition
				)
			}
		}

		return this.isDirect ? res : res.split("").reverse().join("")
	}
	decrypt(message, key) {
		this.config(message, key)

		let res = ""
		let indent = 0

		for (let i = 0; i < this.message.length; i++) {
			const char = this.message.charCodeAt(i) - this.startPosition
			const shift = this.key.charCodeAt(i - indent) - this.startPosition

			if (char < 0 || char > this.lengthABC) {
				res += this.message[i]
				indent++
			} else {
				res += String.fromCharCode(
					((char - shift + this.lengthABC) % this.lengthABC) +
						this.startPosition
				)
			}
		}

		return this.isDirect ? res : res.split("").reverse().join("")
	}
}

module.exports = {
	VigenereCipheringMachine
}
