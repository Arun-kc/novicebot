const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	aliases : [],
	category: 'utility',
	description: 'Returns the guilds informations',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const { guild } = msg;
		const { name, region, memberCount, owner, createdAt, roles, channels } = guild;

		let rolemap = roles.cache
			.sort((a, b) => b.position - a.position)
			.map(r => r)
			.join(',');
		if (rolemap.length > 1024) rolemap = 'To many roles to display';
		if (!rolemap) rolemap = 'No roles';

		const embed = new Discord.MessageEmbed()
			.setTitle(`ℹ️  Server info for Guild ${name}`)
			.setThumbnail(guild.iconURL())
			.setImage(guild.bannerURL())
			.setColor('#1f782f')
			.addFields(
				{
					name: 'Region',
					value: region,
				},
				{
					name: 'Members',
					value: memberCount,
				},
				{
					name: 'Owner',
					value: owner.user.tag,
					inline: true,
				},
				{
					name: 'Channels',
					value: channels.cache.filter(c => c.type === 'text' || c.type === 'voice').size,
					inline: true,

				},
				{
					name: 'Roles',
					value: rolemap,
				},
				{
					name: 'Created At',
					value: createdAt,
				},
			)
			.setFooter('Zoro', `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png`)
			.setTimestamp();


		msg.channel.send(embed);

	},

};