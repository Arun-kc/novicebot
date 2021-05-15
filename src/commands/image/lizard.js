const Discord = require('discord.js');

module.exports = {
	name : 'lizard',
	aliases : [],
	category: 'img',
	description: 'Shows a random lizard image',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		let URL;
		const animals = require('random-animals-api');
		await animals.lizard()
			.then(url => {
				URL = url;
				console.log(URL);

				const embed = new Discord.MessageEmbed()
					.setTitle('🦎 | Here is your liazrd!!')
					.setImage(URL)
					.setColor('RANDOM')
					.setTimestamp();
				msg.channel.send(embed);
			})
			.catch((error) => {
				msg.channel.send('Sorry the image is not loading!!');
				return console.error(error);
			});

	},
};
