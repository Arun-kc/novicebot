// //message used for debugging
// console.log("beep beep!!");

require("dotenv").config();
const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.once('ready', readyDiscord);

function readyDiscord(){
    console.log('working bud!!');
}

client.on("message", message => {

	if(message.author.id==process.env.AUTHORID){
		message.react('🤓');
	}

    prefix = process.env.prefix;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    console.log(commandName,args);
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        console.log(command);

	if (!command) return message.channel.send('no such msg!!');

    try {
        
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

});

client.login(process.env.BOTTOKEN);

