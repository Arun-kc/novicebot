module.exports = {
	name: 'ping',
	description: '',
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
		msg.reply('🏓 Calculating ping.....').then((resultMsg) => {
			const ping = resultMsg.createdTimestamp - msg.createdTimestamp;
			resultMsg.edit(`🏓 **Bot Latency: ${ping}, API Latency: ${msg.client.ws.ping}** 🏓`);
		});
	},
};