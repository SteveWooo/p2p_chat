const crypto = require("crypto");

/*
g.message = {
	content : "",
	sender : {
		public_key : ""
	}
}
*/

module.exports = (swc, g)=>{
	let message = g.message.content;
	let secret = swc.owner.computeSecret(Buffer.from(g.message.sender.public_key), null, "hex");
	let cipher = crypto.createDecipher("aes192", secret);
	let result = crypto.update(message, "hex", "utf8");
	result += cipher.final("utf8");
	return result;
}