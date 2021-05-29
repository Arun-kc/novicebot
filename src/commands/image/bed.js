const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
	name : 'bed',
	aliases : [],
	usage: '<@User>',
	category: 'img',
	description: 'Shows manipulated image of yours or the mentioned users avatar',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		if(!msg.mentions.users.first()) {
			msg.channel.send('Please mention a user!!');
		}
		else{
			const user = msg.mentions.users.first();
			const avatar1 = msg.author.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Bed().getImage(avatar1, avatar2);
			const attach = new Discord.MessageAttachment(img, 'bed.png');
			msg.channel.send(attach);
		}

	},
};
