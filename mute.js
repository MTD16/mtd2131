const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
exports.run = async (receivedMessage,  msg, args) => {
  let izin = "KICK_MEMBERS" // bu izni değiştrebilirsiniz
  let izint = "Üyeleri At"
  if (!message.member.hasPermission(izin)) return message.channel.send(`Bu komutu kullanabilmek için ${izint} iznine sahip olmalısın!`);
let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));

var mod = msg.author
var reason = args[1]
 let sebep = args.slice(2).join(' ')

  if (!user) return msg.reply('Kullanıcı Etiketlemedin')
 if (!reason) return msg.reply('Süre Belirtmedin! Seçeneklerin : 1s/1m/1h/1d/1w')
if (!sebep) return msg.reply('Sebep Belirtmedin!')

 
 
  let mute = msg.guild.roles.cache.find(r => r.name === "Mute");
          
  let mutetime = args[1]
if(!mute){
      mute = await msg.guild.roles.create({ data: { name: 'Mute' },reason: 'ayn' }).then(role => {
          role.setColor('#818386');
        })    
      msg.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
  
    }
  
  
  await(user.roles.add(mute.id));
  let mutezaman = args[1]
.replace(`d`," Gün")
.replace(`s`," Saniye")
.replace(`h`," Saat")
.replace(`m`," Dakika")
.replace(`w`," Hafta")
  msg.yanıtla(`${user} Adlı Kişi , ${mutezaman} Susturuldu!`)
ndb.set(`muteli_${msg.guild.id + user.id}`, 'muteli')
ndb.set(`süre_${msg.mentions.users.first().id + msg.guild.id}`, mutetime)
    

  setTimeout(function(){
ndb.remove(`muteli_${msg.guild.id + user.id}`)
    user.roles.remove(mute.id)
 msg.channel.send(`<@${user.id}> Muten açıldı.`)
    
  }, ms(mutetime));

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sustur"],
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "",
  usage: ""
};