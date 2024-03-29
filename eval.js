const discord = require("discord.js");
const client = new discord.Client();
const bot = new discord.Client();
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const { Database } =  require('nukleon');
const ndb = new Database("./database.json");
const db = require("inflames.db")
exports.run = (client, message, args) => {
  if (message.author.id !== "668864984641437697") return message.channel.send("Sahibime özel komut!");
  try {
    var code = args.join(" ");
    var evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    let Embed = new discord.MessageEmbed()
      .addField("Giriş", "```js\n" + code + "```")
      .setDescription("```js\n" + clean(evaled) + "```");
    if (Embed.description.length >= 2048)
      Embed.description = Embed.description.substr(0, 2042) + "```...";
    return message.channel.send(Embed);
  } catch (err) {
    message.channel.send(`\`\`js\nHATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kod"],
  permLevel: 4
};

exports.help = {
  name: "eval",
  description: "Kod denemek için kullanılır.",
  usage: "eval [kod]"
};