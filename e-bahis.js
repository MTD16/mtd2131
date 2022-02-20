const discord = require('discord.js'); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
   const para = await db.fetch(`bakiyecdare-${message.author.id}`);
  if(!db.fetch(`bakiyecdare-${message.author.id}`)) return message.channel.send("**Para Yetersiz.**");
if(!args[0]) return message.channel.send("**Ne kadar bahis oynamak istiyorsun?** \`Örnek: c!cf 50\`");
if(args[0] > 50000) return message.channel.send("<a:onaysz:905825151063580712> **En fazla 50.000 Liralık bahis oynayabilirsin.**");
if(args[0] === 1) return message.channel.send("<a:onaysz:905825151063580712> **En az 1 Liralık bahis oynamalısın.**");
const bahis = parseInt(args[0]);
var çalmayın = ["kazandın","kaybettin"]
var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
if(Covid === "kazandın") {
   db.add(`bakiyecdare-${message.author.id}`, parseInt(args[0])) 
   message.channel.send(`<a:kazan2:910919520011567124> **Yaşasın Bahisi Kazandın!** \`Oynanan Bahis: ${bahis}\``);
 }
 if(Covid === "kaybettin") { 
   db.remove(`bakiyecdare-${message.author.id}`, parseInt(args[0]))
   message.channel.send(`<:sadp:910921703465570405> **Olamaz Bahisi Kaybettin!** \`Oynanan Bahis: ${bahis}\``);;
 }
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["yazı-tura","yt","cf"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "yazıtura", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};