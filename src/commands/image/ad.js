const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
	name : 'ad',
	aliases : ['ads'],
	usage: '<@User>',
	category: 'img',
	description: 'Shows image of your avatar or the mentioned users avatar as an advertisement',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		if(!msg.mentions.users.first()) {
			const avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Ad().getImage(avatar);
			const attach = new Discord.MessageAttachment(img, 'ad.png');
			msg.channel.send(attach);
		}
		else{
			const user = msg.mentions.users.first();
			const avatar = user.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Ad().getImage(avatar);
			const attach = new Discord.MessageAttachment(img, 'ad.png');
			msg.channel.send(attach);
		}

	},
};
