const warnSchema = require('../../schemas/warn-schema');

module.exports = {
	name: 'warn',
	description: 'Warns a user',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const { mentions, member } = msg;
		const target = mentions.users.first();

		const tag = `<@${member.id}>`;

		if(!target) {
			msg.reply(`Please specify someone to warn. Correct syntax: ${msg.guild.commandPrefix}warn <@Target> <Reason>`);
			return;
		}

		args.shift();
		const guildId = msg.guild.id;
		const userId = msg.member.id;
		const reason = args.join(' ');

		const warning = {
			author: msg.member.user.tag,
			timestamp: new Date().getTime(),
			reason,
		};

		await warnSchema.findOneAndUpdate({
			guildId,
			userId,
		}, {
			guildId,
			userId,
			$push: {
				warnings: warning,
			},
		}, {
			upsert: true,
		});

		msg.channel.send(`⚠️ <@${target.id}> you have been been warned by ${tag} for the reason: **${reason}** ⚠️`);


	},

};