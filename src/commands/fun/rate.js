function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
	name: 'rate',
	category: 'fun',
	aliases : [],
	description: 'Rate you or mentioned user',
	// eslint-disable-next-line no-unused-vars
	execute(client, msg, args) {

		const { member, mentions } = msg;
		const target = mentions.users.first();
		if(args.length < 1) {
			msg.channel.send(`I rate **${member.user.username}#${member.user.discriminator}** ${getRndInteger(1, 10)}/10 〽️`);
		}
		else if(args.length === 1) {
			msg.channel.send(`I rate **${target.username}#${target.discriminator}** ${getRndInteger(1, 10)}/10 〽️`);
		}
		else{
			msg.channel.send('**Please mention only one user!!**');
		}

	},
};