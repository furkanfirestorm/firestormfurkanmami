const Discord = require('discord.js');
const db = require('quick.db') 
exports.run = async(client, message, args) => {

  if (args[0] === 'aç') {
    
    db.set(`saas_${message.guild.id}`, 'aktif')
    message.channel.send(`sa-as sistemi başarı ile açıldı bundan sonra biri sa diyince as şeklinde cevap vereceğim kapatmak istersen f!sa-as kapat`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`saas_${message.guild.id}`, 'deaktif')
    message.channel.send(`sa-as sistemi başarı ile kapatıldı artık biri sa diyince as şeklinde cevap vermeyeceğim geri açmak istersen f!sa-as aç.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
 
exports.help = {
  name: 'sa-as'
};