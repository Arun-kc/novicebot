module.exports = {
    name: 'sum',
    execute(msg, args){
        
        let sum =0;
        if(!args.some(isNaN)){
            args.forEach(element => {
                sum+=parseInt(element);
            });
             msg.channel.send(`Sum of the numbers are ${sum}`);
        }
        else{
            msg.channel.send('Only numbers can be added Genius!');
        }
    }
};