const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {


  var user = '';
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        let author = message.author;
        if(member) {
             var user = member;
        } else {
             var user = author;
        }    
    member = message.guild.member(user);
let userFlag = user.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', 'Bravery')  
.replace('HOUSE_BRILLIANCE', 'Brilliance')
.replace('HOUSE_BALANCE', 'Balance')
.replace('VERIFIED_DEVELOPER', 'Doğrulanmış Bot Geliştiricisi')
.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
.replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
.replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
.replace('EARLY_SUPPORTER', 'Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
.replace('VERIFIED_BOT', 'Onaylı Bot');
let ozeldurum = user.presence.activities[0] || 'Özel Durum yok'

const codamey = new Discord.MessageEmbed()
.setColor('#2f3136')
.setAuthor(user.tag,user.avatarURL())
.setThumbnail(user.avatarURL({ dynamic:true }))
.addField('⇓ __Tag__ ⇓',`\`${user.tag}\``,true)
.addField('⇓ __ID__ ⇓',`\`${user.id}\``,true)
.addField('⇓ __Durum__ ⇓',user.presence.status.replace('online', 'Çevrimiçi').replace('idle', 'Boşta').replace('dnd', 'Rahatsız Etmeyin').replace('offline', 'Çevrimdışı'),true)
.addField('⇓ __Özel Durum__ ⇓',ozeldurum ? ozeldurum: 'Özel Durum Yok',false)
.addField("⇓ __Oynadığı Oyun__ ⇓", `${user.presence.game ? user.presence.game.name : 'Oynadığı Bir Oyun Yok'}`, false)
.addField('⇓ __Katılım Tarihi__ ⇓',`${moment(user.joinedAt).format('D MMMM YYYY | HH:MM:SS')}`,true)
.addField('⇓ __Oluşturulma Tarihi__ ⇓',`${moment(user.createdAt).format('D MMMM YYYY | HH:MM:SS')}`,true)
.addField('⇓ __Rozetler__ ⇓',userFlag ? userFlag : 'Rozet Bulunmuyor.')
.addField('⇓ __Rolleri__ ⇓',message.guild.member(user).roles.cache.filter(s => s.name !== '@everyone').map(m => m).join(', '))
.setTimestamp()

message.channel.send(codamey)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kb","kullanıcı-bilgi"],
  permLevel: 0
}

exports.help = {
  name: 'kullanıcı-bilgi'
};