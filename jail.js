const discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");

exports.run = async(client, message, args) => {
    let izin = "KICK_MEMBERS" // bu izni değiştrebilirsiniz
    let izint = "Üyeleri At"
    if (!message.member.hasPermission(izin)) return message.channel.send(`Bu komutu kullanabilmek için ${izint} iznine sahip olmalısın!`);
let rol = ndb.fetch(`jailrol_${message.guild.id}`)
let covid = message.mentions.users.first() || message.guild.members.cache.get(args[0]); 
if(!covid) return message.channel.send('Lütfen jail atacağın kişiyi etiketle!')
let sebep = args.slice(1).join(' ')
if(!sebep) return message.channel.send('Lütfen jail sebebini belirtin!')
let sa = message.guild.members.cache.get(covid.id) 
sa.roles.cache.forEach(r => {
sa.roles.remove(r.id)});

message.guild.members.cache.get(covid.id).roles.add(rol)
message.channel.send('Kişi başarı ile jaillendi!') 
}
exports.conf = {
enabled: true, 
guildOnly: false,
permLevel: 0, 
aliases: []
};
exports.help = {
name: "jail"
}; 
