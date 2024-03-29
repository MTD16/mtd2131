const discord = require('discord.js')
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıt kanal sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunacak kanal başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(``)
message.channel.send(sıfırlandı)
ndb.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıt kanal ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunacak kanalı belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlanmadı)
}
ndb.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıt kanal ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunacak kanal ${kanal} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: 'dr!kayıt-kanal #kanal'
}