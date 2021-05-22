const Discord = require('discord.js');
const muteSchema = require('../../schemas/mute-schema');
require('dotenv').config();

module.exports = {
	name: 'unmute',
	category: 'moderation',
	aliases : [],
	description: 'Unmutes a user',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const { guild, member } = msg;
		const prefix = process.env.prefix;
		const tag = `<@${member.id}>`;

		if (member.hasPermission('ADMINISTRATOR')) {

			if (args.length !== 1) {
				msg.reply(`Correct syntax: ${guild.commandPrefix || prefix}mute <@Target>`);
				return;
			}

			let id = '';

			const target = msg.mentions.users.first();
			if(target) {
				id = target.id;
			}
			else{
				id = args[0];
			}

			const result = await muteSchema.updateOne({
				guildId: guild.id,
				userId: id,
				current: true,
			}, {
				current: false,
			});

			if(result.nModified === 1) {
				const mutedRole = guild.roles.cache.find(role => {
					return role.name === 'Muted';
				});
				if(mutedRole) {
					const guildMember = guild.members.cache.get(id);
					guildMember.roles.remove(mutedRole);
				}
				msg.reply(`You unmuted <@${id}>`);
			}
			else{
				msg.reply('That user is not muted!');
			}
		}
		else {
		// msg.channel.send(`${tag} You do not have permission to use this commmand`);
			const embed = new Discord.MessageEmbed()
				.setColor('RED')
				.setDescription(
					`❌ ${tag} You do not have permission to use this commmand!!`,
				);
			msg.channel.send(embed);
		}
	},

};