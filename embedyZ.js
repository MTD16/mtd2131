const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(' ');

if (mesaj.length < 1) return message.reply('Yazı yaz knkcım yazı yazııııı.');

const covid = new Discord.MessageEmbed()

.setTitle('MTD ')

.setDescription (`${mesaj}`)


  message.delete();

  message.channel.send(covid);

};

exports.conf = {

  aliases: [],

  permLevel: 2,

};

exports.help = {

  name: 'embedyaz',

  description: 'Bota yazı yazdırır.',

  usage: 'yaz [yazı]'

}; 

