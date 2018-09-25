module.exports = async(swc, g, data)=>{
	data = JSON.stringify(data);

	global.swc.p2p.nodes.map(node=>{
		swc.client.net.client.send(data, node.port, node.ip, ()=>{
			
		})
	})
}