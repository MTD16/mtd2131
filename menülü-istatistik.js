const disbut = require("discord-buttons")
const Discord = require("discord.js")
require("moment-duration-format");
const moment = require("moment");
exports.run = async (client, message, args) => {
    const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");

    if (message.author.bot) return;
        message.channel.send(`Hesaplanıyor`).then(async msj => {
            const botPing = (msj.createdTimestamp - message.createdTimestamp);
            msj.delete();
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Kaç Sunucuda Var')
            .setDescription(`Toplam Sunucu Sayısını Gösterir`)
            .setValue('2').setEmoji("870063458752819271")
        const b = new disbut.MessageMenuOption()
            .setLabel('Geliştirici Bilgileri')
            .setDescription(`Geliştirici Bilgilerini Gösterir`)
            .setValue('3').setEmoji("909125321394106409")
        const btn = new disbut.MessageMenuOption()
            .setLabel('Bot Bilgileri')
            .setDescription(`Bot Hakkında Bilgileri Gösterir`)
            .setValue('4').setEmoji("869707733685927936")
        
const menu = new disbut.MessageMenu()
        .addOptions(btn2, b, btn)
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")

const hakkında = new Discord.MessageEmbed()
            .setTitle('İstatistik Menüsüne Hoş Geldin')
            .setDescription(`>>> **Merhaba, Aşağıdaki Menüden İstatistiklere Bakabilirsin.**`)
        
const e = new Discord.MessageEmbed()
            .setTitle('MTD')
            .setDescription("Toplam İstatistikler")
            .addField("**__Kullanıcı Sayısı__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
            .addField("**__Sunucu Sayısı__**", `${client.guilds.cache.size.toLocaleString()}`, true)
            .addField("**__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))

const embed1 = new Discord.MessageEmbed()
            .setTitle('MTD')
            .setDescription("Geliştirici Bilgileri")
            .addField("**__Bot Sahibi__**", `MTD٭#3996`, true)
            .addField("**__Geliştirici__**", ` MTD#3996(<@!668864984641437697>)`, true)
        
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
const embed = new Discord.MessageEmbed()
            .setTitle('MTD')
            .setDescription("Bot Bilgileri")
            .addField("**__Ping__**",`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n  Bot Gecikmesi: ${client.ws.ping}ms`, true)
            .addField("**__Aktiflik__**", `${payidarzaman}`, true)
            .addField("**__Node.JS Versiyon__**", `${process.version}`, true)
            .addField("**__Ram Kullanımı__**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
            .addField("**__Discord.JS__**", `${Discord.version}`, true)
            .addField("**__Konum__**", `Turkey :flag_tr:`, true)


            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
        
        let msg = await message.channel.send({ embed: hakkında, component: menu })

const filter = (menu) => menu.clicker.user.id === message.author.id; //user filter (author only)
        const collector = message.createMenuCollector(filter, { time: 120000 });
        client.on("clickMenu", menu => {
            if(menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
            if (menu.values[0] === '2') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: e,
                })
            }
            if (menu.values[0] === '3') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed1,
                })
            }
            if (menu.values[0] === '4') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed,
                })
            }
})
        })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ['istatistik','i','is']
}
exports.help = {
    name: "hakkında",
    description: "Gelişmiş Yardım",
    usage: "<prefix>yardım",
} 