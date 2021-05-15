const axios = require('axios');

module.exports = {
	name : 'math',
	aliases : [],
	category: 'fun',
	description: 'Gives you a random trivia on math',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const url = 'http://numbersapi.com/random/trivia';

		const response = await axios(url);

		msg.channel.send(`🔢 Did you know?  **${response.data}**`);

	},
};
