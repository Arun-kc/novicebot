const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	aliases : [],
	category: 'utility',
	description: 'Returns a users avatar',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const embed = new Discord.MessageEmbed();

		if(!msg.mentions.users.first()) {
			embed.setTitle('Your Avatar:');
			embed.setDescription('This is your avatar');
			embed.setImage(msg.author.displayAvatarURL({ dynamic: false, format: 'png', size:1024 }));
			// embed.setImage(`https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png?size=1024`);
			embed.setColor('RANDOM');
		}
		else{
			const user = msg.mentions.users.first();
			embed.setTitle(`${user.tag}'s Avatar:`);
			embed.setImage(user.displayAvatarURL({ dynamic: false, format: 'png', size:1024 }));
			// embed.setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`);
			embed.setColor('RANDOM');
		}

		msg.channel.send(embed);

	},

};