const replies = [
	'Ahoy!!',
	'Aloha!!',
	'yare yare',
	'do something else bud!',
];

module.exports = {
	name: 'hi',
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {

		const index = Math.floor(Math.random() * replies.length);
		// msg.reply(replies[index]);
		msg.channel.send(`${replies[index]} <@${msg.author.id}>`);

	},
};