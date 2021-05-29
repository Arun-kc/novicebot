const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
	name : 'invert',
	aliases : [],
	usage: '<@User>',
	category: 'img',
	description: 'Shows inverted image of your avatar or the mentioned users avatar',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		if(!msg.mentions.users.first()) {
			const avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Invert().getImage(avatar);
			const attach = new Discord.MessageAttachment(img, 'invert.png');
			msg.channel.send(attach);
		}
		else{
			const user = msg.mentions.users.first();
			const avatar = user.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Invert().getImage(avatar);
			const attach = new Discord.MessageAttachment(img, 'invert.png');
			msg.channel.send(attach);
		}

	},
};
