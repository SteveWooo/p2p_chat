module.exports = async (swc, msg, info)=>{
	let g = {
		data : msg,
		info : info
	}

	if(!g.data.callback || !(g.data.callback in swc.client.net.receiver.callback)){
		//丢
		return ;
	}

	try{
		res = await swc.client.net.receiver.callback[g.data.callback](swc, g);
	}catch(e){
		console.log(e);
	}
}