const Discord = require('discord.js');
const redditImageFetcher = require('reddit-image-fetcher');

module.exports = {
	name : 'memes',
	aliases : ['meme'],
	category: 'fun',
	description: 'Gives you a random memes',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {
		try{
			const data = await redditImageFetcher.fetch({ type: 'meme' });
			console.log(data[0]);

			const embed = new Discord.MessageEmbed()
				.setTitle(data[0].title)
				.setImage(data[0].image)
				.setColor('RANDOM')
				.setTimestamp();
			return msg.channel.send(embed);
		}
		catch(error) {
			msg.channel.send('Something went wrong!!');
			return console.error(error);
		}

	},
};
