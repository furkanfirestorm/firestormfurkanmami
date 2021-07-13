const Discord = require('discord.js')
exports.run = (client, message, args) => {

const gamerwolf = new Discord.MessageEmbed()
.setColor("#2f3136")

.setImage("https://cdn.discordapp.com/attachments/856225218791997454/863314131213746186/standard_35.gif")

.addField(`<:kapal:841293412556603434> Rolsüz Davet `,'**[Ekle](https://discord.com/oauth2/authorize?client_id=856200669346005002&scope=bot&permissions=0)**', true)

.addField(`<:ak:841293299632308275> Rollü Davet `,'**[Ekle](https://discord.com/oauth2/authorize?client_id=856200669346005002&scope=bot&permissions=8)**', true)

.addField("<a:Onay1:858295151038562305>  Destek Sunucum",'**[Tıkla](https://discord.gg/VSzzeH7EzJ)**', true)

.addField("<a:Ayarlar:858295168323420171> Oy Ver ==> ",'**Yakında!**', true)

message.channel.send(gamerwolf)
    
    
    }
    exports.conf = {
        aliases: ["invite","invites"],
        permLevel: 0
          
        };
          
        exports.help = {
        name: 'davet'
        };