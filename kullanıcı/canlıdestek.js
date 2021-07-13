const Discord = require("discord.js");
const ayarlar = require('../../ayarlar.json');

exports.run = (client, message, args) => {
   let devtr = args.slice(0).join(' ');
   
  if (!devtr) return message.reply('Destek Talebi için bir sebep gir!')
  if (devtr.length < 7) return message.channel.send("Sebebiniz Daha Bilgilendirici Olması İçin **En Az 7** Karakterli Olmalıdır!");
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {

    message.channel.send("✅ | Destek Talebini İlettim!")
    let xfalcon = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL()}`)
    .setTitle('Canlı Destek Gerekiyor KOŞ!!!')
    .addField('Sebep:', `${devtr}`)
    .addField(`Sunucunun Davet Linki:`, `${invite}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter('FireStorm Canlı Destek Sistemi');
    client.users.cache.get(ayarlar.sahip).send(xfalcon);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["destek"],
  permLevel: 0
};

exports.help = {
  name: 'canlı-destek',
  description: 'Yapımcıyı Sunucuya Çağırır.',
  usage: 'çağır'
};
