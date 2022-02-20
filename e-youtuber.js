const db = require("inflames.db");
const Discord = require('discord.js');
 

 exports.run = (client, message, args) => {
    user = message.author;
    if(!db.fetch(`bakiyecdare-${message.author.id}`)) return message.channel.send("**Para Yetersiz.**"); 
    db.çıkar(`bakiyecdare-${message.author.id}`, 5000);
    db.add("youtuber" + user.id, 1)
     const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Youtuber')
        .setDescription('Artık Sende Youtubersin')
        
        
        message.yanıtla(embed)


 }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yt-ol'],
  permLevel: 0
}

exports.help = {
  name: 'youtuber-ol'
};