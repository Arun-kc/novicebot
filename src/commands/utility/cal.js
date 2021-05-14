module.exports = {
	name: 'cal',
	description: 'Does simple calculations',
	// eslint-disable-next-line no-unused-vars
	async execute(client, msg, args) {

		const operations = ['add', 'subtract', 'multiply', 'division'];
		const firstNo = Number(args[1]);
		const secondNo = Number(args[2]);

		if(!args[0] || !operations.includes(args[0])) return msg.channel.send(`Please state one of the following operations : ${operations}`);
		if(!args[1] || !args[2]) return msg.channel.send('Please provide 2 numbers');
		if(args[0].toLowerCase() === 'add') return msg.channel.send(`The result is : ${firstNo + secondNo}`);
		if(args[0].toLowerCase() === 'subtract') return msg.channel.send(`The result is : ${firstNo - secondNo}`);
		if(args[0].toLowerCase() === 'multiply') return msg.channel.send(`The result is : ${firstNo * secondNo}`);
		if(args[0].toLowerCase() === 'division') return msg.channel.send(`The result is : ${firstNo / secondNo}`);

	},
};