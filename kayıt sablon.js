const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setDescription('**kendi yaptığımız kayıt şablonu almak için [tıkla](https://discord.new/GTECgwJdgM2w)**') 
message.channel.send(embed)
};exports.conf = {
enabled: true,
guilOnly: true,
aliases: [],
permlevel: 0
};exports.help = {
name: 'kayıt-şablon',
usage:'kayıt-şablon'};