const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
exports.run = async(client, message, args) => {

  if (!message.member.permissions.has("MANAGE_CHANNELS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "**Bu Komutu Kullanabilmek İçin `Kanalları Yönet` Yetkisine Sahip Olmalısın !**"
        )
        .setColor("RANDOM")
    );
        
    if(args[0] == "kanal") {
        var kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        ndb.set(`sadefotokanal_${message.guild.id}`, kanal.id)
                message.channel.send(`Sade foto kanalı ayarlandı sistemi aktif etmek için **!sadefoto aç** yazabilirsiniz.`)
}

  if (args[0] === 'aç') {
    
    ndb.set(`sadefoto_${message.guild.id}`, 'aktif')
    message.channel.send(`Sade foto sistemi açıldı eğer kanala ayarlamadıysanız **.sadefoto kanal #kanal** yazabilirsiniz.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    ndb.set(`sadefoto_${message.guild.id}`, 'deaktif')
    message.channel.send(`Sade foto sistemi kapatıldı.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'sadefoto'
};  