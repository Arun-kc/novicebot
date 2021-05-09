const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
	name : 'shiba',
	async execute(msg) {

		const url = 'http://shibe.online/api/shibes';
		const response = await axios.get(url);
		console.log(response.data[0]);

		const img = response.data[0];

		const embed = new Discord.MessageEmbed()
			.setTitle('Here is your shiba!!')
			.setImage(img)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);

	},
};
