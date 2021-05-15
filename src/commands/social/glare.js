const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
	name : 'glare',
	aliases : [],
	category: 'gif',
	description: 'Shows a random glaring gif',
	async execute(client, msg, args) {

		const keywords = 'anime glare';
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
				.setTitle(`👁️ ${member.nickname || member.user.username} glares at themselves`)
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
				.setTitle(`👁️ ${member.nickname || member.user.username} glares at ${usersMap} 👁️`)
				.setImage(gif)
				.setColor('RANDOM')
				.setTimestamp();
			msg.channel.send(embed);

		}
	},
};
