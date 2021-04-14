const replies = [
    'Ahoy!!',
    'Aloha!!',
    'yare yare',
    'do something else bud!'
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length);
    msg.reply(replies[index]);
};