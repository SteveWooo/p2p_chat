const crypto = require("crypto");

/*
g.message = {
	content : "",
	receiver : {
		public_key : ""
	}
}
*/

module.exports = (swc, g)=>{
	let message = g.message.content;
	let secret = swc.owner.computeSecret(Buffer.from(g.message.receiver.public_key), null, "hex");
	let cipher = crypto.createDecipher("aes192", secret);
	let result = crypto.update(message, "utf8", "hex");
	result += cipher.final("utf8");
	return result;
}