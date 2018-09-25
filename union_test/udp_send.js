const dgram = require("dgram");
let client = dgram.createSocket("udp4");

const config = {
	ip : "127.0.0.1",
	port : "8001"
}

let message = {
	callback : "heart_break",
	content : "hello"
};

client.send(JSON.stringify(message), config.port, config.ip, (err)=>{
	client.close();
})
