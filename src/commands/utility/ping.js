module.exports = {
	name: 'ping',
	aliases : [],
	category: 'utility',
	description: 'Show bot ping',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {
		msg.reply('🏓 Calculating ping.....').then((resultMsg) => {
			const ping = resultMsg.createdTimestamp - msg.createdTimestamp;
			resultMsg.edit(`🏓 **Bot Latency: ${ping}, WebSocket Latency: ${msg.client.ws.ping}** 🏓`);
		});
	},
};