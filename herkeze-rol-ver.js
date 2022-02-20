exports.run = async (client, message, args) => {
    const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    const leax = (A, B) => { return Math.floor((A * 100) / B) };

    if (!rol) return message.channel.send("Rol etiketlemelisin.")
    try {
        const mesaj = await message.channel.send(`Rol dağıtılmaya başladı!`)
        message.guild.members.cache.filter(x => !x.user.bot).forEach(member => member.roles.add(rol))
        setInterval(() => {
            mesaj.edit(`Rol dağıtılmaya başladı! **${leax(message.guild.roles.cache.get(rol.id).members.size, message.guild.memberCount)}%**`)
        }, 5000);
    } catch (err) {
        console.log("Hata" + err)
    }
}
exports.conf = {
    aliases: []
}

exports.help = {
    name: "herkese-rolver"
}