const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
	name : 'batslap',
	aliases : [],
	usage: '<@User>',
	category: 'img',
	description: 'Shows batslap image using yours and the mentioned users avatar',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		if(!msg.mentions.users.first()) {
			msg.channel.send('Please mention a user!!');
		}
		else{
			const user = msg.mentions.users.first();
			const avatar1 = msg.author.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png', size:1024 });
			const img = await new DIG.Batslap().getImage(avatar1, avatar2);
			const attach = new Discord.MessageAttachment(img, 'batslap.png');
			msg.channel.send(attach);
		}

	},
};
