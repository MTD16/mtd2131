const discord = require('discord.js'); //modüller


exports.run = async (client, message, args) => {

 
     
    let embed = new discord.MessageEmbed()
         .setTitle('PickCraft ')
         .setDescription(`>>> PickCraft Giriş Bilgileri`)
         .addField( {name: `**- İp Adresi:**`, value:`Oyna.PickCraft.tk`, inline: false},
                     {name: `**- Port:**`, value:`25589`, inline: false},
                     {name: `**- Sürüm:**`, value:`1.18 ve üstü`, inline: false},
                     {name: `**- Oyun:**`, value:`Minecraft Bedrock Edition`, inline: false},
         )
        
      
        
                 message.channel.send(embed);
}

//Buranın altı handler
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: false, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
  
  exports.help = {
    name: "ip", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };