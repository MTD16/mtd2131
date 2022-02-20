const discord = require('discord.js'); //modüller
const sourcebin = require('sourcebin');

exports.run = async (client, message, args) => {
    const isim = args[0];
if (!isim) return message.channel.send(`Dostum isim yazmalısın`);
const mesaj = args.slice(1).join(" ");
if (!mesaj) return message.channel.send(`Dostum yazı yazmalısın`);
const bin = await sourcebin.create(
            [
                {
                    content: `${mesaj}`,
                    language: 'JavaScript',
                },
            ],
            {
                title: `${isim}`,
                description: 'MTD',
            },
        );

        message.channel.send(bin.url);

}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
  
  exports.help = {
    name: "bin", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };