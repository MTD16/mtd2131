const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let izin = "MANAGE_MESSAGES" // bu izni değiştrebilirsiniz
    let izint = "Mesajları Yönet"
if (!message.member.hasPermission(izin)) return message.channel.send(`Bu komutu kullanabilmek için ${izint} iznine sahip olmalısın!`);
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazı yaz knkcım yazı yazııııı.');
const covid = new Discord.MessageEmbed()
.setTitle('MTD')
.setDescription (`${mesaj}`)
.setFooter(``)
  message.delete();
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);
  message.channel.send(covid);

};

exports.conf = {
  aliases: ["embed-spam"],
  permLevel: 0,
};

exports.help = {
  name: 'embedspam',
  description: 'Bota yazı yazdırır.',
  usage: 'yaz [yazı]'
};