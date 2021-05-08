const fetch = require('node-fetch');

module.exports = {
	name : 'gif',
	async execute(msg, args) {

		let keywords = 'random';
		if(args.length > 0) {
			keywords = args.join(' ');
		}

		const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;

		const response = await fetch(url);
		const json = await response.json();
		console.log(json);

		const index = Math.floor(Math.random() * json.results.length);

		// msg.reply(json.results[index].url);
		msg.channel.send(json.results[index].url);


	},
};

// exports.help = {
//     name : 'gif'
// }