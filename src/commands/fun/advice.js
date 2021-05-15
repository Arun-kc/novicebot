const axios = require('axios');

module.exports = {
	name : 'advice',
	aliases : [],
	category: 'fun',
	description: 'Gives you a random advice',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const url = 'https://api.adviceslip.com/advice';

		const response = await axios(url);

		const result = response.data.slip.advice;

		msg.channel.send(`💁 My advice is: **${result}** 💯`);

	},
};
