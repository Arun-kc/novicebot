const Discord = require('discord.js');

module.exports = {
	name : 'lizard',
	async execute(msg) {

		let URL;
		const animals = require('random-animals-api');
		await animals.lizard()
			.then(url => URL = url)
			.catch((error) => console.error(error));

		console.log(URL);

		const embed = new Discord.MessageEmbed()
			.setTitle('Here is your liazrd!!')
			.setImage(URL)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};
