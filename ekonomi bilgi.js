const Discord = require('discord.js')
const db = require("inflames.db");
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  const bakiye = await db.fetch(`bakiyecdare-${user.id}`);
  
  
 
            const k4h1nembed1 = new Discord.MessageEmbed()
            .setColor(client.k4h1n.renk)
            .setDescription(` Bakiye: ${bakiye}\n `)
            message.channel.send(k4h1nembed1)
          }
            
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['b'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'bilgilerim',
    description: 'Bilgilerinizi gösterir.',
    usage: 'bilgiler <@kullanıcı>',
}