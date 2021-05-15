const replies = [
	'It is Certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	'Don\'t count on it',
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
];

module.exports = {
	name: '8ball',
	category: 'fun',
	aliases : ['8b'],
	usage: '<question>',
	description: 'Answer to your question',
	// eslint-disable-next-line no-unused-vars
	execute(client, msg, args) {
		const index = Math.floor(Math.random() * replies.length);
		// msg.reply(replies[index]);
		if(args.length === 0) {
			msg.channel.send('**Please ask a question**');
		}
		else{
			msg.channel.send(`🎱 **${msg.member.nickname || msg.author.username}**, ${replies[index]}`);
		}

	},
};