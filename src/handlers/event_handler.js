const fs = require('fs');

// eslint-disable-next-line no-unused-vars
module.exports = (client, Discord) => {

	const event_files = fs.readdirSync('./src/events/').filter(file => file.endsWith('.js'));

	for(const file of event_files) {
		const event = require(`../events/${file}`);
		const event_name = file.split('.')[0];
		client.on(event_name, event.bind(null, Discord, client));
	}

};