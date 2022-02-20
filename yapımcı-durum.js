const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    let user = client.users.cache.get("668864984641437697");

    let emoj;

    let durum;

  if(user.presence.status === "online"){

       durum = "Şu anda online! Mesaj atabilirsin!"

       emoj = "<:green1217966_1280:903273009450713108>"

    } else if (user.presence.status === "dnd"){

       durum = "Lütfen rahatsız etmeyin."

       emoj = ""

    } else if(user.presence.status === "offline"){

       durum = "Şu anda çevrimdışı. Mesajınızı bırakabilirsiniz."

       emoj = "<:cyriusoffline:910632457311768596>"

    } else if(user.presence.status === "idle"){

       durum = "Boş boş geziyor. Hızlı cevap almanız yüksek ihtimal... :D"

       emoj = ""

    }

    let embed = new Discord.MessageEmbed()

    .setAuthor(`Geliştirici Bilgileri`, client.user.displayAvatarURL())

    .setThumbnail(user.displayAvatarURL({dynamic: true}))

    .addFields(

        {name: `>>> Bot Geliştiricisi:`, value:` @${user.tag}`, inline: false},

        {name: ">>> Durum:", value:`${emoj} ${durum}`, inline: false},

    )

    message.yanıtla(embed)

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    permLevel: 0,

    aliases: ['yd']

  }

  exports.help = {

      name: "yapımcı-durum",

      description: "covid-19",

      usage: "aşı olun :)",

  } 

