const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json"); 
exports.run = async(client, message, args) => {

  if (args[0] === 'aç') {
    
    ndb.set(`küfürengel_${message.guild.id}`, 'aktif')
    message.yanıtla(`küfür engel açıldı.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    ndb.set(`küfürengel_${message.guild.id}`, 'deaktif')
    message.yanıtla(`küfür engel kapatıldı.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
 
exports.help = {
  name: 'küfür-engel'
}; 