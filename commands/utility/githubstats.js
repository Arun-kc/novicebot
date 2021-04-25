const Discord = require('discord.js');
const fetch = require('node-fetch');

async function getJson (response){
    let json = await response.json()
    return json
}

module.exports = {
    name: 'githubstats',
    async execute(msg, args){
        let user = args[0]
        let url =  `https://api.github.com/users/${user}`
        let response = await fetch(url);
        let json = await getJson(response)
        console.log(json);

        let responseStaredRepos = await fetch(`https://api.github.com/users/${json.login}/starred`);
        let noOfStaredRepos = await getJson(responseStaredRepos)

        let responseTotalRepos = await fetch(`https://api.github.com/users/${json.login}/repos`);
        let noOfTotalRepos = await getJson(responseTotalRepos)
        
        const githubEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Github stats of ${json.login}`)
        .setURL(json.html_url)
        .setThumbnail(json.avatar_url)
        .addFields(
            { name: 'Bio : ', value : json.bio},
            { name: 'Followers', value: json.followers, inline: true },
            { name: 'Following', value: json.following, inline: true },
            { name: `Stared Repositories : ${noOfStaredRepos.length}`,value: '\u200B'},
            { name: `Public Repositores : ${json.public_repos}`,value: '\u200B'},
            { name: `Total Repositores : ${noOfTotalRepos.length}`,value: '\u200B'},
        )
        .setTimestamp();

    msg.channel.send(githubEmbed);

    }
    
};