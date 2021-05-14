// //message used for debugging
// console.log("beep beep!!");

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
});

client.on('guildCreate', guild => {
	const channel = guild.channels.cache.find(c => c.type === 'text' && c.permissionsFor(guild.me).has('SEND_MESSAGES'));
	channel.send('Thanks for inviting me');
});

client.login(process.env.BOTTOKEN);

