module.exports = {
	name: 'vote',
	aliases : [],
	category: 'utility',
	description: 'Allows you to vote for the bot',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {
		msg.channel.send('📩 You can vote for me in the following sites: \n\n 💜 https://discordbotlist.com/bots/zoro/upvote');
	},
};