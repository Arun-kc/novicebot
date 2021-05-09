const Discord = require('discord.js');

module.exports = {
	name : 'cat',
	async execute(msg) {

		let URL;
		const animals = require('random-animals-api');
		await animals.cat()
			.then(url => URL = url)
			.catch((error) => console.error(error));

		console.log(URL);

		const embed = new Discord.MessageEmbed()
			.setTitle('Here is your cat!!')
			.setImage(URL)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};
