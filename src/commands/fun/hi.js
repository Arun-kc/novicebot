const replies = [
	'Ahoy!!',
	'Aloha!!',
	'Hola',
	'Que pasa',
	'Bonjour',
	'Hallo',
	'Ciao',
	'Konnichiwa',
	'yare yare',
	'do something else bud!',
	'Hello, sunshine!',
	'Howdy, partner!',
	'Hey, howdy, hi!',
	'What’s kickin’, little chicken?',
	'Peek-a-boo!',
	'Howdy-doody!',
	'Hey there, freshman!',
	'My name\'s Zoro, and I\'m the world\'s greatest swordsman!',
	'Hi, mister!',
	'I come in peace!',
	'Put that cookie down!',
	'Ahoy, matey!',
	'Hiya!',
	'‘Ello, gov\'nor!',
	'Top of the mornin’ to ya!',
	'What’s crackin’?',
	'GOOOOOD MORNING, EARTHLING!',
	'‘Sup, homeslice?',
	'This call may be recorded for training purposes',
	'Howdy, howdy ,howdy!',
	'How does a lion greet the other animals in the field? A: Pleased to eat you',
	'Hello, my name is Roronoa Zoro',
	'I\'m Batman',
	'At least, we meet for the first time for the last time!',
	'Hello, who\'s there, I\'m talking',
	'Here\'s Johnny!',
	'You know who this is',
	'Ghostbusters, whatya want?',
	'Yo!',
	'Whaddup',
	'Greetings and salutations!',
	'Doctor!!',
];

module.exports = {
	name: 'hi',
	category: 'fun',
	aliases : [],
	description: 'Bot greets you with random reply',
	// eslint-disable-next-line no-unused-vars
	execute(client, msg, args) {
		const index = Math.floor(Math.random() * replies.length);
		// msg.reply(replies[index]);
		msg.channel.send(`**${replies[index]}** <@${msg.author.id}>`);

	},
};