const Discord = require('discord.js');
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
exports.run = async (client, message, args) => {
    if (!ndb.get("premium" + message.author.id)) return message.reply("Sorry This Command For Only **Premium Users**");
  if (message.deletable) await message.delete();
  let k = await client.users.fetch(message.author.id);
  let m = args.slice(0).join(' ');
  if (!m) return message.channel.send(`Neyi caps açıkken yazayım?`)
  try { 
  message.channel.createWebhook(k.username, {
      avatar: k.avatarURL()}) 
    .then(async (wb) => {
        const Webhook = new Discord.WebhookClient(wb.id, wb.token);
        await Webhook.send(m.toUpperCase()); 
        setTimeout(() => {
          Webhook.delete()
        }, 2000);
    })  
  } catch (err) {
    message.channel.send(err);
};
}

exports.conf = {
  enabled: true,
  guildOnly: false ,
  aliases: ['c'],
  permLevel: 0
};

exports.help = {
  name: 'caps',
};