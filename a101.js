const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setDescription('**HARCA HARCA BİTMEZ**') 
message.channel.send(embed)
};exports.conf = {
enabled: true,
guilOnly: true,
aliases: [],
permlevel: 0
};exports.help = {
name: 'a101',
usage:'a101'};