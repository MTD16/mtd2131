const discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");

exports.run = async(client, message, args) => {
    let izin = "MANAGE_ROLES_OR_PERMISSIONS" // bu izni değiştrebilirsiniz
    let izint = "Rolleri Yönet"
    if (!message.member.hasPermission(izin)) return message.channel.send(`Bu komutu kullanabilmek için ${izint} iznine sahip olmalısın!`);
let rol = ndb.fetch(`abonerol_${message.guild.id}`)
let covid = message.mentions.users.first() || message.guild.members.cache.get(args[0]); 
if(!covid) return message.channel.send('<a:unlem:909129211351027792> Lütfen abone rol atacağın kişiyi etiketle <a:unlem:909129211351027792>')
let sa = message.guild.members.cache.get(covid.id) 
sa.roles.cache.forEach(r => {
});

message.guild.members.cache.get(covid.id).roles.add(rol)
message.author.send('ABONE ROL VERİLDİ') 
message.channel.send("Abone Rol Verildi")
}
exports.conf = {
enabled: true, 
guildOnly: false,
permLevel: 0, 
aliases: ['a']
};
exports.help = {
name: "abone"
}; 
