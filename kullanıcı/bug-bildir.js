const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Şey Yazınız.** :x:')
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
const embed = new Discord.MessageEmbed()
.setTitle("FireStorm Bug Bildirme Sistemi")
.setColor('BLUE')
.setDescription(`**Bug Bildirme Kanalı** ${message.channel.name} \n\n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n\n **Bildirilen Bug :** \`${istek}\` \n\n **Sunucu Davet ${invite}** `)
client.channels.cache.get('863350188063981580').send(embed)
  }) 
message.channel.send("**Bug bildiriminiz gönderildi. <a:Onay1:827821773252067400>**").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bugbildir'],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'bug belirtmeye yarar',
  usage: 'bug-bildir <bug>'
}