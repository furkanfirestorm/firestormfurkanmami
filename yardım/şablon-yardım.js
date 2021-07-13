const discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
   
const embed = new discord.MessageEmbed()
     
    .setColor("#2f3136")
  
    .setTitle('**FireStorm Şablon Sistemi*')

.addField('<a:pin:858295172222418984>\`f!oyun-tema\``, `**Sunucunuza Hazır Oyun Teması Kurarsınız.**`, true)
          
.addField('<a:pin:858295172222418984>\`f!public-tema\``, `**Sunucunuza Public Sunucu Teması Kurarsınız.**`, true)
          
.addField('<a:pin:858295172222418984>\`f!j4j-tema\``, `**Sunucunuza Hazır J4J Teması Kurarsınız.**`, true)
          
.addField('<a:pin:858295172222418984>\`f!normal-tema\``, `**Sunucunuza Normal Sunucu Teması Kurarsınız.**`, true)
          
.addField('<a:pin:858295172222418984>\`f!gif-j4j-tema\``, `**Sunucunuza Hazır Gif & J4J Teması Kurarsınız.**`, true)
          
.addField('<a:pin:858295172222418984>\`f!youtuber-tema\``, `**Sunucunuza Hazır Youtuber & Yayıncı Teması Kurarsınız.**`, true)
          
message.channel.send(embed)
    message.react('<a:Onay1:858295151038562305>')
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['şablon-sistemi']



};
exports.help = {
name: "şablon-yardım"
};