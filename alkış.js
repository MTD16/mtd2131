const Discord = require('discord.js');
exports.run = (client, message) => {
  
  const code = new Discord.MessageEmbed()
  
  .setColor("#ff0000")
  .setDescription('**Alkış, Bravo!!!**')
  .setImage('https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif')
  message.channel.send(code);
  
}

exports.conf = {
  enabled: true,
  guilOnly: false,
  aliases: ['alkışla'],
  permLevel: 0
}

exports.help = {
  name: 'alkış',
  description: '',
  usage: ''
};