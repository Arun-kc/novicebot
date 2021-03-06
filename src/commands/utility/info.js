const Discord = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
	name: 'info',
	aliases : ['botinfo'],
	category: 'utility',
	description: 'Returns the bots informations',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		let totalMembers = 0;

		for(const guild of client.guilds.cache) {
			totalMembers += await guild[1].members.guild.memberCount;
		}

		const { users, guilds, channels } = client;

		let totalSeconds = (client.uptime / 1000);
		const days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		const hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = Math.floor(totalSeconds % 60);

		const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;


		const embed = new Discord.MessageEmbed()
			.setAuthor(`⚔️ ${client.user.username} ⚔️`, client.user.displayAvatarURL())
			.setColor('#1f782f')
			.setThumbnail(`https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png`)
			.addFields(
				{
					name: 'Creator',
					value: 'blacksheep#1200',
					inline: true,
				},
				{
					name: 'Version',
					value: version,
					inline: true,
				},
				{
					name: 'Servers',
					value: guilds.cache.size,
					inline: true,
				},
				{
					name: 'Users',
					value: users.cache.size,
					inline: true,
				},
				{
					name: 'Members',
					value: totalMembers,
					inline: true,
				},
				{
					name: 'Channels',
					value: channels.cache.size,
					inline: true,
				},
			)
			.addFields(
				{
					name: 'Uptime',
					value: uptime,
					inline: true,
				},
				{
					name: 'Library',
					value: 'Discord.js',
					inline: true,
				},
			)
			.addFields(
				{
					name: 'Website',
					value: '[Im Cool right??](https://zorobot.vercel.app/)',
				},
				{
					name: 'Support Server',
					value: 'coming soon...',
				},
				{
					name: 'Invite Link',
					value: '[Invite Me!!](https://top.gg/bot/831858970401701898/invite/)',
				},
				{
					name: 'Sponsor',
					value: 'coming soon...',
				},
			)
			.setTimestamp();

		msg.channel.send(embed);

	},

};