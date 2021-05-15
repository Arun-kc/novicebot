module.exports = {
	name: 'flip',
	category: 'fun',
	aliases : ['flips'],
	description: 'Flips a coin',
	// eslint-disable-next-line no-unused-vars
	execute(client, msg, args) {

		return msg.channel.send(Math.random() > 0.5 ? '🪙 **Heads!!** 🪙' : '🪙 **Tails!!** 🪙');

	},
};