const axios = require('axios');

module.exports = {
	name : 'bored',
	aliases : [],
	category: 'fun',
	description: 'Gives you a random instruction',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const url = 'https://www.boredapi.com/api/activity/';

		const response = await axios(url);

		msg.channel.send(`😩 Bored? 👉 **${response.data.activity}** 👈`);

	},
};
