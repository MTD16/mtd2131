const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
module.exports.run = async(client, message, args) => {
if(!message.member.permissions.has("MANAGE_GUİLD")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için sunucuyu yönet iznine sahip olmalısın."))
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Lütfen bir seçenek belirtin **aç / kapat**"))
if(args[0] === "aç"){
ndb.set(`capslock_${message.guild.id}`, true)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Capslock engel başarıyla açıldı!"))
};
if(args[0] === "kapat"){
  ndb.delete(`capslock_${message.guild.id}`)
  return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Capslock Engel Başarıyla Kapatıldı !"))
};
};
exports.conf = {

    enabled: true, //kullanıma açık mı değil mi

    guildOnly: true, //dmde kullanıma açık mı değil mi

    aliases: [], //kısayollar

    permLevel: 4 //perm level mainde karşıliklar yazar

  };

  

  exports.help = {

    name: "caps-engel", //komutu çalıştıracak olan kelime

    description: "",//açıklama (isteğe bağlı)

    usage: ""//kullanım (isteğe bağlı)

  }; 

