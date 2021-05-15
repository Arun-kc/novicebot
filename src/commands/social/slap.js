const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
	name : 'slap',
	aliases : ['slaps'],
	category: 'gif',
	description: 'Shows a random slapping gif',
	async execute(client, msg, args) {

		const keywords = 'anime slap';
		const { member, mentions } = msg;

		const usersMap = mentions.users
			.sort((a, b) => b.position - a.position)
			.map(r => r.username)
			.join(',');

		const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;

		const response = await axios(url);

		const index = Math.floor(Math.random() * response.data.results.length);

		const media = response.data.results[index].media;
		const gif = media[0].gif.url;

		console.log(media[0].gif.url);
		console.log(mentions);
		console.log(args);
		if(args.length < 1 || args[0] === 'me' || args[0] === `<@!${member.id}>`) {
			const embed = new Discord.MessageEmbed()
				.setImage(gif)
				.setColor('RANDOM')
				.setTimestamp();
			msg.channel.send(embed);
		}
		else if(usersMap.length < 1) {
			msg.channel.send('You provided an **invalid member**. Type only the member');
		}
		else{
			const embed = new Discord.MessageEmbed()
				.setTitle(`🖐️ ${member.nickname} slaps ${usersMap} `)
				.setImage(gif)
				.setColor('RANDOM')
				.setTimestamp();
			msg.channel.send(embed);

		}
	},
};
