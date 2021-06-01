const Discord = require('discord.js');
const warnSchema = require('../../schemas/warn-schema');

module.exports = {
	name: 'listwarnings',
	category: 'moderation',
	aliases: ['ls'],
	description: 'List warnings for a user',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {
		const { mentions, member } = msg;
		const target = mentions.users.first();

		const tag = `<@${member.id}>`;

		if (member.hasPermission('ADMINISTRATOR')) {
			if (!target) {
				msg.reply(
					'Please specify a user to load the warnings for.',
				);
				return;
			}

			// args.shift();
			const guildId = msg.guild.id;
			const userId = target.id;
			// const reason = args.join(' ');


			const results = await warnSchema.findOne(
				{
					guildId,
					userId,
				});
			if(results == null) {
				console.log(results);
				const embed = new Discord.MessageEmbed()
					.setColor('GREEN')
					.setDescription(
						`✅ <@${userId}> is clean`,
					);
				return msg.channel.send(embed);
			}


			let reply = `⚠️  **List of previous warnings for <@${userId}>: **\n\n`;

			for (const warning of results.warnings) {
				const { author, timestamp, reason } = warning;
				reply += `🔷 By: ${author} | Date: ${new Date(timestamp).toDateString()} | Reason: "${reason}"\n`;
			}

			return msg.channel.send(
				reply,
			);
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
