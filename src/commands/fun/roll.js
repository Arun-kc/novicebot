function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
	name: 'roll',
	category: 'fun',
	aliases : [],
	usage: '[Min] [Max] (arguments are optional)',
	description: 'Random choose between choices',
	// eslint-disable-next-line no-unused-vars
	execute(client, msg, args) {

		if(args.length > 2) {
			msg.channel.send('**Please check your syntax!!**');
		}
		else if(args.length === 1) {
			msg.channel.send(`🎲 **${msg.member.nickname}**, you rolled **${getRndInteger(0, Number(args[0]))}**`);
		}
		else if(args.length === 2) {
			msg.channel.send(`🎲 **${msg.member.nickname}**, you rolled **${getRndInteger(Number(args[0]), Number(args[1]))}**`);
		}
		else{
			msg.channel.send(`🎲 **${msg.member.nickname}**, you rolled **${getRndInteger(0, 100)}**`);
		}

	},
};