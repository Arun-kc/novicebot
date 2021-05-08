const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'Returns a users avatar',
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {

		const embed = new Discord.MessageEmbed();

		if(!msg.mentions.users.first()) {
			embed.setTitle('Your Avatar:');
			embed.setDescription('This is your avatar');
			embed.setImage(msg.author.displayAvatarURL());
			embed.setColor('RANDOM');
		}
		else{
			const user = msg.mentions.users.first();
			embed.setTitle(`${user.tag}'s Avatar:`);
			embed.setImage(user.displayAvatarURL());
			embed.setColor('RANDOM');
		}

		msg.channel.send(embed);

	},

};