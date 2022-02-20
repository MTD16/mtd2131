const discord = require('discord.js')
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıtçı rol sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(`Sunucu için ayarladığınız kayıtçı rol başarıyla sıfırlandı!`)
.setFooter(`ＭＴＤ`)
message.channel.send(sıfırlandı)
ndb.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıtçı rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Ayarlayacağınız kayıtçı rolü belirtiniz!`)
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlanmadı)
}
ndb.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıtçı rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Kayıt edecek rol başarıyla ${rol} olarak ayarlandı!`)
.setFooter(`ＭＴＤ`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçırol', 'kayıtçı','kayıt-yetkili'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-rol',
  description: 'kız rolünü ayarlar',
  usage: 'dr!kız-rol @rol'
}