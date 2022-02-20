const Discord = require("discord.js")

module.exports.run= async(client, message, args) => {

let sayı = message.guild.emojis.cache.size
let emojiler = message.guild.emojis.cache.array().slice(0, 15).map(e => e).join(" ")

if(sayı <= 15) {
         let emote = new Discord.MessageEmbed()
            .setColor(`AQUA`)
            .setDescription(`> Bu sunucuda **${sayı}** tane emoji bulunuyor.`)
            .setTitle("Bu Sunucunun Emojileri")
            .addField(`Emotes (${sayı})`, emojiler)
     
         message.channel.send(emote)


}

if(sayı >= 16) {

         let expert = new Discord.MessageEmbed()
            .setColor(`AQUA`)
            .setDescription(`> Bu sunucuda **${sayı}** tane emoji bulunuyor.`)
            .setTitle("Bu Sunucunun Emojileri")
            .addField(`Emotes (${sayı})`, emojiler + ` and ${sayı - 15} more`)
     
         message.channel.send(expert)

}

if(!sayı) {

message.channel.send("Bu sunucuda gösterilcek emoji yok.")

}

}
module.exports.conf = {
aliases: ["emote", "emoji"]
}

module.exports.help = {
name: "emojiler"
}