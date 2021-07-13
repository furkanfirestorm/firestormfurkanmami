const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!message.member.roles.cache.has("697084010383278121") && !message.member.hasPermission("MANAGE_MESSAGES") ) 

   return message.channel.send(hata).then(m =>m.delete({timeout:10000}))
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.memberCount.toString().replace(/ /g, "    ")
    var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:00:849286679005102151>`,
    '1': `<a:11:849286579570999296>`,
    '2': `<a:22:849286496082460692>`,
    '3': `<a:33:849286377459286057>`,
    '4': `<a:44:849286294684172318>`,                       
    '5': `<a:55:849286116984619008>`,
    '6': `<a:66:849285842312626206>`,
    '7': `<a:77:849285760427229184> `,
    '8': `<a:88:849285625806061568>`,
    '9': `<a:99:849285464166498304>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:00:849286679005102151>`,
    '1': `<a:11:849286579570999296>`,
    '2': `<a:22:849286496082460692>`,
    '3': `<a:33:849286377459286057>`,
    '4': `<a:44:849286294684172318>`,                       
    '5': `<a:55:849286116984619008>`,
    '6': `<a:66:849285842312626206>`,
    '7': `<a:77:849285760427229184>`,
    '8': `<a:88:849285625806061568>`,
    '9': `<a:99:849285464166498304>`}[d];
      })
    }

  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "SA";
  message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:00:849286679005102151>`,
    '1': `<a:11:849286579570999296>`,
    '2': `<a:22:849286496082460692>`,
    '3': `<a:33:849286377459286057>`,
    '4': `<a:44:849286294684172318>`,                       
    '5': `<a:55:849286116984619008>`,
    '6': `<a:66:849285842312626206>`,
    '7': `<a:77:849285760427229184>`,
    '8': `<a:88:849285625806061568>`,
    '9': `<a:99:849285464166498304>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.cache.filter(m => m.user.presence.status === "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:00:849286679005102151>`,
    '1': `<a:11:849286579570999296>`,
    '2': `<a:22:849286496082460692>`,
    '3': `<a:33:849286377459286057>`,
    '4': `<a:44:849286294684172318>`,                       
    '5': `<a:55:849286116984619008>`,
    '6': `<a:66:849285842312626206>`,
    '7': `<a:77:849285760427229184>`,
    '8': `<a:88:849285625806061568>`,
    '9': `<a:99:849285464166498304>`}[d];
      })
    }


const emoji1 = client.emojis.cache.get("697069423315386378");

 var embed1 = new MessageEmbed()
 .setColor('000000')
 .setAuthor('Noble Bot')
 .setDescription(` **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n  **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n  **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n `)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     var hata = new MessageEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = { 
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sayarrrrrrrrrrrrrrrrrr'
}