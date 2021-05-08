const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'Kicks a user',
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {

		const { member, mentions } = msg;

		const tag = `<@${member.id}>`;

		if(member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
		) {

			const target = mentions.users.first();

			if(target) {
				const targetMember = msg.guild.members.cache.get(target.id);
				targetMember.kick();
				const embed = new Discord.MessageEmbed()
					.setColor('RED')
					.setDescription(`✅ ${tag} User ${target.tag} has been kicked successfully!!`);
				msg.channel.send(embed);
			}
			else {
				const embed = new Discord.MessageEmbed()
					.setColor('RED')
					.setDescription(`❌ ${tag} Please specify someone to kick!!`);
				msg.channel.send(embed);
			}
		}
		else {
			const embed = new Discord.MessageEmbed()
				.setColor('RED')
				.setDescription(`❌ ${tag} You do not have permission to use this commmand!!`);
			msg.channel.send(embed);
		}


	},

};