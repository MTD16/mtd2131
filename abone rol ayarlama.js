const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json"); 
exports.run = async(client, message, args) => {
  let izin = "MANAGE_ROLES_OR_PERMISSIONS" // bu izni değiştrebilirsiniz
  let izint = "Rolleri Yönet"
  if (!message.member.hasPermission(izin)) return message.channel.send(`Bu komutu kullanabilmek için ${izint} iznine sahip olmalısın!`);
let covid = message.mentions.roles.first()
if(!covid) return message.channel.send('Abone Rolü Belirtin')
ndb.set(`abonerol_${message.guild.id}`, covid.id)
return message.channel.send(`Abone rolü başarı ile ayarlandı!`)
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
 
exports.help = {
  name: 'abone-rol'
}; 
