const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	category: 'moderation',
	aliases : [],
	description: 'Bans a user',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const { member, mentions } = msg;

		const tag = `<@${member.id}>`;

		if(member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
		) {

			const target = mentions.users.first();

			if(target) {
				const targetMember = msg.guild.members.cache.get(target.id);
				targetMember.ban();
				// msg.channel.send(`${tag} User ${target.tag} has been banned`);
				const embed = new Discord.MessageEmbed()
					.setColor('RED')
					.setDescription(`✅ ${tag} User ${target.tag} has been banned successfully!!`);
				msg.channel.send(embed);
			}
			else {
				// msg.channel.send(`${tag} Please specify someone to ban`);
				const embed = new Discord.MessageEmbed()
					.setColor('RED')
					.setDescription(`❌ ${tag} Please specify someone to ban!!`);
				msg.channel.send(embed);
			}
		}
		else {
			// msg.channel.send(`${tag} You do not have permission to use this commmand`);
			const embed = new Discord.MessageEmbed()
				.setColor('RED')
				.setDescription(`❌ ${tag} You do not have permission to use this commmand!!`);
			msg.channel.send(embed);
		}


	},

};