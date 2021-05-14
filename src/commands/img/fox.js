const Discord = require('discord.js');

module.exports = {
	name : 'fox',
	aliases : [],
	category: 'img',
	description: 'Shows a random fox image',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		let URL;
		const animals = require('random-animals-api');
		await animals.fox()
			.then(url => URL = url)
			.catch((error) => console.error(error));

		console.log(URL);

		const embed = new Discord.MessageEmbed()
			.setTitle('🦊 | Here is your fox!!')
			.setImage(URL)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};
