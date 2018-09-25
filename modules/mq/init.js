async function run(swc)=>{
	let task = global.swc.mq.list.shift();
	if(task == undefined){
		return ;
	}
	try{
		task.callback(swc, task.data);
	}catch(e){
		console.log(e.message);
	}

	setTimeout(async ()=>{
		try{
			await run(swc);
		}catch(e){

		}
	}, swc.config.mq.span)
}

module.exports = async(swc)=>{
	await run(swc);
}