const Discord = require('discord.js');

module.exports = {
	name : 'koala',
	aliases : [],
	category: 'img',
	description: 'Shows a random koala image',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		let URL;
		const animals = require('random-animals-api');
		await animals.koala()
			.then(url => {
				URL = url;
				console.log(URL);

				const embed = new Discord.MessageEmbed()
					.setTitle('🐨 | Here is your koala!!')
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
