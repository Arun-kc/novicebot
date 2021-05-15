const Discord = require('discord.js');
const fetch = require('node-fetch');

async function getJson(response) {
	const json = await response.json();
	return json;
}

module.exports = {
	name: 'githubstats',
	aliases : [],
	usage: '<Github Username>',
	category: 'utility',
	description: 'Shows github stats',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {
		const user = args[0];
		if(args.length < 1) {
			return msg.channel.send('**Please provide a username!**');
		}
		const url = `https://api.github.com/users/${user}`;
		const response = await fetch(url);
		const json = await getJson(response);
		console.log(json);

		const responseStaredRepos = await fetch(`https://api.github.com/users/${json.login}/starred`);
		const noOfStaredRepos = await getJson(responseStaredRepos);

		const responseTotalRepos = await fetch(`https://api.github.com/users/${json.login}/repos`);
		const noOfTotalRepos = await getJson(responseTotalRepos);

		const githubEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`Github stats of ${json.login}`)
			.setURL(json.html_url)
			.setThumbnail(json.avatar_url)
			.addFields(
				{ name: 'Bio : ', value : json.bio },
				{ name: 'Followers', value: json.followers, inline: true },
				{ name: 'Following', value: json.following, inline: true },
				{ name: `Stared Repositories : ${noOfStaredRepos.length}`, value: '\u200B' },
				{ name: `Public Repositores : ${json.public_repos}`, value: '\u200B' },
				{ name: `Total Repositores : ${noOfTotalRepos.length}`, value: '\u200B' },
			)
			.setTimestamp();

		msg.channel.send(githubEmbed);

	},

};