module.exports = ()=> {
	var config = require("../config");
	config.net.port = process.argv[2] == undefined ? process.argv[2] : config.net.port;

	global = {
		swc : {
			p2p : {
				nodes : []
			},
			mq : {
				list : []
			}
		}
	}

	config.p2p.default_nodes.map(node=>{
		global.swc.p2p.nodes.push(node);
	})

	return {
		config : config,
		client : {
			utils : {
				msg_decode : require("./utils/msg_decode"),
				msg_encode : require("./utils/msg_encode")
			},
			net : {
				init : require("./net_layer/init"),
				actions : {},
				receiver : {
					entry : require("./net_layer/receiver/entry"),
					callback : {
						heart_break : require("./net_layer/receiver/heart_break"),
					}
				},
				client : {},
			}
		}
	}
}