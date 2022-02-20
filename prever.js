const Discord = require("discord.js");
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
exports.run = (client, message, args) => {

    if (message.author.id !== "668864984641437697") {

      message.channel.send("You are not <@668864984641437697> ")

      

    } else {

  const user = message.mentions.users.first();9

      

    ndb.set("premium" + user.id, 1)

    const embed = new Discord.MessageEmbed()

    .setTitle("Harika PREMIUM Verildi")

    .setDescription(`<@${user.id}> Başarılı Şekilde PREMIUM Verildi`)

    .setColor("YELLOW")

    message.channel.send(embed)

    }

  }

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['prever'],

  permLevel: 0

}

exports.help = {

  name: 'peremiumver'

}; 

