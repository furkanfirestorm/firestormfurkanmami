const db = require('quick.db')
let ayarlar = require ('../../ayarlar.json')
const discord = require('discord.js');
exports.run = async(client, message, args) => {
  
    const embed = new discord.MessageEmbed()
    .setColor("#2f3136")
    
    .setTitle("FireStorm Giriş-Çıkış Sistemi")
    
    .setImage("https://cdn.discordapp.com/attachments/856225218791997454/863318067190562846/standard_39.gif")
    
    .addField('<a:bb:858295170403532830> /`f!hg-bb yardım/`', 'hg bb yardım menüsünü açar', true)
    
    .addField('<a:bb:858295170403532830> /`f!özel-hoşgeldin-ayarla/`', '**dm den hg ayarlarsınız.**', true)
    
    .addField('<a:bb:858295170403532830> /`f!özel-görüşürüz-ayarla/`', '**dm den bb ayarlar**', true)
    
    .addField('<a:bb:858295170403532830> /`f!resimli-hgbb ayarla #kanal/`', '**Resimli hg bb Sistemini Ayarlar.**', true)
    
    .addField('<a:bb:858295170403532830> /`f!resimli-hgbb sıfırla/`', '**Hem kapatır ve sıfırlar.**', true)
    
    .addField('<a:bb:858295170403532830> /`f!güvenlik-giriş #kanal/`', '**Güvenlik giriş ayarlar.**', true)
    
   .addField('<a:bb:858295170403532830> /`f!güvenlik-çıkış #kanal/`', '**Güvenlik çıkış ayarlar.**', true)
    
   .addField('<a:bb:858295170403532830> /`f!güvenlik-giriş-kapat/`', '**Güvenlik giriş kapatır**', true)
    
   .addField('<a:bb:858295170403532830> /`f!güvenlik-çıkış-kapat/`', '**Güvenlik çıkış kapatır**', true)
    
    .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=820427778075394068&permissions=8&scope=bot) | [Destek](https://discord.gg/2CmVPzJMTp) " )
  
    message.channel.send(embed)
    message.react('<a:Onay1:858295151038562305>')
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['introduction-help']



};
exports.help = {
name: "giriş-yardım"
};