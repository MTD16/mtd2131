const fetch = require("node-superfetch"); 

const Discord = require("discord.js");

const db = require("inflames.db")

const config = "AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI"

exports.run = async (client, message, args) => {

    let name = args.join(" ");

    
      if (!name) return message.channel.send("bilinmeyen kanal ismi");

      const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI&maxResults=1&type=channel`)

      .catch(() => message.channel.send("Bilinmeyen kanal hatası."));

  

      if (!channel.body.items[0]) return message.channel.send("Kanal bulunamadı, yeniden dene.");

  

      const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI`)

      .catch(() => message.channel.send("Bilinmeyen kanal data hatası"));

  

      const embed = new Discord.MessageEmbed()

      .setColor("#ff1100")

      .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)

      .setTimestamp(new Date())

      .addField("<:youtubelogotransparentbackground:906607288918351882> Kanal İsmi", channel.body.items[0].snippet.channelTitle, true)

     .addField("<:youtubelogotransparentbackground:906607288918351882> Abone Sayısı", parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)

      .addField("<:youtubelogotransparentbackground:906607288918351882> Toplam İzlenmeler", parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)

      .addField("<:youtubelogotransparentbackground:906607288918351882> Toplam video(lar)", parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)

      .addField("<:youtubelogotransparentbackground:906607288918351882> Oluşturulma tarihi", new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)
      
      .addField("<:youtubelogotransparentbackground:906607288918351882> Kanal Açıklaması", channel.body.items[0].snippet.description, true)
      .addField("<:youtubelogotransparentbackground:906607288918351882> Kanal linki", `[${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true)

      return message.channel.send(embed);

      }


exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['youtube', 'ytstats', 'youtube-ara','yt','yt-ara'],

    permLevel: 0

  };

  

  exports.help = {

    name: 'youtube',

    description: '',

    usage: ''

  };