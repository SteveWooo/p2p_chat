let swc = require('./modules/init_client')();
async function main(){
	console.log(swc)
	swc.client.net.client = await swc.client.net.init(swc);
}

try{
	main();
}catch(e){
	console.log(e)
}