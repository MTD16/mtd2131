const discord = require('discord.js'); //modüller
const CC = require('currency-converter-lt')

exports.run = async (client, message, args) => {
    let dolar = new CC({ from: "USD", to: "TRY", amount: 1 })
    let euro = new CC({ from: "EUR", to: "TRY", amount: 1 })
    dolar.convert().then(d => {
        var one_dolar = d
        euro.convert().then(e => {
            var one_euro = e

            let embed = new discord.MessageEmbed()
                .setTitle( "Döviz")
                .setDescription(`1 dolar = ${one_dolar}\n1 euro = ${one_euro}`)
                
                    message.channel.send(embed)
                })
        })
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
  
  exports.help = {
    name: "döviz", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };