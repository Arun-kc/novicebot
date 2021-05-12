const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
	await mongoose.connect(process.env.MONGOPATH, {
		keepAlive: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
		.then(x => {
			console.log(
				`Connected to Mongo! Database name: "${x.connections[0].name}"`,
			);
		})
		.catch(err => {
			console.error('Error connecting to mongo', err);
		});
	return mongoose;
};
