const Discord = require('discord.js');

module.exports = {
	name: 'userinfo',
	aliases : [],
	category: 'utility',
	description: 'Returns informations about a user',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const { guild } = msg;

		const user = msg.mentions.users.first() || msg.member.user;
		const member = guild.members.cache.get(user.id);

		const permissions = member.permissions.toArray().map(perm => {
			return perm
				.toLowerCase()
			// Replace all underscores with spaces
				.replace(/_/g, ' ')
				.replace(/\w\S*/g, txt => {
					// Capitalize the first letter of each word
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
		});

		let rolemap = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(r => r)
			.join(',');
		if (rolemap.length > 1024) rolemap = 'To many roles to display';
		if (!rolemap) rolemap = 'No roles';

		const embed = new Discord.MessageEmbed()
			.setAuthor(`${user.tag}`, user.displayAvatarURL())
			.setThumbnail(user.displayAvatarURL())
			.setColor('#1f782f')
			.addFields(
				{
					name: 'User ID',
					value: user.id,
					inline: true,
				},
				{
					name: 'Nickname',
					value: member.nickname || 'None',
					inline: true,
				},
				{
					name: 'Is bot',
					value: user.bot,
				},
				{
					name: 'Joined server',
					value: new Date(member.joinedTimestamp).toLocaleDateString(),
					inline: true,

				},
				{
					name: 'Joined Discord',
					value: new Date(user.createdTimestamp).toLocaleDateString(),
					inline: true,
				},
				{
					name: 'Roles',
					value: rolemap,
				},
				{
					name: 'Permissions',
					value: permissions.join(', '),
				},
			)
			.setFooter('Zoro', `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png`)
			.setTimestamp();


		msg.channel.send(embed);

	},

};