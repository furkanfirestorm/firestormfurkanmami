const db = require('quick.db')
let ayarlar = require ('../../ayarlar.json')
const discord = require('discord.js');
exports.run = async(client, message, args) => {
 
    const embed = new discord.MessageEmbed()
    .setColor("#2f3136")
    
    .setTitle('**FireStorm Eğlence Komutları!**')
    
    .setImage("https://cdn.discordapp.com/attachments/856225218791997454/863319830823043072/standard_40.gif")
    
    .addField('<a:Onay1:858295151038562305> `f!youtube`', '**İstediğiniz videoyu aratıp izleyebilirsiniz.**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!adamasmaca`','**Adam Asmaca Oynarsınız.**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!tokat`','**Etiketlediğiniz Kullanıcıya Tokat Atar.**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!aduket-çek`','**Etiketlediğiniz Kullanıcıya Aduket Çeker.**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!yazan`','**Klavyeyi Kırmaya Hazırmısın?**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!1v1`', '**İstediğiniz Bir Kullanıcıyla 1v1 Atarsınız.**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!adam-asmaca`', '**Adam Asmaca Oynarsınız.**', true)
    
   .addField('<a:Onay1:858295151038562305> `f!ara-155`', '**Polisi Ararsınız.**', true)
    
   .addField('<a:Onay1:858295151038562305> `f!ara-112`', '**Ambulans Çağırırsınız.**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!fake-mesaj <id> mesaj`', '**Troll komutu**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!aşk-ölçer @kullanıcı`', '**Aşk Derecesi Ölçersiniz.**', true)
    
    .addField('<a:Onay1:858295151038562305> `f!fbi-gif`','**Fbi Gif Atar**', true)
              
    .addField('<a:Onay1:858295151038562305> `f!kasa-aç`', '**Kasa açar**', true)
    
     .addField('<a:Onay1:858295151038562305> `f!sor`', '**Bota soru sorarsınız**', true)
  
    .addField('<a:Onay1:858295151038562305> `f!yumruk-at @kullanıcı`', '**Etiketlediğiniz kulanıcıya yumruk atar**', true)
    
    .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=856200669346005002&scope=bot&permissions=8) | [Destek](https://discord.gg/VSzzeH7EzJ) " )
  
    message.channel.send(embed)
    message.react('<a:Onay1:858295151038562305>')
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['entertainment']



};
exports.help = {
name: "eğlence"
};