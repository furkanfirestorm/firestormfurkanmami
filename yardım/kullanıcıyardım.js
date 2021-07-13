const db = require('quick.db')
let ayarlar = require ('../../ayarlar.json')
const discord = require('discord.js');
exports.run = async(client, message, args) => {
  
    const embed = new discord.MessageEmbed()
    .setColor("#2f3136")
    
    .setTitle('**FireStorm Kullanıcı Komutları!**')
    
    .setImage("https://cdn.discordapp.com/attachments/856225218791997454/863315059128139796/standard_36.gif")
    
    .addField('<:members:850085184674201660> `f!ping`', '**Botun ve mesaj gecikme pingini gösterir**', true)
    
    .addField('<:members:850085184674201660> `f!token`', '**Size Tokenimi Veririm.**', true)
    
    .addField('<:members:850085184674201660> `f!canlı-destek`', '**Bir Sorunla Karşılaştığınızda Destek Alırsınız.**', true)
    
   .addField('<:members:850085184674201660> `f!sunucu-bilgi`', '**Sunucunun bilgisini gösterir**', true)
    
   .addField('<:members:850085184674201660> `f!bug-bildir`', '**Bug Bildirirsiniz.**', true) 
    
   .addField('<:members:850085184674201660> `f!öneri`', '**Bot Hakkında Öneri Verirsiniz.**', true)
    
    .addField('<:members:850085184674201660> `f!afk <sebeb>`', '**Afk komutudur**', true)
  
    .addField('<:members:850085184674201660> `f!atatürk`', '**ATATÜRK GİFİ ATAR**', true) 
    
    .addField('<:members:850085184674201660> `f!oynat yardım`', '**Aktivite yaparsınız**', true) 
    
    .addField('<:members:850085184674201660> `f!türk`', '**NE MUTLU TÜRKÜM DİYENE!** :flag_tr:', true) 
    
    .addField('<:members:850085184674201660> `f!ters-yazı`', '**Yazdığınız yazıyı tersten çevirir**',true)
    
    .addField('<:members:850085184674201660> `f!avatar`', '**Etiketlediğiniz kişinin avatarını gösterir**', true)
  
    .addField('<:members:850085184674201660> `f!kullanıcı-bilgi`', '**Etiketlediğin kullanıcının bilgisini gösterir**', true)
    
    .addField('<:members:850085184674201660> `f!istatistik`', '**Botun istatistiğini gösterir**', true)  
    
    .addField('<:members:850085184674201660> `f!korona`', '**Korona durumunu gösterir**', true)  
    
    .addField('<:members:850085184674201660> `f!davet`', '**Botun davet linklerini gösterir**', true)
   
    .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=856200669346005002&scope=bot&permissions=8) | [Destek](https://discord.gg/VSzzeH7EzJ) " )
  
    message.channel.send(embed)
    message.react('<a:Onay1:858295151038562305>')
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['member']



};
exports.help = {
name: "kullanıcı"
};