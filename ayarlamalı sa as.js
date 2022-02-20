const Discord = require("discord.js");
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("MANAGE_MESSAGES"))

    return message.channel.send("<a:unlem:909129211351027792> Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olmalısın <a:unlem:909129211351027792> ");

  if (args[0] === "aç") {

    ndb.set(`saas_${message.guild.id}`, "aktif");

message.channel.send('Sa-As Sistemi Başarılı Şekilde Açıldı <:cyriusacik:910632373463441438> \n Kapatmak İçin **.sa-as kapat** Yazabilirsin ')

  }

  

  if (args[0] === "kapat") {

    ndb.set(`saas_${message.guild.id}`, "deaktif");

message.channel.send('Sa-As Sistemi Kapatıldı <:cyriuskapali:910632452576403496> ')

  }

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "sa-as"

}; 

