// const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'Bans a user',
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {

		const { member, mentions } = msg;

		const tag = `<@${member.id}>`;

		if(member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
		) {

			const target = mentions.users.first();

			if(target) {
				const targetMember = msg.guild.members.cache.get(target.id);
				targetMember.ban();
				msg.channel.send(`${tag} User ${target.tag} has been banned`);
			}
			else {
				msg.channel.send(`${tag} Please specify someone to ban`);
			}
		}
		else {
			msg.channel.send(`${tag} You do not have permission to use this commmand`);
		}


	},

};