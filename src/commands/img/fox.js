const Discord = require('discord.js');

module.exports = {
	name : 'fox',
	async execute(msg) {

		let URL;
		const animals = require('random-animals-api');
		await animals.fox()
			.then(url => URL = url)
			.catch((error) => console.error(error));

		console.log(URL);

		const embed = new Discord.MessageEmbed()
			.setTitle('Here is your fox!!')
			.setImage(URL)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};
