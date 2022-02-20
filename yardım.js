const disbut = require("discord-buttons")
const Discord = require("discord.js")
 const ayarlar = require("../ayarlar.json");
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
const db = require("inflames.db")

let defa = ndb.get(`covid19Puan`)
let prefix = ayarlar.p
let ayaremoj = ayarlar.ayarlarem
let pre = ayarlar.pre

exports.run = async (client, message, args) => {
  if(!db.kontrol("premium" + message.author.id)) { var pre1 = "yok" } else { var pre1 = "var" } 
  
      let user = client.users.cache.get("668864984641437697");

    let emoj;

    let durum;

  if(user.presence.status === "online"){

       durum = "Şu anda online! Mesaj atabilirsin!"

       emoj = "<:online:904788242094764043>"

    } else if (user.presence.status === "dnd"){

       durum = "Lütfen rahatsız etmeyin."

       emoj = "<:dnd:904788239842410597>"

    } else if(user.presence.status === "offline"){

       durum = "Şu anda çevrimdışı. Mesajınızı bırakabilirsiniz."

       emoj = "<:offline:904788240689664010>"

    } else if(user.presence.status === "idle"){

       durum = "Boş boş geziyor. Hızlı cevap almanız yüksek ihtimal... :D"

       emoj = "<:BeklemedePng:906603701924413541> "

    }

   
  
  
  
  
  
  if (message.author.bot) return;
        message.yanıtla(`Yükleniyor`).then(async msj => {
            const botPing = (msj.createdTimestamp - message.createdTimestamp);
            msj.delete();
        const btn1 = new disbut.MessageMenuOption()
            .setLabel('Bot Hakkında')
            .setDescription("Bot hakkında kısmı")
            .setValue('1').setEmoji("869707733509746718")
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Moderasyon Komutları')
            .setDescription(`Komutları gösterir.`)
            .setValue('2').setEmoji("869707733685927936")
        const btn = new disbut.MessageMenuOption()
            .setLabel('Moderasyon Komutları 2 ')
            .setDescription(`Komutları gösterir.`)
            .setValue('3').setEmoji("869707733685927936")
        const btn10 = new disbut.MessageMenuOption()
            .setLabel('Kayıt Komutları  ')
            .setDescription(`Komutları gösterir.`)
            .setValue('4').setEmoji("910833112097910804")
        const btn5 = new disbut.MessageMenuOption()
            .setLabel('Eğlence Komutları  ')
            .setDescription(`Komutları gösterir.`)
            .setValue('5').setEmoji("903256825980411924")
        const btn6 = new disbut.MessageMenuOption()
            .setLabel('Yapımcı Durum  ')
            .setDescription(`Yapımcının Aktif Olup Olmadığını Gösterir.`)
            .setValue('6').setEmoji("905555632311132230")
         const btn7 = new disbut.MessageMenuOption()
            .setLabel('Karışık  ')
            .setDescription(`Karışık Komutlar.`)
            .setValue('7').setEmoji("905555632311132230")
            const btn13 = new disbut.MessageMenuOption()
            .setLabel(' Premium ')
            .setDescription(`Premium Kullanıcılara Özel Komutlar`)
            .setValue('8').setEmoji("911203411125489706")
     
const menu = new disbut.MessageMenu()
        .addOptions(btn1, btn2, btn, btn10, btn5 , btn6 , btn7, btn13 )
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")

const hakkında = new Discord.MessageEmbed()
            .setTitle('Bot Hakkında')
             .setDescription(`>>> Toplam  ** ${defa} ** defa komutlarım kullanıldı`)
            .addFields ( {name: `Dostum Hoş Geldin Aşağıdaki Menüden Nereye Işınlancağını Seçebilirsin \n ** İyi Kullanımlar ** `, value:`ＭＴＤ`, inline: false})
             .addFields (
              {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
               {name: `<:darklink:910831771715792956> Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
              {name: `<:topggvoted:910628731482177537>  Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
            )
            .addFields ( { name: `Pingim **${client.ws.ping}** Olarak Hesaplandı`, value: `** **`, inline: false})
            .setImage('https://cdn.discordapp.com/attachments/901057154969112606/905101447929163846/standard.gif')
             .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
           .setTimestamp()
const embed7 = new Discord.MessageEmbed()
            .setTitle('Karışık')
            
            .addFields ( {name: `${ayaremoj}${prefix}**youtube** <kanal ismi >`, value:`Girilen Youtube Kanalının İstatitliklerini Gösterir`, inline: false},
                         {name: `${ayaremoj}${prefix}**hava-durum <şehir>** `, value:`Girilen Şehrin Hava Durumunu Gösterir`, inline: false},
                         {name: `${ayaremoj}${prefix}**random-şifre** `, value:`Rastgele Şifre Atar`, inline: false},
                         {name: `${ayaremoj}${prefix}**durum @üye** `, value:`Kullancının Durumunu/Cihazını Öğrenirsiniz`, inline: false}
                          )
             .addFields (
              {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
               {name: `<:darklink:910831771715792956>Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
              {name: `<:topggvoted:910628731482177537>Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
            )
            .setImage('https://cdn.discordapp.com/attachments/901057154969112606/905101447929163846/standard.gif')
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
          .setTimestamp()
   const embed9 = new Discord.MessageEmbed()
          .setTitle('Premium')
          .setDescription(`>>> Premium Özel Komutlar`)
          .addFields ( {name: `${pre}${prefix}**fake-mesaj @üye**`, value:`Fake Mesaj Atar`, inline: false},
                       {name: `${pre}${prefix}**token **`, value:`Premium Kullanıcılara özel Token Verir`, inline: false},
                       {name: `${pre}${prefix}**randompp **`, value:`Random Profil Fotoğrafı Atar`, inline: false},
                       {name: `${pre}${prefix}**prefix**`, value:`Prefix Değiştirir`, inline: false},
                       {name: `${pre}${prefix}**emojiyaz**`, value:`Yazdığınız Yazıyı Emoji Yazar`, inline: false},
                       {name: `${pre}${prefix}**panel aç/kapat**`, value:`Sunucuya Panel Açar`, inline: false},
                       {name: `**Sizin Premium'unuz ${pre1}**`, value:`>>> ** **`, inline: false},    

                       )
           
           .addFields (
            {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
             {name: `<:darklink:910831771715792956>Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
            {name: `<:topggvoted:910628731482177537>Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
          )
          .setImage('https://cdn.discordapp.com/attachments/901057154969112606/905101447929163846/standard.gif')
          .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()  

const embed5= new Discord.MessageEmbed()
            .setTitle('Kayıt')
            .setDescription(`>>> **Komutları**`)
            .addFields ( {name: `${ayaremoj} Kayıt Komutları  ${ayaremoj}`, value:`**Aşağıda Moderasyon komutlar bulunmaktadır**`, inline: false},
                         {name: `${ayaremoj} ${prefix}**kayıtçı-rol **`, value:`>>> Kayıtçı Rolünü Ayarlar `, inline: false},
                         {name: `${ayaremoj}${prefix}**kayıtsız **`, value:`>>> Kayıtsız Üye Rolünü Ayarlar `, inline: false},
                         {name: `${ayaremoj}${prefix}**kayıt-kanal **`, value:`>>> Kayıt Kanalını Ayarlar`, inline: false},
                         {name: `${ayaremoj}${prefix}**erkek-rol **`, value:`>>> Erkek Üye Rolünü Ayarlar `, inline: false},
                         {name: `${ayaremoj}${prefix}**kız-rol **`, value:`>>> Kız Üye Rolünü Ayarlar `, inline: false},
                         {name: `${ayaremoj}${prefix}**sayaç **`, value:`>>> Sayaç Ayarlar `, inline: false},
                         {name: `󠀠                        Kayıt Ederken`, value:`>>> Üyeleri Nasıl Kayıt Edeceğinizi Gösteren Komutlar `, inline: false},
                         {name: `${ayaremoj}${prefix}**erkek **`, value:`>>> Erkek Üyeyi Kayıt Eder  `, inline: false},
                         {name: `${ayaremoj}${prefix}**kız **`, value:`>>> Kız Üyeyi Kayıt Eder `, inline: false},
                        )
                .addFields (
              {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
               {name: `<:darklink:910831771715792956>Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
              {name: `<:topggvoted:910628731482177537>Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
            )
            .setImage('https://cdn.discordapp.com/attachments/901057154969112606/905101447929163846/standard.gif')
               .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
             .setTimestamp()
const embed6= new Discord.MessageEmbed()
            .setTitle('Developer')
            .setDescription(`>>> **Developer Durum **`)
            .addFields ( {name: `Beni Yapan Kişi @${user.tag}`, value:`\n ${emoj} Aktiflik Durumu ${durum} `, inline: false},
                        )
            .addFields (
              {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
               {name: `<:darklink:910831771715792956>Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
              {name: `<:topggvoted:910628731482177537>Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
            )
                .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
             .setTimestamp()



const embed10 = new Discord.MessageEmbed()
            .setTitle('Moderasyon Komutları 2')
            .setDescription(`>>> **Merhaba, aşağıdaki menüden komutlara ulaşabilirsin.**`)
            .addFields ( {name: `${ayaremoj} Moderasyon Komutları 2 ${ayaremoj}`, value:`**Aşağıda Moderasyon komutlar bulunmaktadır**`, inline: false},
                         {name: `${ayaremoj}${prefix}**sa-as **`, value:`>>> sa as aç yazarak açarsınız  `, inline: false},
                        {name: `${ayaremoj}${prefix}**reklam-engel**`, value:`>>> Reklam Engel Açar`, inline: false},
                         {name: `${ayaremoj}${prefix}**abone**`, value:`>>> Abone Rol Verir`, inline: false},
                        {name: `${ayaremoj}${prefix}**abonerol**`, value:`>>> Abone Rolü Ayarlar `, inline: false},
                         {name: `${ayaremoj}${prefix}**jail**`, value:`>>> Kullanıcıyı Jaile Atarsınız`, inline: false},
                         {name: `${ayaremoj}${prefix}**unjail**`, value:`>>> Kullanıcıyı Jailden Çıkarırsınız`, inline: false},
                         {name: `${ayaremoj}${prefix}**jail-rol**`, value:`>>> Jail Rol Ayarlarsınız`, inline: false},
                         {name: `${ayaremoj}${prefix}**unjail-rol**`, value:`>>> Unjail Rolünü Ayarlar`, inline: false},
                         {name: `${ayaremoj}${prefix}**mod-log**`, value:`>>> Sunucuda Oluşan Silenen Herşeyi Belirttiğiniz Kanala Gönderir`, inline: false},
                         {name: `${ayaremoj}${prefix}**otorol-ayarla**`, value:`>>> Oto Rol Ayarlarsınız @rol , #kanal`, inline: false},
                         {name: `${ayaremoj}${prefix}**otorol-sıfırla**`, value:`>>> Oto Rolü Sıfırlarsınız`, inline: false},
                         {name: `${ayaremoj}${prefix}**otorol-mesaj**`, value:`>>> Oto Rol Mesajı Ayarlarsınız`, inline: false},
                         {name: `${ayaremoj}${prefix}**otorol-mesaj-sıfırla **`, value:`>>> Oto Rol Mesajı Sıfırlarsınız`, inline: false},
                         {name: `${ayaremoj}${prefix}**herkeze-rolver **`, value:`>>> Herkeze Rol Verir `, inline: false},
                         {name: `${ayaremoj}${prefix}**caps-engel**`, value:`>>> CAPS Engeli Açar`, inline: false},
                         {name: `${ayaremoj}${prefix}**premiumver**`, value:`>>> Kullanıcıya PREMIUM Verir (Sadece Sahibim Kullanabilir)`, inline: false},
                         {name: `${ayaremoj}${prefix}**mute**`, value:`>>> Kullanıcı Susturur \n **MUTE** Rolünü En Üste Anlınız `, inline: false}, 
                       )
                .addFields (
              {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
               {name: `<:darklink:910831771715792956>Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
              {name: `<:topggvoted:910628731482177537>Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
            )          
            .setImage('https://cdn.discordapp.com/attachments/901057154969112606/905101447929163846/standard.gif')
          .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
const embed1 = new Discord.MessageEmbed()
            .setTitle('Moderasyon')
            .setDescription("Aşağıda Moderasyon Kopmutları Bulunmaktadır ")
            .addFields(
                {name: `${ayaremoj}Moderasyon Komutları ${ayaremoj}`, value:`**Aşağıda genel komutlar bulunmaktadır**`, inline: false},
                {name: `${ayaremoj}${prefix}**ban-say **`, value:`>>> Sunucuda Kaç kişi banlı olduğunu gösterir `, inline: false},
                {name: `${ayaremoj}${prefix}**destek-çagır**`, value:`>>> Sunucunuza Yetkili Çağırırsınız`, inline: false},
                {name: `${ayaremoj}${prefix}**embedyaz**`, value:`>>> İstediğiniz yazıyı EMBED şekilde yazar `, inline: false},
                {name: `${ayaremoj}${prefix}**id **`, value:`>>> belirtilen kişinin id sini gösterir`, inline: false},
                {name: `${ayaremoj}${prefix}**istatistik **`, value:`>>> Botun İstatisliklerini atar`, inline: false},
                {name: `${ayaremoj}${prefix}**kick**`, value:`>>> Belirtilen kişiyi sunucudan atar `, inline: false},
                {name: `${ayaremoj}${prefix}**ban **`, value:`>>> Belirtilen kişiyi sunucudan banlar `, inline: false},
                {name: `${ayaremoj}${prefix}**oylama**`, value:`>>> Sunucuda oylama yapar`, inline: false},
                {name: `${ayaremoj}${prefix}**nuke**`, value:`>>> Yazılan kanalı silip baştan oluşturur`, inline: false},
                {name: `${ayaremoj}${prefix}**ping **`, value:`>>> Botun pingini gösterir`, inline: false},
                {name: `${ayaremoj}${prefix}**rol-bilgi **`, value:`>>> Etiketlenen rolü bilgilerini gösterir `, inline: false},
                {name: `${ayaremoj}${prefix}**saat **`, value:`>>> Saati gösterir`, inline: false},
                {name: `${ayaremoj}${prefix}**şablon **`, value:`>>> Sunucu şablonu atar`, inline: false},
                {name: `${ayaremoj}${prefix}**kayıt-şablon **`, value:`>>> Hazır kayıt sistemli sunucu atar `, inline: false},  
                {name: `${ayaremoj}${prefix}**sunucu-bilgi **`, value:`>>> Sunucu Hakkında Bilgi Verir`, inline: false},
                {name: `${ayaremoj}${prefix}**sil **`, value:`>>> Belirtilen sayı kadar mesaj siler`, inline: false},
                {name: `${ayaremoj}${prefix}**sunucu-resmi **`, value:`>>> Sunucunun Resmini Atar`, inline: false},
                {name: `${ayaremoj}${prefix}**test **`, value:`>>> Botun çalışıp çalışmadığını kontrol eder`, inline: false},
                {name: `${ayaremoj}${prefix}**toplam-komut**`, value:`>>> Botta bulunan toplam komut sayısını gösterir`, inline: false},
                {name: `${ayaremoj}${prefix}**yapımcım**`, value:`>>> Botun yapımcısını gösterir`, inline: false},
                {name: `${ayaremoj}${prefix}**yapımcı-durum **`, value:`>>> Yapımcısın aktif olup olmadığını gösterir`, inline: false},
                )
              .addFields (
              {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
               {name: `<:darklink:910831771715792956>Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
              {name: `<:topggvoted:910628731482177537>Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
            )
            .setImage('https://cdn.discordapp.com/attachments/901057154969112606/905101447929163846/standard.gif')
            .setTimestamp()   
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            const embed = new Discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                 {name: `🎃Eğlence Komutları`, value:`**Aşağıda eğlence komutları bulunmaktadır**`, inline: false},
                 {name: `🎃${prefix}**a101**`, value:`>>> Sloganı gösterir`, inline: false},
                 {name: `🎃${prefix}**alkış**`, value:`>>> Alkışlar`, inline: false},
                 {name: `🎃${prefix}**ara155**`, value:`>>> 155'i Ararsınız`, inline: false},
                 {name: `🎃${prefix}**atatürk**`, value:`>>> ATATÜRK Gifi Atar`, inline: false},
                 {name: `🎃${prefix}**aşkölçer**`, value:`>>> Etiketlediğiniz Kişiyle Aşkınızı Ölçer`, inline: false},
                 {name: `🎃${prefix}**emojiyaz**`, value:`>>> İstediğiniz Yazıyı Emoji Yazar`, inline: false},
                 {name: `🎃${prefix}**espiri**`, value:`>>> Bot Espiri Yapar`, inline: false},
                 {name: `🎃${prefix}**inek**`, value:`>>> Bot Size İnek Gifi Atar`, inline: false},
                 {name: `🎃${prefix}**lafat**`, value:`>>> Laf Atar`, inline: false},
                 {name: `🎃${prefix}**kaçcm**`, value:`>>> Mabadınızı Ölçer`, inline: false},
                 {name: `🎃${prefix}**kedi**`, value:`>>> Kedi Gifi Atar`, inline: false},
                 {name: `🎃${prefix}**siu**`, value:`>>> SİUUUUUUUU!!`, inline: false},
                 {name: `🎃${prefix}**kralol**`, value:`>>> Kral Olursunuz`, inline: false},
                 {name: `🎃${prefix}**mcödül**`, value:`>>> Yazdığınız Yazıyı Minecraft Başarımı Yapar`, inline: false},
                 {name: `🎃${prefix}**okul-kapat**`, value:`>>> Okulu Kapatırsınız`, inline: false},
                 {name: `🎃${prefix}**saat**`, value:`>>> Saati Gösterir`, inline: false},
                 {name: `🎃${prefix}**şablon**`, value:`>>> Sunucu Şablonu Atar`, inline: false},
                 {name: `🎃${prefix}**salak**`, value:`>>> Salak Gif Atar`, inline: false},
                 {name: `🎃${prefix}**sor**`, value:`>>> Soruya Cevap Verir`, inline: false},
                 {name: `🎃${prefix}**türk**`, value:`>>> Türk Gifi Atar`, inline: false},
                 {name: `🎃${prefix}**randompp**`, value:`>>> Random PP Atar`, inline: false},
                 {name: `🎃${prefix}**zat-at**`, value:`>>> Zat Atar`, inline: false},
                 {name: `🎃${prefix}**yazan-kazanır**`, value:`>>> Yazan Kazanır Oynarsınız`, inline: false}
                )
              .addFields (
              {name: `<a:discord:906881507078062080> Destek Sunucum İçin`, value:`[Tıkla](https://discord.gg/b6SCCCCGqV)`, inline: true},
               {name: `<:darklink:910831771715792956> Davet Linkim`, value:`[Davet Et](https://discord.com/api/oauth2/authorize?client_id=875341000632049704&permissions=8&scope=bot)`, inline: true},
              {name: `<:topggvoted:910628731482177537>Top GG Linki`, value:`[Git](https://top.gg/tr/bot/875341000632049704)`, inline: true}
            )
            .setImage('https://cdn.discordapp.com/attachments/901057154969112606/905101447929163846/standard.gif')
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
        
        let msg = await message.channel.send({ embed: hakkında, component: menu })

const filter = (menu) => menu.clicker.user.id === message.author.id; //user filter (author only)
        const collector = message.createMenuCollector(filter, { time: 120000 });
        client.on("clickMenu", menu => {
            if(menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
            if (menu.values[0] === '1') {
           //kod ekleyebilirsiniz
                   msg.edit({
                    embed: hakkında,
                })
            }
            if (menu.values[0] === '2') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: embed1,
                })
            }
            
          if (menu.values[0] === '4') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: embed5,
                })
            }
          if (menu.values[0] === '3') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: embed10,
                })
            }
           if (menu.values[0] === '6') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: embed6,
                })
            }
            if (menu.values[0] === '7') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: embed7,
                })
            }
            if (menu.values[0] === '8') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: embed9,
                })
            }
            if (menu.values[0] === '5') {
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
  guildOnly: true,
  permLevel: 0,
  aliases: ["y","help","h"]
}
exports.help = {
    name: "yardım",
    description: "Gelişmiş Yardım",
    usage: "<prefix>yardım",
}