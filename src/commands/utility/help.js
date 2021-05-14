const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
require('dotenv').config();

module.exports = {
	name: 'help',
	aliases : ['h'],
	description: 'Shows all available bot commands.',
	async execute(client, message, args) {
		const prefix = process.env.prefix;

		const roleColor = message.guild.me.displayHexColor === '#000000' ? '#1f782f' : message.guild.me.displayHexColor;

		if (!args[0]) {
			const categories = [];

			readdirSync('./src/commands/').forEach((dir) => {
				const commands = readdirSync(`./src/commands/${dir}/`).filter((file) =>
					file.endsWith('.js'),
				);

				const cmds = commands.map((command) => {
					const file = require(`../../commands/${dir}/${command}`);

					if (!file.name) return 'No command name.';

					const name = file.name.replace('.js', '');

					return `\`${name}\``;
				});

				let data = new Object();

				data = {
					name: dir.toUpperCase(),
					value: cmds.length === 0 ? 'In progress.' : cmds.join(' '),
				};

				categories.push(data);
			});
			const embed = new MessageEmbed()
				.setTitle('📬 Need help? Here are all of my commands:')
				.addFields(categories)
				.setThumbnail(`https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png`)
				.setDescription(
					`Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ban\`.`,
				)
				.setFooter(
					`Requested by ${message.author.tag}`,
					message.author.displayAvatarURL({ dynamic: true }),
				)
				.setTimestamp()
				.setColor(roleColor);
			return message.channel.send(embed);
		}
		else {
			const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find((c) => c.aliases && c.aliases.includes(args[0].toLowerCase()),
        );

			if (!command) {
				const embed = new MessageEmbed()
					.setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
					.setColor('FF0000');
				return message.channel.send(embed);
			}

			const embed = new MessageEmbed()
				.setTitle('Command Details:')
				.setThumbnail(`https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png`)
				.addField('PREFIX:', `\`${prefix}\``)
				.addField(
					'COMMAND:',
					command.name ? `\`${command.name}\`` : 'No name for this command.',
				)
				.addField(
					'ALIASES:',
					command.aliases
						? `\`${command.aliases.join('` `')}\``
						: 'No aliases for this command.',
				)
				.addField(
					'USAGE:',
					command.usage
						? `\`${prefix}${command.name} ${command.usage}\``
						: `\`${prefix}${command.name}\``,
				)
				.addField(
					'DESCRIPTION:',
					command.description
						? command.description
						: 'No description for this command.',
				)
				.setFooter(
					`Requested by ${message.author.tag}`,
					message.author.displayAvatarURL({ dynamic: true }),
				)
				.setTimestamp()
				.setColor(roleColor);
			return message.channel.send(embed);
		}
	},
};