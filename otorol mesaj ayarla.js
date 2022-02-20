const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json"); 
exports.run = async (client, message, args) => { 
let prefix = (await ndb.fetch(`prefix_${message.guild.id}`)) || (".");
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(' Otorol mesajı için 5 değişken desteklenmektedir. Bunlar -uyetag- -uye- -uyesayisi- -rol- ve -server- dir.\nÖrnek: `.otorol-mesaj-ayarla -uye- hoş geldin! Senle beraber -uyesayisi- kişiyiz!` \n Başına Ve Sonuna 2 tane * Koyarsanız arasına yazılan yazılar **Kalın** gözükür')
  
 message.channel.send(' Otorol mesajı başarıyla `'+mesaj+'` olarak ayarlandı!') 
 ndb.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-mesaj-ayarla']
  };
  
  exports.help = {
    name: 'otorol-mesaj',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };