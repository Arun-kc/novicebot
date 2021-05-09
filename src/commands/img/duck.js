const Discord = require('discord.js');

module.exports = {
	name : 'duck',
	async execute(msg) {

		let URL;
		const animals = require('random-animals-api');
		await animals.duck()
			.then(url => URL = url)
			.catch((error) => console.error(error));

		console.log(URL);

		const embed = new Discord.MessageEmbed()
			.setTitle('Here is your duck!!')
			.setImage(URL)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};
