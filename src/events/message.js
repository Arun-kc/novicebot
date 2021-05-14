require('dotenv').config();
const mongo = require('../mongo');

module.exports = async (Discord, client, message) => {

	if(message.author.id == process.env.AUTHORID) {
		message.react('🤓');
	}

	const prefix = process.env.prefix;
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	console.log(commandName, args);
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	console.log(command);

	if (!command) return message.channel.send('No such command exist!!');

	try {
		const commandUsingDb = ['mute', 'unmute', 'warn'];
		// directly use commands without  connecting with db if not required
		if(!commandUsingDb.includes(command.name)) {
			command.execute(client, message, args);
		}
		else{
			await mongo().then(async mongoose => {
				try{
					console.log('Connected to mongo!!');
					await command.execute(client, message, args);
				}
				finally{
					mongoose.connection.close();
				}
			});
		}


		// command.execute(message, args);

	}
	catch (error) {
		console.error(error);
		message.reply('Sorry!! there was an error trying to execute that command!');
	}

};