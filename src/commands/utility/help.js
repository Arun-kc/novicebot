const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./src/commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`../${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

module.exports = {
	name: 'help',
	description: 'Returns the list of available commands',
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {
		// let helpMap;
		const helpMap = client.commands.map(r => r.name).join(' | ');
		// const fun = client.commands.filter(r => r.category === 'fun').map(r => r.name).join(' | ');

		const embed = new Discord.MessageEmbed()
			.setTitle('Available commands are : ')
			.setColor('RANDOM')
			.addFields({
				name: 'Commands',
				value: helpMap,
			});
		msg.channel.send(embed);

	},

};