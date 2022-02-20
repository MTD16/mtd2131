const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
require('discord-buttons')(client)
require("./yanıtla.js")
const db = require("inflames.db");
const weather = require('weather-js');
const axios = require("axios");
const os = require("os");
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
//TOKENİ ENVDEN ÇIKARMAYIN VE KİMSEYE PAYLAŞMAYIN ALTYAPIYI REMİXLEDİĞİNİZ ANDA SORUMLULUK SİZE AİTDİR.



client.on("message", msg => {
  var dm = client.channels.cache.get("899364290908262431");
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${msg.author.avatarURL()}`)
      .addField("Gönderen", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .addField("Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});



client.on("ready", () => {
  client.channels.cache

    .get("899364290908262431")

    .send("Başarılı Bir Şekilde Aktif Oldum!");
});


const { Database } = require("nukleon");
const ndb = new Database("./database.json");




client.on("message", async msg => {
    const g = await ndb.fetch(`reklamengel_${msg.guild.id}`);
    if (g === "aktif") {
        if (msg.content.toLowerCase().includes('.net') ||
    msg.content.toLowerCase().includes('.com') || 
    msg.content.toLowerCase().includes('.xyz') || 
    msg.content.toLowerCase().includes('.tk') ||  
    msg.content.toLowerCase().includes('.tr') ||  
    msg.content.toLowerCase().includes('.cf') || 
    msg.content.toLowerCase().includes('.pw') || 
    msg.content.toLowerCase().includes('.io') || 
    msg.content.toLowerCase().includes('.me') || 
    msg.content.toLowerCase().includes('.gg') || 
    msg.content.toLowerCase().includes('www') || 
    msg.content.toLowerCase().includes('http') || 
    msg.content.toLowerCase().includes('.gl') || 
    msg.content.toLowerCase().includes('.org') ||
    msg.content.toLowerCase().includes('.com.tr') || 
    msg.content.toLowerCase().includes('.biz') || 
    msg.content.toLowerCase().includes('net') || 
    msg.content.toLowerCase().includes('.rf.gd') || 
    msg.content.toLowerCase().includes('.az') ||
    msg.content.toLowerCase().includes('discord.gg') || 
    msg.content.toLowerCase().includes('party')) {
            if (msg.author.id == msg.guild.owner.id) return;
            if (msg.author.id == "668864984641437697") return;
            if (msg.author.id == client.user.id) return;
            const anti31 = new Discord.MessageEmbed()
                
                .setDescription(`<@${msg.author.id}> ndn reklam yapıyon şimdi ?`)
                .setColor('#2f3136');
            msg.delete();
            msg.channel.send(anti31).then(msg => msg.delete({ timeout: 3000 }))
        }
    } else if (g === "deaktif") {
    }
    if (!g) return;
}); 

client.on("guildCreate", guild => {
  guild.owner.send("Beni eklediğin için teşekkürler destek swmde gel! https://discord.gg/CZGZu8E3kA \n Bu Mesaj Sadece Sunucu Sahibini Gider")
}); 

client.on("guildMemberAdd", async member => {
if(member.guild.id !== "827514362662879242") { return; } else {
let covid = client.users.cache.get(member.id).bot
if(covid === true) { member.roles.add("900465135712350329") } else { member.roles.add("899710838074663012") }
}
});


client.on("ready", () => {
  client.channels.cache.get("900613581077364776").join();   
})



client.on("message", m => {
    if(!m.guild) return;
    let kanal = ndb.fetch(`sadefotokanal_${m.guild.id}`)
    const gereksiz = ndb.fetch(`sadefoto_${m.guild.id}`);
    if (gereksiz === "aktif") {
        if (m.channel.id !== kanal) {
            return;
        }
        if (m.author.id === m.guild.ownerID)
            return;
        if (m.author.id === client.user.id)
            return;
        if (m.attachments.size < 1) {
            m.delete();
        }
        if (gereksiz === "deaktif") {
            return;
        }
    }
});

{
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
client.on("clickButton", async button => {

let data = ndb.get(`buttonvar_${button.guild.id}_${button.id}`)
if(!data) return;

let emote = {
başarılı: "✅"
}

let member = button.guild.members.cache.get(button.clicker.user.id)

button.reply.think(true).then(async a => {

if(member.roles.cache.has(data.rol)) {
 
a.edit(`> ${emote.başarılı} **Başarılı!** Butona tıkladığın için <@&${data.rol}> Rolünü senden aldım.`)
member.roles.remove(data.rol)

} else {

a.edit(`> ${emote.başarılı} **Başarılı!** Butona tıkladığın için <@&${data.rol}> Rolünü sana verdim.`)
member.roles.add(data.rol)

} 

})

})
}






client.on("ready", () => {
    setInterval(function() {
      let yapımcı = client.users.cache.get("668864984641437697")
      let koronamıne;
      let durum;
    if(yapımcı.presence.status === "online"){
         durum = "Online."
         koronamıne = ""
      } else if (yapımcı.presence.status === "dnd"){
         durum = "Rahatsız etmeyin."
         koronamıne = ""
      } else if(yapımcı.presence.status === "offline"){
         durum = "Çevrimdışı."
         koronamıne = ""
      } else if(yapımcı.presence.status === "idle"){
         durum = "Boşta(AFK)."
         koronamıne = ""
      }
  const embed = new Discord.MessageEmbed()
  .setTitle(`MTD`)
  .setColor("RED")
  .setDescription(`
    **Geliştirici:** ${yapımcı.tag}

    **Yapımcı Durum:** ${koronamıne} | ${durum}
  `)
  .setTimestamp()
  client.channels.cache.get("903743235988525138").messages.fetch("903743271807897690")
          .then(msg => { msg.edit(embed)
          });
  }, 1000 * 10); //şu anda her 10 saniyede bir editlicek mesajı
});

let defa = ndb.get(`covid19Puan`)


client.on("ready", () => {
    setInterval(function() {
    const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]"); 
  const embed = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setDescription(`
  **Developer:** ${client.users.cache.get("668864984641437697").tag}
  
  <a:tikbeyaz:910628488606781440> **Prefix:** ${ayarlar.p}
  
  <a:load:910632369218785320>**Ping:** ${client.ws.ping}
  
  <a:tikbeyaz:910628488606781440> **Toplam Kullanma** ${defa}

  <a:tikbeyaz:910628488606781440> **Sunucu sayısı:** ${client.guilds.cache.size}
  
  <a:tikbeyaz:910628488606781440>**Kanal Sayısı:** ${client.channels.cache.size}
  
  <a:tikbeyaz:910628488606781440>**Kullanıcı Sayısı:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
  
  <a:791574363161624587:909125549140611183>**Uptime Süresi:** ${uptime}
  
  <a:tikbeyaz:910628488606781440>**Komut Sayısı:** ${client.commands.size}
  
  <:lna8:910633961934438401>**Node.js Sürümü:** ${process.version}
  
  <:lna7:910633963364683796>**Discord.js Sürümü:** ${Discord.version}
  

  `)
  .setTimestamp()
  client.channels.cache.get("903740772661215242").messages.fetch("903741739943219201")
          .then(msg => { msg.edit(embed)
          });
  }, 1000 * 3);
});

// mod log
client.on('guildBanAdd', async (guild, user) => {
  let modlogs = ndb.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${client.user.username} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
  let modlogs = ndb.get(`modlogkanaly_${guild.id}`)
   const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor('BLACK')
     .setAuthor("Bir kişinin yasağı kaldırıldı")
     .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
     .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
     .setFooter(`${client.user.username} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
client.on('channelCreate', async channel => {
  let modlogs = ndb.get(`modlogkanaly_${channel.guild.id}`)
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     if (channel.type === "text") {
       let embed = new Discord.MessageEmbed()
       .setColor('BLACK')
       .setAuthor("Bir Kanal Oluşturuldu")
       .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
       .addField(`Oluşturulan Kanalın Türü : `, `Yazı`)
       .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
       .setFooter(`${client.user.username} | Mod-Log Sistemi`)
       .setTimestamp()
       modlogkanal.send(embed)
     }
       if (channel.type === "voice") {
       
         let embed = new Discord.MessageEmbed()
         .setColor('BLACK')
         .setAuthor("Bir Kanal Oluşturuldu")
         .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
         .addField(`Oluşturulan Kanalın Türü : `, `Ses`)
         .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
         .setFooter(`${client.user.username} | Mod-Log Sistemi`)
         .setTimestamp()
         modlogkanal.send(embed)
 
 
     }
 }});

 client.on('channelDelete', async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
let modlogs = ndb.get(`modlogkanaly_${channel.guild.id}`)
const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if(!modlogs) return;
if(modlogs) {
if (channel.type === "text") {
let embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor("Bir Kanal Silindi")
.addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
.addField(`Silinen Kanalın Türü : `, `Yazı`)
.addField(`Kanalı Silen : `, `<@${user.id}>`)
.setFooter(`${client.user.username} | Mod-Log Sistemi`)
.setTimestamp()
modlogkanal.send(embed)
}
  if (channel.type === "voice") {

    let embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor("Bir Kanal Silindi")
    .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
    .addField(`Silinen Kanalın Türü : `, `Ses`)
    .addField(`Kanalı Silen : `, `<@${user.id}>`)
    .setFooter(`${client.user.username} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
   }
  }
});

client.on('roleDelete', async role => {
  let modlogs =  ndb.get(`modlogkanaly_${role.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor('BLACK')
     .setAuthor("Bir Rol Silindi")
     .addField(`Silinen Rolün İsmi : `, `${role.name}`)
     .addField(`Rolü Silen : `, `<@${user.id}>`)
     .setFooter(`${client.user.username} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
 
 client.on('emojiDelete', async emoji => {
  let modlogs = ndb.get(`modlogkanaly_${emoji.guild.id}`)
  let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor('BLACK')
     .setAuthor("Bir Emoji Silindi")
     .addField(`Silinen Emojinin İsmi : `, `${emoji.name}`)
     .addField(`Emojiyi Silen : `, `<@${user.id}>`)
     .setFooter(`${client.user.username} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
  

 client.on('roleCreate', async role => {
  let modlogs =  ndb.get(`modlogkanaly_${role.guild.id}`)
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor('BLACK')
      .setAuthor("Bir Rol Oluşturuldu")
      .addField(`Oluşturulan Rolün İsmi : `, `${role.name}`)
      .addField(`Rolü Oluşturan : `, `<@${user.id}>`)
      .setFooter(`${client.user.username} | Mod-Log Sistemi`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });
// son
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type === "dm") return;
  if (newMessage.content.startsWith(ayarlar.prefix)) return;
  let sc = await ndb.fetch(`modlogkanaly_${newMessage.guild.id}`);
  let scbul = newMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL())
    .addField("Kullanıcı", newMessage.author)
    .addField("Eski Mesaj", "```" + oldMessage.content + "```")
    .addField("Yeni Mesaj", "```" + newMessage.content + "```")
    .addField("Kanal Adı", newMessage.channel.name)
    .addField("Mesaj ID", newMessage.id)
    .addField("Kullanıcı ID", newMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours() +
        3}:${newMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on("messageDelete", async deletedMessage => {
  if (deletedMessage.author.bot || deletedMessage.channel.type === "dm") return;
  if (deletedMessage.content.startsWith(ayarlar.prefix)) return;
  let sc = await ndb.fetch(`modlogkanaly_${deletedMessage.guild.id}`);
  let scbul = deletedMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  let embed44 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`Mesaj Silindi`, deletedMessage.author.avatarURL())
    .addField("Kullanıcı", deletedMessage.author)
    .addField("Silinen Mesaj", "```" + deletedMessage.content + "```")
    .addField("Kanal Adı", deletedMessage.channel.name)
    .addField("Mesaj ID", deletedMessage.id)
    .addField("Kullanıcı ID", deletedMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${deletedMessage.createdAt.getHours() +
        3}:${deletedMessage.createdAt.getMinutes()}`
    );
 scbul.send(embed44)
});

function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
} 

client.on('message', async(message) => {
if (!message.guild) return
let acikmi = await ndb.fetch(`${message.guild.id}.capsengel`)
if (!acikmi) return
if (message.author.bot) return
if (message.member.hasPermission("MANAGE_MESSAGES")) return
let matched = message.content.replace(/[^A-Z]/g, "").length
let yuzde = percentage(matched, message.content.length)
if (Math.round(yuzde) > acikmi.yuzde) {
  message.delete()
  message.author.send(new Discord.MessageEmbed().setColor("BLACK").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock Engelleme Sistemi").setDescription("**Uyarı! "+message.guild.name+" sunucusunda büyük harfle yazma engeli bulunmaktadır!**\nBu sebepten göndermiş olduğunuz mesaj silindi."))
  message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock Engelleme Sistemi",message.author.displayAvatarURL({dynamic:true})).setDescription(message.author.username+" - "+(message.member.nickname ? `${message.member.nickname} - ${message.author.id}` : message.author.id)+"\n**Uyarı!  Bu sunucuda büyük harfle yazma engeli bulunmaktadır!**\nBu sebepten göndermiş olduğunuz mesaj silindi.")).then(msg=>msg.delete({timeout:3000}))
}else{return}
})


client.on("message", async msg => {

    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
  const gereksiz = await ndb.fetch(`küfürengel_${msg.guild.id}`);
  if (gereksiz === "aktif") {
if (msg.content.toLowerCase().includes('sg') ||
msg.content.toLowerCase().includes('amk') || 
msg.content.toLowerCase().includes('aq') || 
msg.content.toLowerCase().includes('mk') || 
msg.content.toLowerCase().includes('oc') || 
msg.content.toLowerCase().includes('oç') || 
msg.content.toLowerCase().includes('orospu çoçuğu') || 
msg.content.toLowerCase().includes('orospu') || 
msg.content.toLowerCase().includes('amına kodugum') || msg.content.toLowerCase().includes('siktir') || 
msg.content.toLowerCase().includes('yavşak') || 
msg.content.toLowerCase().includes('şerefsiz') || 
msg.content.toLowerCase().includes('namussuz') ||
msg.content.toLowerCase().includes('ananı sikiyim') || 
msg.content.toLowerCase().includes('amını sikiyim') || 
msg.content.toLowerCase().includes('yarrağımı ye') || 
msg.content.toLowerCase().includes('babanı sikiyim') || 
msg.content.toLowerCase().includes('m@l') ||
msg.content.toLowerCase().includes('slk') ||
msg.content.toLowerCase().includes('0ç') ||
msg.content.toLowerCase().includes('sik') || 
msg.content.toLowerCase().includes('piç')  ) 
{
 
const sa = new Discord.MessageEmbed()
.setTitle('ＭＴＤ')
.setDescription(`<@${msg.author.id}> küfür etme ibne, sıkıntılı mısın?`)
.setColor('#2f3136');
msg.delete();
msg.author.send(sa).then(msg => msg.delete({ timeout: 3000 }))
  
}
    } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});

client.on("guildMemberAdd", async member => {
  let kanal = await ndb.fetch(`otoRK_${member.guild.id}`);
  let rol = await ndb.fetch(`otoRL_${member.guild.id}`);
  let mesaj = ndb.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;
const Asreaper = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setDescription( " **" +
          member.user.username +
          "** hoş geldin! Otomatik rolün verildi. Seninle beraber **" +
          member.guild.memberCount +
          " **kişiyiz!")
  if (!mesaj) {
    client.channels.cache
      .get(kanal)
      .send(Asreaper);
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj
      .replace("-uye-", `${member.user}`)
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
  }
});



client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let kanal = ndb.fetch(`kayıthg_${member.guild.id}`);
  let kayıtçı = ndb.fetch(`kayıtçırol_${member.guild.id}`);
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;

  let user = client.users.cache.get(member.id);
  require("moment-duration-format");

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const ayyy = moment.duration(kurulus).format("M");
  var kontrol = [];

  if (ayyy < 1) {
    kontrol = "**Şüpheli** ";
  }
  if (ayyy > 1) {
    kontrol = "**Güvenilir** ";
  }

  if (!kanal) return;

  ///////////////////////

  let randomgif = [ 
             "https://media.discordapp.net/attachments/744976703163728032/751451554132918323/tenor-1.gif", "https://media.discordapp.net/attachments/744976703163728032/751451693992116284/black.gif", "https://media.discordapp.net/attachments/765870655958548490/765871557993824256/tumblr_ozitqtbIIf1tkflzao1_540.gif", "https://media.discordapp.net/attachments/765870655958548490/765871565257965578/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f32622f61352f31312f32626135313161663865.gif"];

  ///////////////////
  const embed = new Discord.MessageEmbed()
    .setColor(0x36393F)
    .setImage(randomgif[Math.floor(Math.random() * randomgif.length)])
    .setThumbnail(
      user.avatarURL({
        dynamic: true,
        format: "gif",
        format: "png",
        format: "jpg",
        size: 2048
      })
    )

 //
  .setDescription(` **Hoş geldin!** ${
        member.user
      }, seninle beraber **${
        guild.memberCount
      }** kişi olduk! \n  Kaydının yapılması için **isim** ve **yaş** yazman gerek. \n  Hesap kuruluş tarihi: **${moment(
        user.createdAt
      ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
        user.createdAt
      ).format(
        "YYYY HH:mm:ss"
       )}** \n  Bu vatandaş: ${kontrol} \n  <@&${kayıtçı}> rolündeki yetkililer sizinle ilgilenecektir.`);
  //
  client.channels.cache.get(kanal).send(embed);
  client.channels.cache.get(kanal).send(`<@&${kayıtçı}> ${member.user}`);
});
  




client.on("message", async msg => {
    let saas = await ndb.fetch(`saas_${msg.guild.id}`);
    if(!saas) return;
    if (saas === "aktif") {
        if (
            msg.content.toLowerCase() == "selam" ||
            msg.content.toLowerCase() == "selamun aleyküm" ||
            msg.content.toLowerCase() == "s.a" ||
            msg.content.toLowerCase() == "sea" ||
            msg.content.toLowerCase() == "sa" ||
            msg.content.toLowerCase() == "selamm" ||
            msg.content.toLowerCase() == "saa" ||
            msg.content.toLowerCase() == "saaa"
           
        )
          if (msg.author.id == "668864984641437697") { msg.reply('aleyküm selam yapımcım hoş geldin çay kahve ne vereyim abime :)') } else {
            return msg.reply("Aleyküm selam hoşgeldin nasılsın :)");
            
        }
    } else {
    }
});

client.on("message", async msg => {
    let saas = await ndb.fetch(`saas_${msg.guild.id}`);
    if(!saas) return;
    if (saas === "aktif") {
        if (
            msg.content.toLowerCase() == "selam" ||
            msg.content.toLowerCase() == "selamun aleyküm" ||
            msg.content.toLowerCase() == "s.a" ||
            msg.content.toLowerCase() == "sea" ||
            msg.content.toLowerCase() == "sa" ||
            msg.content.toLowerCase() == "selamm" ||
            msg.content.toLowerCase() == "saa" ||
            msg.content.toLowerCase() == "saaa"
        )
            
         msg.react('<:As:907614257506578444>')
         
    } else {
    }
});










client.k4h1n = {
  parabirimi: "TL", //Para Birimi TL İsterseniz Dolar Euro Vb. Para Birimleri Girebilirsiniz.
  
  botunuzunidsi: "875341000632049704",
  botismi: "MTD",
  renk: "RED", 
  isimsiz: "Bilinmiyor", 
  rastgelepara: false, 
  minpara: 1, 
  maxpara: 2000,
  çminpara: 10, 
  çmaxpara: 3000, 
  günlükpara: 500, 
  başlangıçparası: 1000, 
  youtuber: 5000

}


client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;

  var afklar = await db.fetch(`afk_${message.author.id}, ${message.guild.id}`);

  if (afklar) {
    db.delete(`afk_${message.author.id}, ${message.guild.id}`);
    db.delete(`afk-zaman_${message.author.id}, ${message.guild.id}`);

    message.reply(`Afklıktan Çıktın!`)
    try {
      let isim = message.member.nickname.replace("[AFK]", "");
      message.member.setNickname(isim).catch(err => console.log(err));
    } catch (err) {
      console.log(err.message);
    }
  }
  let ms = require("ms");

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  let zaman = await db.fetch(`afk-zaman_${kullanıcı.id}, ${message.guild.id}`);

  var süre = ms(Date.now()- zaman);

  var sebep = await db.fetch(`afk_${kullanıcı.id}, ${message.guild.id}`);
  if (
    await db.fetch(
      `afk_${message.mentions.users.first().id}, ${message.guild.id}`
    )
  ) {
    if (süre.days !== 0) {
const dcs = new Discord.MessageEmbed()
.setTitle("<a:uyarii:734688855667638272> Uyarı!")
.setDescription("Etiketlediniz Kullanıcı Afk!")
.addField("Afk Nedeni:",`> ${sebep}`)
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL)
.addField("Afk Olma Süresi",`> ${süre}`);
message.channel.send(dcs)
      return;
    }
  }
});//dcs by Bendis(Kexpert) 





//panel
client.on('ready', async () => {

    const dakika = 7.5;
    setInterval(() => {
        client.guilds.cache.forEach(sunucu => {
            const sunucu_panel = db.get(`panel.${sunucu.id}`);
            if (!sunucu_panel) return;
            sunucu_panel.filter(id => (id.split(" "))[1] === "v").forEach(kanal => {
                try {
                    const kanal_bul = sunucu.channels.cache.get((kanal.split(" "))[0]);
                    if (!kanal_bul) return db.delete(`panel.${sunucu.id}`);
                    let kanal_ayır = kanal_bul.name.split(" ");
                    let sunucu_üyeleri;
                    switch (kanal_ayır[0]) {
                        case "Üye":
                            sunucu_üyeleri = sunucu.members.cache.filter(üye => !üye.user.bot).size;
                            break;
                        case "Bot":
                            sunucu_üyeleri = sunucu.members.cache.filter(üye => üye.user.bot).size;
                            break;
                        case "Çevrim":
                            sunucu_üyeleri = sunucu.members.cache.filter(üye => üye.user.presence.status !== 'offline').size;
                            break;
                    };
                    if (sunucu_üyeleri == undefined) return;
                    if (sunucu_üyeleri === kanal_ayır.slice(-1)) return;
                    kanal_ayır[kanal_ayır.length - 1] = sunucu_üyeleri;
                    return kanal_bul.setName(kanal_ayır.join(" "), 'Sunucu üye panel sistemi').catch(() => {});
                } catch (h) {};
            });
        });  
    }, dakika * 60000);
});




client.on("ready", () => {
  client.channels.cache.get("922561406769971210").join();   
}) 




client.on("ready", () => {
  client.user.setActivity(`${client.guilds.cache.size} Sunucuda ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0) 
    .toLocaleString()} Üyeye Hizmet Ediyorum`);
}); 
