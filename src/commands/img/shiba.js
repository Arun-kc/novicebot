const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name : 'shiba',
	async execute(msg) {

		const url = 'http://shibe.online/api/shibes';
		const response = await fetch(url);
		const json = await response.json();

		console.log(json[0]);
		const img = json[0];

		const embed = new Discord.MessageEmbed()
			.setTitle('Here is your shiba!!')
			.setImage(img)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};
