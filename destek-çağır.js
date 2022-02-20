const discord = require('discord.js'); //modüller

exports.run = async (client, message, args) => {

let channel = message.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);

channel.createInvite({ maxAge: 100000, maxUses: 0 }).then(async (invite) => { 

client.users.cache.get("668864984641437697").send(`${invite.url}`)

}) 

}

exports.conf = {

    enabled: true, //kullanıma açık mı değil mi

    guildOnly: true, //dmde kullanıma açık mı değil mi

    aliases: [], //kısayollar

    permLevel: 0 //perm level mainde karşıliklar yazar

  };

  

  exports.help = {

    name: "destek-çağır", //komutu çalıştıracak olan kelime

    description: "",//açıklama (isteğe bağlı)

    usage: ""//kullanım (isteğe bağlı)

  }; 

