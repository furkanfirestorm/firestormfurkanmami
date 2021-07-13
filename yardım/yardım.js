const discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
   
const embed = new discord.MessageEmbed()
     
    .setColor("#2f3136")
  
    .setTitle('**FireStorm Yardım Menüsü!**')
    
    .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
    
    .setImage("https://cdn.discordapp.com/attachments/856225218791997454/863314131213746186/standard_35.gif")

   .setDescription(`
<a:Ayarlar:858295168323420171> \`f!moderasyon\` \n **> Moderasyon Komutlarını Gösterir.**
<a:tik3:858295143677034507> \`f!koruma-yardım\` \n **> Sunucu Koruma Sistemlerini Görürsünüz.**
<a:bb:858295170403532830> \`f!giriş-yardım\` \n **> Giriş Yardım Menüsünü Açar.**
<a:Onay1:858295151038562305> \`f!eğlence\` \n **> Eğlence Komutlarını Gösterir.**
<a:ydlz:858295155316359188> \`f!abone-yardım\` \n **> Abone Yardım Menüsünü Açar.**
<:members:850085184674201660> \`f!kullanıcı\` \n **> Kullanıcı Komutlarını Gösterir.**
<a:pin:858295172222418984> \`f!şablon-yardım\` \n **> Şablon Sistemini Gösterir.**
m
`)
    .addField(`<a:alarm1:858295166556831774>  Davet Et`,'**[Ekle](https://discord.com/oauth2/authorize?client_id=856200669346005002&scope=bot&permissions=8)**', true)

    .addField("<a:Onay1:858295151038562305>  Destek Sunucum",'**[Tıkla](https://discord.gg/VSzzeH7EzJ)**', true)
    message.channel.send(embed)
    message.react('<a:Onay1:858295151038562305>')
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
}; 