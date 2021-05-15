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

		const { users, guilds, channels, uptime } = client;

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
					value: 'coming soon...',
				},
				{
					name: 'Support Server',
					value: 'coming soon...',
				},
				{
					name: 'Invite Link',
					value: 'coming soon...',
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