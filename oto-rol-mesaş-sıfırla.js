const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json"); 
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = ndb.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`Otorol mesajı zaten ayarlanmamış.`)
 
 
  message.channel.send(`Otorol mesajı başarıyla sıfırlandı.`)

 
 ndb.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-mesaj-sıfırla']
  };
  
  exports.help = {
    name: 'otorol-mesaj-sıfırla',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };