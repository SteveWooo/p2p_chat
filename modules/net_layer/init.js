const dgram = require("dgram");

function init_udp_client(swc){
	let client = dgram.createSocket("udp4");
	client.bind (swc.config.net.port);
	client.on("error", (e)=>{
		console.log(e);//handle error
	})

	client.on("message", async (msg, info)=>{
		try{
			msg = JSON.parse(msg.toString());
		}catch(e){
			console.log(e);
		}

		await swc.client.net.receiver.entry(swc, msg, info);
	})
}

module.exports = async (swc)=>{
	let client = init_udp_client(swc);
	return client;
}