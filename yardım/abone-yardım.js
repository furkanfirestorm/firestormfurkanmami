const db = require('quick.db')
let ayarlar = require ('../../ayarlar.json')
const discord = require('discord.js');
exports.run = async(client, message, args) => {
  
    const embed = new discord.MessageEmbed()
    .setColor("#2f3136")
    
    .setTitle("FireStorm Abone Sistemi")
    
    .setImage("https://cdn.discordapp.com/attachments/859019703845388338/863510699547426836/standard_42.gif")
    
    .setTitle('**Abone Yardım Menüsü**')
    
    .addField('/`f!abone/`','**Abone Rolü Verir!**', true)
    
    .addField('/`f!abone-kanal-ayarla/`','**Abone Kanalı Olunacak Kanalı Seçersiniz.**', true)
    
    .addField('/`f!abone-rol-ayarla/`','**Abone Olunca Verilecek Rolü Ayarlarsınız.**', true)
    
    .addField('/`f!abone-sistem-kapat/`','**Abone Sistemini Kapatır.**', true)
    
    .addField('/`f!abone-istatistik/`','**Abone İstatistiklerine Bakarsınız.**', true)
    
    .addField('/`f!abone-sayısını-sıfırla/`','**Abone İstatistiklerini Sıfırlarsınız.**', true)
    
    .addField('/`f!abone-yetkilisi-ayarla/`','**Abone Yetkilisini Ayarlarsınız.**', true)
    
  message.channel.send(embed)
  message.react('<a:Onay1:858295151038562305>')
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['subscribe-help']



};
exports.help = {
name: "abone-yardım"
};