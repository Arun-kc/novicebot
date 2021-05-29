const Discord = require('discord.js');
const redditImageFetcher = require('reddit-image-fetcher');

module.exports = {
	name : 'jokes',
	aliases : ['joke'],
	category: 'fun',
	description: 'Gives you a random jokes',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {
		try{
			const data = await redditImageFetcher.fetch({ type: 'custom', subreddit: ['funny', 'dadjoke', 'cleanjoke', 'CrappyDesign', 'wtf', 'PhotoshopBattles'] });
			console.log(data[0]);

			const embed = new Discord.MessageEmbed()
				.setTitle(data[0].title)
				.setImage(data[0].image)
				.setColor('RANDOM')
				.setFooter(`Subreddit: ${data[0].subreddit}`, 'http://clipart-library.com/images_k/reddit-transparent/reddit-transparent-14.png')
				.setTimestamp();
			return msg.channel.send(embed);
		}
		catch(error) {
			msg.channel.send('Something went wrong!!');
			return console.error(error);
		}

	},
};
