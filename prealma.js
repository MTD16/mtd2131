const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if (message.author.id !== "668864984641437697") {
      
      message.channel.send("Bu Komutu Sadece <@668864984641437697> ")
      
    } else {
  const user = message.mentions.users.first();
      
  ndb.delete("premium" + user.id, 1)
    const embed = new Discord.MessageEmbed()
    .setTitle("NO WAY!")
    .setDescription(`**PREMIUM** Hopppp HAYIRDIR KNK, SADECE  <@${user.id}> Kullanabilir `)
    .setColor("RED")
    message.channel.send(embed)
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['preal'],
  permLevel: 0
}

exports.help = {
  name: 'premiumal'
};