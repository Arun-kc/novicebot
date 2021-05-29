const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
	name : 'delete',
	aliases : ['del'],
	usage: '<@User>',
	category: 'img',
	description: 'Shows manipulated image of yours or the mentioned users avatar',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		if(!msg.mentions.users.first()) {
			const avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Delete().getImage(avatar);
			const attach = new Discord.MessageAttachment(img, 'delete.png');
			msg.channel.send(attach);
		}
		else{
			const user = msg.mentions.users.first();
			const avatar = user.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Delete().getImage(avatar);
			const attach = new Discord.MessageAttachment(img, 'delete.png');
			msg.channel.send(attach);
		}

	},
};
