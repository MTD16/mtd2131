const discord = require('discord.js')
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak rolü sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunca otomatik alınacak rol sıfırlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Asreaper`)
message.channel.send(sıfırlandı)
ndb.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak rolü ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunca alınacak rolü belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlanmadı)
}
ndb.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak rolü ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunca otomatik alınacak rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['alınacakrol', 'arol', 'a-rol','kayıtsız','kayıtsız-rol'],
  permlevel: 0
}
exports.help = {
  name: 'alınacak-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}