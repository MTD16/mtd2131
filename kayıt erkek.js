const discord = require('discord.js')
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");

exports.run = async(client, message, args) => {

let kanal = ndb.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = ndb.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = ndb.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = ndb.fetch(`kayıtçırol_${message.guild.id}`)

 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım<a:unlem:909129211351027792>`)
if(message.channel.id !== kanal) return message.channel.send(` Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin<a:unlem:909129211351027792>`)
if (!erkekrol) return message.channel.send(`Sunucuda erkek rolü ayarlanmadığı için komut kullanılamaz<a:unlem:909129211351027792>`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`Erkek olarak kayıt edeceğin kullanıcıyı belirtmelisin<a:unlem:909129211351027792>`)
let isim = args[1]
if (!isim) return message.channel.send(` İsmini belirtmelisin<a:unlem:909129211351027792>`)
let yaş = args[2]
if (!yaş) return message.channel.send(`Yaşını belirtmelisin<a:unlem:909129211351027792>`)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Erkek Kayıt`)
.setColor(0x36393F)
.setDescription(`<a:4968_verif_green:910628612749819914> Erkek olarak kayıt edilen kullanıcı: ${member} \n Erkek olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`<a:4968_verif_green:910628612749819914>Kullanıcının ismi:`, `${isim}`, true)
.addField(`<a:4968_verif_green:910628612749819914>Kullanıcının yaşı:`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`ＭＴＤ`)
message.channel.send(başarılı)
ndb.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: 'dr!erkek @kullanıcı isim yaş'
}