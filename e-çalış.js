const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.p
const ms = require('ms')
const db = require("inflames.db");


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



exports.run = async (client, message, args) => {
    let timeout = 9000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`günlükkullanımgodareçdare-${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

       return  message.channel.send(`Günlük ödülünü tekrar alabilmek için ** 10 saniye ** olmasını beklemelisin!`)
    } else {
       {
        db.set(`günlükkullanımgodareçdare-${message.author.id}`, Date.now())
         {
          const randomizer = getRandomInt(client.k4h1n.çminpara, client.k4h1n.çmaxpara)
         db.add(`bakiyecdare-${message.author.id}`, randomizer)
          let para1 = new Discord.MessageEmbed()
          .setColor(client.k4h1n.renk)
          .setDescription(`**Çalışarak**`)
          .addField(`Aldığınız Miktar;`, randomizer + ` ${client.k4h1n.parabirimi}`)
          message.channel.send(para1)
        
        }
      } 
    }
}  
          
        
      
   

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ç'],
    permLevel: 0,
   
}

exports.help = {
    name: 'çalış',
    description: '',
    usage: ''
}