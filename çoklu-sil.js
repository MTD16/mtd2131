const disbut = require("discord-buttons");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("**Bu Komutu Kullanabilmek İçin `Mesajları Yönet` Yetkisine Sahip Olmalısın !**")
        .setColor("RANDOM")
        );
  const btn1 = new disbut.MessageMenuOption()
    .setLabel("100")
    .setValue("1")
    .setEmoji("914227818517364816");
  const btn2 = new disbut.MessageMenuOption()
    .setLabel("200")
    .setValue("2")
    .setEmoji("914227818517364816");
  const btn3 = new disbut.MessageMenuOption()
    .setLabel("300")
    .setValue("3")
    .setEmoji("914227818517364816");
  const btn4 = new disbut.MessageMenuOption()
    .setLabel("400")
    .setValue("4")
    .setEmoji("914227818517364816");
  const btn5 = new disbut.MessageMenuOption()
    .setLabel("500")
    .setValue("5")
    .setEmoji("914227818517364816");
  const btn6 = new disbut.MessageMenuOption()
    .setLabel("600")
    .setValue("6")
    .setEmoji("914227818517364816");
  const btn7 = new disbut.MessageMenuOption()
    .setLabel("700")
    .setValue("7")
    .setEmoji("914227818517364816");
  const btn8 = new disbut.MessageMenuOption()
    .setLabel("800")
    .setValue("8")
    .setEmoji("914227818517364816");
  const btn9 = new disbut.MessageMenuOption()
    .setLabel("900")
    .setValue("9")
    .setEmoji("914227818517364816");
  const btn10 = new disbut.MessageMenuOption()
    .setLabel("1000")
    .setValue("10")
    .setEmoji("914227818517364816");
    const btn20 = new disbut.MessageMenuOption()
    .setLabel("2000")
    .setValue("20")
    .setEmoji("914227818517364816");

  const menu = new disbut.MessageMenu()
    .addOptions(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn20)
    .setMaxValues(1)
    .setMinValues(1)
    .setID("menu");

  const hakkında = new Discord.MessageEmbed()
    .setTitle(" Çoklu sil")
    .setDescription(
      `>>> **Merhaba, aşağıdaki menüden kaç mesaj sileceğini seçebilirsin.**`
    );

  let msg = await message.channel.send({ embed: hakkında, component: menu });

  const filter = menu => menu.clicker.user.id === message.author.id; //user filter (author only)
  const collector = message.createMenuCollector(filter, { time: 120000 });
  client.on("clickMenu", menu => {
    if (menu.clicker.id !== message.author.id) return;
    menu.reply.defer();
    if (menu.values[0] === "1") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
    }
    if (menu.values[0] === "2") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
    }
    if (menu.values[0] === "3") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
    }
    if (menu.values[0] === "4") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
      message.channel.bulkDelete(100); // 4
    }
    if (menu.values[0] === "5") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
      message.channel.bulkDelete(100); // 4
      message.channel.bulkDelete(100); // 5
    }
    if (menu.values[0] === "6") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
      message.channel.bulkDelete(100); // 4
      message.channel.bulkDelete(100); // 5
      message.channel.bulkDelete(100); // 6
    }
    if (menu.values[0] === "7") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
      message.channel.bulkDelete(100); // 4
      message.channel.bulkDelete(100); // 5
      message.channel.bulkDelete(100); // 6
      message.channel.bulkDelete(100); // 7
    }
    if (menu.values[0] === "8") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
      message.channel.bulkDelete(100); // 4
      message.channel.bulkDelete(100); // 5
      message.channel.bulkDelete(100); // 6
      message.channel.bulkDelete(100); // 7
      message.channel.bulkDelete(100); // 8
    }
    if (menu.values[0] === "9") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
      message.channel.bulkDelete(100); // 4
      message.channel.bulkDelete(100); // 5
      message.channel.bulkDelete(100); // 6
      message.channel.bulkDelete(100); // 7
      message.channel.bulkDelete(100); // 8
      message.channel.bulkDelete(100); // 9
    }
    if (menu.values[0] === "10") {
      //kod ekleyebilirsiniz
      message.channel.bulkDelete(100); // 1
      message.channel.bulkDelete(100); // 2
      message.channel.bulkDelete(100); // 3
      message.channel.bulkDelete(100); // 4
      message.channel.bulkDelete(100); // 5
      message.channel.bulkDelete(100); // 6
      message.channel.bulkDelete(100); // 7
      message.channel.bulkDelete(100); // 8
      message.channel.bulkDelete(100); // 9
      message.channel.bulkDelete(100); // 10
    }
    if (menu.values[0] === "20") {
        //kod ekleyebilirsiniz
        message.channel.bulkDelete(100); // 1
        message.channel.bulkDelete(100); // 2
        message.channel.bulkDelete(100); // 3
        message.channel.bulkDelete(100); // 4
        message.channel.bulkDelete(100); // 5
        message.channel.bulkDelete(100); // 6
        message.channel.bulkDelete(100); // 7
        message.channel.bulkDelete(100); // 8
        message.channel.bulkDelete(100); // 9
        message.channel.bulkDelete(100); // 10
        message.channel.bulkDelete(100); // 1
        message.channel.bulkDelete(100); // 2
        message.channel.bulkDelete(100); // 3
        message.channel.bulkDelete(100); // 4
        message.channel.bulkDelete(100); // 5
        message.channel.bulkDelete(100); // 6
        message.channel.bulkDelete(100); // 7
        message.channel.bulkDelete(100); // 8
        message.channel.bulkDelete(100); // 9
        message.channel.bulkDelete(100); // 10
      }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "çoklu-sil"
};
