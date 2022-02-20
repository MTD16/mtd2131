const Discord = require ("discord.js")
const client = new Discord.Client();
exports.run = (client, message) => {
 

 message.channel.send("Aç bakim").then(message => { 
 var çalmayın = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"]
  var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
  if(Covid < 10) return message.channel.send(`wqeqeqeqe bu ne olm ${Covid} santim ne işe yarar :D`);
  if(Covid >= 11) return message.channel.send(`Eh işte idare eder ${Covid}`);
  if(Covid >= 20) return message.channel.send(`Oha senle evlenene geçmiş olsun şimdiden ${Covid}`);
  if(Covid >= 30) return message.channel.send(`F16 mübarek ${Covid}`);
  if(Covid >= 50) return message.channel.send(`Bu ne olm gökdelen mübarek ${Covid}`);
    
 });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaç-cm'],
  permLevel: 0
};

exports.help = {
  name: "kaçcm",
  description: "",
  usage: ""
};