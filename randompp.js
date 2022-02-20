const d = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
exports.run = (client, message) => {
  if (!ndb.get("premium" + message.author.id)) 
  return message.reply("Bu Komut Sadece **Premium ** Kullanıcılarına Özeldir");
  const ds = new d.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))
  message.channel.send(ds)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["random-pp"],
  permLevel: 0
};

exports.help = {
  name: 'randompp',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};