module.exports = {
	name: 'choose',
	category: 'fun',
	aliases : ['ch'],
	usage: '<choice1> | <choice2> | ...',
	description: 'Random choose between choices',
	// eslint-disable-next-line no-unused-vars
	execute(client, msg, args) {
		const replies = args.join('').split('|');
		const index = Math.floor(Math.random() * replies.length);
		// msg.reply(replies[index]);
		if(args.length < 2) {
			msg.channel.send('**Please provide more than 1 choice**');
		}
		else{
			msg.channel.send(`☑️ **${msg.member.nickname || msg.author.username}**, My choice is : **${replies[index]}**`);
		}

	},
};