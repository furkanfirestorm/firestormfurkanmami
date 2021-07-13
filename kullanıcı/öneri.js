const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Öneri Bildirmek için Bir Şey Yazınız.** :x:')
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
const embed = new Discord.MessageEmbed()
.setTitle("FireStorm Öneri Sistemi")
.setColor('BLUE')
.setDescription(`**Öneri Kanalı** ${message.channel.name} \n\n **Öneri Bildirilen Sunucu** \`${message.guild.name}\` \n \n **Öneri'yi Bildiren Kullanıcı** <@${message.author.id}> \n\n **Bildirilen Öneri :** \`${istek}\` \n\n **Sunucu Davet ${invite}** `)
client.channels.cache.get('863350188063981580').send(embed)
  }) 
message.channel.send("**Öneri bildiriminiz gönderildi. <a:Onay1:827821773252067400>**").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öneri'],
  permLevel: 0  
};

exports.help = {
  name: 'öneri',
  description: 'bug belirtmeye yarar',
  usage: 'bug-bildir <bug>'
}