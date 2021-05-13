const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true,
};

const warnSchema = mongoose.Schema({
	userId: reqString,
	guildId: reqString,
	warnings: {
		type: [Object],
		required: true,
	} },
{
	timestamps: true,
},
);

module.exports = mongoose.model('warns', warnSchema);