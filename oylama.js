const Discord = require("discord.js");
exports.run = (client, message, args) => {
  
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
    return message.channel
      .send(
        new Discord.MessageEmbed()
.addField(`❌ **Yazı Yazman Gerek** ❌`)
  );
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("Oylama Sistemi", client.user.avatarURL())
        .addField(`**Oylama**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("✅");
      message.react("❌");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};