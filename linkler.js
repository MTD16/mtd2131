const discord = require("discord.js");

const { MessageButton } = require('discord-buttons');

exports.run = async(client, message, args) => {

  let button1 = new MessageButton()

    .setStyle('url')

    .setLabel('Destek Sunucum')

    .setURL('https://discord.gg/b6SCCCCGqV')

  let button2 = new MessageButton()

    .setStyle('url')

    .setLabel('Davet Linkim')

    .setURL('https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot')


let button3 = new MessageButton()
    .setStyle('url')
    .setLabel('Top.gg linkim')
    .setURL('https://top.gg/bot/875341000632049704/vote')

const embed = new discord.MessageEmbed()

.setTitle(`> Merhaba! Aşağıdaki Butonlardan Destek Serverim, Davet Linkime Gidebilirsin`)

message.channel.send({embed: embed , buttons: [ button1, button2, button3  ]});

}

exports.conf = {

enabled: true,

guildOnly: false,

permLevel:0,

aliases: ["davet","link","ekle"]

}

exports.help = {

name: "linkler"

}  

