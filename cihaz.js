const Discord = require("discord.js")

exports.run = async (client, message, args) => {


    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    let status = user.presence.clientStatus
    let emoj;

    let durum;

  if(user.presence.status === "online"){

       durum = "Şu anda online! Mesaj atabilirsin!"

       emoj = "<:online:904788242094764043>"

    } else if (user.presence.status === "dnd"){

       durum = "Lütfen rahatsız etmeyin."

       emoj = "<:dnd:904788239842410597>"

    } else if(user.presence.status === "offline"){

       durum = "Şu anda çevrimdışı."

       emoj = "<:offline:904788240689664010>"

    } else if(user.presence.status === "idle"){

       durum = "Boş boş geziyor. "

       emoj = "<:BeklemedePng:906603701924413541>"

    }
    //başarısın baş
    if(!status) {

        let embed = new MessageEmbed()
          .setTitle("Başarısız!")
          .setDescription("> Kullanıcı şuan aktif değil!")
          .setColor("RED")
    
        message.channel.send(embed)
    
    return;
    }
//başarısız son

    //web baş
    if(status.web)  {

      let web = new Discord.MessageEmbed()
  
      
  
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
  
      .addFields(
        {name: `**Cihaz** :`, value:`Tarayıcı`, inline: false},
  
          {name: `** Kişi** :`, value:` @${user.tag}`, inline: false},
  
          {name: "**Durumu**:", value:`${emoj} ${durum} `, inline: false},
  
      )
  
      message.yanıtla(web)
      return;
  }
//web son


    //tel baş
    if(status.mobile) {
      let tel = new Discord.MessageEmbed()
  
      
  
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
  
      .addFields(
        {name: `**Cihaz** :`, value:`Telefon`, inline: false},
  
          {name: `** Kişi** :`, value:` @${user.tag}`, inline: false},
  
          {name: "**Durumu**:", value:`${emoj} ${durum} `, inline: false},
  
      )
  
      message.yanıtla(tel)
      return;
  }
//tel son




//pc baş
    if(status.desktop) {
    let pc = new Discord.MessageEmbed()

    

    .setThumbnail(user.displayAvatarURL({dynamic: true}))

    .addFields(
      {name: `**Cihaz** :`, value:`Bilgisayar`, inline: false},

        {name: `** Kişi** :`, value:` @${user.tag}`, inline: false},

        {name: "**Durumu**:", value:`${emoj} ${durum} `, inline: false},

    )

    message.yanıtla(pc)
    
    
    }
//pc son
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["c","durum"],
    permLevel: 0
  };
  
  exports.help = {
    name: "cihaz",
    description: "",
    usage: ""
  };