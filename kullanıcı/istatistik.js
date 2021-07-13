const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTimestamp()
    .setFooter("© 2021 FireStorm", client.user.avatarURL())
    .addField("• | **Botun Sahibi**", "<@740954261541879828>,<@692435655665385564>")
    .addField("<a:emoji_63:830077427493503008> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:Dier5:803656074892279810> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:Tik:811509161753182229> **Çalışma süresi**", seksizaman, true)
    .addField("<:member:780805634945712149> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:moderasyon:852911278036877322> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<:mesajkanali:836688784540172308> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<:discord:847998967424876564> **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<a:fiber_onayland:756787666116280380> **Node.JS sürüm**", `${process.version}`, true)
    .addField("<:fiber_i:817851696926556170> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<a:mor:764800014215282689> **Bit**", `\`${os.arch()}\``, true)
    .addField("<a:raptiye:852540143453863956> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["is"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};