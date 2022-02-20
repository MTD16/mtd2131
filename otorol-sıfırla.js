const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json"); 
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = ndb.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(` Otorol sistemi zaten kapalı.`)
 
 
  message.channel.send(` Otorol sistemi başarıyla sıfırlandı.`)

 
  ndb.delete(`otoRL_${message.guild.id}`)  
  ndb.delete(`otoRK_${message.guild.id}`) 
  ndb.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-sıfırla']
  };
  
  exports.help = {
    name: 'otorol-kapat',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };