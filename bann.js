const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(message.author.id === "668864984641437697") return message.channel.send("Bu Komutu Kullanabilmek İçin **Üyerleri Banla** Yetkisine Sahip Olmalısın !");
    if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.channel.send("Bu Komutu Kullanabilmek İçin **Üyerleri Banla** Yetkisine Sahip Olmalısın !");
    if (!message.guild.me.permissions.has("BAN_MEMBERS"))
    return message.channel.send("Herhangi Bir Kişi Banlamak İçin **Üyerleri Banla** İznine Sahip Olmalıyım!");
   let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
    let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[0])) {
      if (!muser) {
       return message.reply("Kullanıcı belirt<a:unlem:909129211351027792>");
      } else {
        userid = muser.id;
      }
      

      
    } else {
      userid = args[0];
    }
        let user = userid

  if(client.user.id == user) { return message.channel.send("Alındım, Gücendim <:AmongUs:906563566209994752>  "); } else {
  if(message.author.id == user) { return message.channel.send("İyimisin Dayı "); } else {
    if(user == "668864984641437697") { return message.channel.send('Bu Benim Yapımcım Banlamam<a:unlem:909129211351027792>'); } else { 
  if(message.guild.owner.id == user) { return message.channel.send('Sunucu Sahibini Banlayamam<a:unlem:909129211351027792>'); } else {
    const embed = new discord.MessageEmbed()
    .setFooter (`Banlayan: ${message.author.tag}`)
    .setDescription(`Kullanıcıyı sunucudan yasakladım.<:ban:910628995815583834>`)
    .setTitle("MTD | Ban");
        message.channel.send(embed)
    client.users.cache.get(user).send(`${message.guild.name} isimli sunucudan yasaklandın! <:ban:910628995815583834>    `)
            message.guild.members.ban(user);
    }
  }
    }
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: []
};
exports.help = {
  name: "ban"
};