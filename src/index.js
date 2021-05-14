// //message used for debugging
// console.log("beep beep!!");

require('dotenv').config();
// const fs = require('fs');
// const mongo = require('./mongo');

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
});

// const commandFolders = fs.readdirSync('./src/commands');

// for (const folder of commandFolders) {
// 	const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
// 	for (const file of commandFiles) {
// 		const command = require(`./commands/${folder}/${file}`);
// 		client.commands.set(command.name, command);
// 	}
// }

// client.once('ready', readyDiscord);

// async function readyDiscord() {
// 	console.log('working bud!!');
// }

// client.on('message', async message => {

// 	if(message.author.id == process.env.AUTHORID) {
// 		message.react('🤓');
// 	}

// 	const prefix = process.env.prefix;
// 	if (!message.content.startsWith(prefix) || message.author.bot) return;

// 	const args = message.content.slice(prefix.length).trim().split(/ +/);
// 	const commandName = args.shift().toLowerCase();
// 	console.log(commandName, args);
// 	const command = client.commands.get(commandName)
// 		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

// 	console.log(command);

// 	if (!command) return message.channel.send('No such command exist!!');

// 	try {
// 		await mongo().then(async mongoose => {
// 			try{
// 				console.log('Connected to mongo!!');
// 				await command.execute(message, args);
// 			}
// 			finally{
// 				mongoose.connection.close();
// 			}
// 		});

// 		// command.execute(message, args);

// 	}
// 	catch (error) {
// 		console.error(error);
// 		message.reply('Sorry!! there was an error trying to execute that command!');
// 	}

// });

client.on('guildCreate', guild => {
	const channel = guild.channels.cache.find(c => c.type === 'text' && c.permissionsFor(guild.me).has('SEND_MESSAGES'));
	channel.send('Thanks for inviting me');
});

client.login(process.env.BOTTOKEN);

