const discord = require('discord.js')
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Erkek rol sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Sunucu için ayarladığınız erkek rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`ＭＴＤ`)
message.channel.send(sıfırlandı)
ndb.delete(`erkekrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Erkek rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Ayarlayacağınız erkek rolünü belirtiniz!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlanmadı)
}
ndb.set(`erkekrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Erkek rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Erkek rolü başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['erkekrol', 'erol', 'e-rol'],
  permlevel: 0
}
exports.help = {
  name: 'erkek-rol',
  description: 'erkek rolünü ayarlar',
  usage: '!erkek-rol @rol'
}