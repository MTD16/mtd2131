const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json"); 
exports.run = async (client, message, args) => { 
const ayarlar = require("../ayarlar.json");
let prefix = await ndb.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.yanıtla(` Bir rol etiketlemelisin.\nÖrnek kullanım: ${prefix}otorol-ayarla @rol #kanal\ `)
 
 if(!kanal) return message.yanıtla(` Bir kanal etiketlemelisin.\nÖrnek kullanım: ${prefix}otorol-ayarla @rol #kanal`)
 
  message.yanıtla(` Otorol başarıyla aktif edildi. Otorol rolü **${rol}** olarak ayarlandı. Otorol kanalı **${kanal}** olarak ayarlandı.`)

 
  ndb.set(`otoRL_${message.guild.id}`, rol.id)  
  ndb.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-ayarla']
  };
  
  exports.help = {
    name: 'otorol-ayarla',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };