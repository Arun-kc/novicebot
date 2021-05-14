const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
	name : 'gif',
	category : 'fun',
	usage: '<Topic>',
	description: 'Shows a gif of the topic you mentioned or a random gif if topic is not specified.',
	async execute(client, msg, args) {

		let keywords = 'random';
		if(args.length > 0) {
			keywords = args.join(' ');
		}

		const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;

		const response = await axios(url);

		const index = Math.floor(Math.random() * response.data.results.length);

		const media = response.data.results[index].media;
		const gif = media[0].gif.url;
		console.log(media[0].gif.url);

		const embed = new Discord.MessageEmbed()
			.setImage(gif)
			.setColor('RANDOM')
			.setTimestamp();
		msg.channel.send(embed);


	},
};