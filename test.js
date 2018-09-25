const crypto = require("crypto");

let alice = crypto.createECDH("secp256k1");
let bob = crypto.createECDH('secp256k1');

alice.generateKeys();
bob.generateKeys();

var file = "hello world";

function encrypto(data, owner, receiver_publickey){
	let result = "";
	let secret = owner.computeSecret(Buffer.from(receiver_publickey, 'hex'), null, 'hex');

	let cipher = crypto.createCipher("aes192", secret);
	result = cipher.update(data, "utf8", "hex");
	result += cipher.final("hex");
	return result;
}

function decrypto(data, receiver, sender_publickey){
	let secret = receiver.computeSecret(Buffer.from(sender_publickey, "hex"), null, "hex");
	let cipher = crypto.createDecipher("aes192", secret);
	let result = cipher.update(data, "hex", "utf8");
	result += cipher.final("utf8");
	console.log(result);
}

//alice 发送
let sec_message = encrypto(file, alice, bob.getPublicKey("hex"));

//bob接受
let result = decrypto(sec_message, bob, alice.getPublicKey("hex"));

// console.log(key)