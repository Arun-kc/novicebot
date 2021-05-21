module.exports = {
	name: 'spank',
	category: 'fun',
	aliases : [],
	description: 'Spanks the mentioned user',
	// eslint-disable-next-line no-unused-vars
	execute(client, msg, args) {

		const { mentions } = msg;
		const target = mentions.users.first();
		if(args.length < 1) {
			msg.channel.send('Who would you like to give a spank to?');
		}
		else{
			msg.channel.send(`You gave <@${target.id}> a spank! 🍑`);
		}

	},
};