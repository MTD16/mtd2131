const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message) => {
   message.channel.send("DM'den gönderim")  
  message.author.send(
            randomstring.generate({
            length: 12,
            charset: 'alphabetic'
      
}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'randomşifre',
  description: 'randomşifre gösterir.',
  usage: 'randomşifre'
};