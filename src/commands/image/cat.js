const Discord = require('discord.js');

module.exports = {
	name : 'cat',
	aliases:['kitty'],
	category: 'img',
	description: 'Shows a random cat image',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		let URL;
		const animals = require('random-animals-api');
		await animals.cat()
			.then(url => URL = url)
			.catch((error) => console.error(error));

		console.log(URL);

		const embed = new Discord.MessageEmbed()
			.setTitle('🐈 | Here is your cat!!')
			.setImage(URL)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};
