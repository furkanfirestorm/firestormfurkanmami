 const discord = require('discord.js');
exports.run = async(client, message, args) => {
const db = require('quick.db')

    const embed = new discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(' **FireStorm Moderasyon Komutları!**')
    
    .setImage("https://cdn.discordapp.com/attachments/856225218791997454/863314138427162634/standard_33.gif")
   
    .addField(`<a:Ayarlar:858295168323420171> \`f!sa-as aç\``, `**sa as komudunu açarsınız**`, true)
  
    .addField(`<a:Ayarlar:858295168323420171> \`f!modlog-sıfırla**\``, `**Mod Log u Sıfırlar.**`, true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!force-ban\``, `**İp Ban Atarsınız.**`, true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!sa-as kapa\``, `**Sa as komutunu kapar**`, true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!yavaş-mod\``, `**Yavaş Mod Ayarını Yaparsınız.**`, true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!nuke\``, `**Nereye yazarsanız oradaki bütün mesajları siler**`, true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!say\``, `**Sunucunuzda kaç çevrimiçi kişi olduğunu ve kaç kişinin sesli odada olduğunu gösterir**`, true)
  
    .addField(`<a:Ayarlar:858295168323420171> \`f!ototag <TAGINIZ>\``, '**Oto Tag Sistemini Ayarlarsınız.**', true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!reklam-engel aç\``, '**Reklam engel fitresini açar**', true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!reklam-engel kapat\``, '**Reklam engel fitresini kapar**', true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!sil\``, '**Dikkat en çok 100 mesaji siler!**', true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!otorol\``, '**Otorol Ayarlarsınız.**', true)
    
    .addField(`<a:Ayarlar:858295168323420171> \`f!sayaç-ayarla <HEDEF>\``, '**Sayaç Hedefini Ayarlarsınız.**', true)
    
   .addField(`<a:Ayarlar:858295168323420171> \`f!sayaç-kanal-ayarla #kanal\``, `**Sayaç Kanalı Ayarlarsınız.**`, true)
    
   .addField(`<a:Ayarlar:858295168323420171> \`f!mod-log #kanal\``, '**mod log açar**', true)
    
   .addField(`<a:Ayarlar:858295168323420171> \`f!modlog-sıfırla\``, `**mod log sıfırlar**`, true)
              
   .addField(`<a:Ayarlar:858295168323420171> \`f!ban\``, `**İstediğiniz Bir Kullanıcıyı Banlarsınız.**`, true)
    
   .addField(`<a:Ayarlar:858295168323420171> \`f!ban-log #kanal\``, `**Ban log kanalını ayarlarsınız**`, true)
    
   .addField(`<a:Ayarlar:858295168323420171> \`f!unban <kullanıcı İd>\``, '**Banlanan kişinin banını açar**', true)
    
    message.channel.send(embed)
    message.react('<a:Onay1:858295151038562305>')
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['moderation']



};
exports.help = {
name: "moderasyon"
};