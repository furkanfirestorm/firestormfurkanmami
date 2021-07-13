const db = require('quick.db')
let ayarlar = require ('../../ayarlar.json')
const discord = require('discord.js');
exports.run = async(client, message, args) => {
  
    const embed = new discord.MessageEmbed()
    .setColor("#2f3136")
   .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setTitle('FireStorm Sunucu Koruma Sistemi')
    .setImage("https://cdn.discordapp.com/attachments/856225218791997454/863315777355776000/standard_37.gif")
    .setDescription(`
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    <a:tik3:858295143677034507> \`f!reklam-engel aç/kapat\` **Reklam Engel Sistemini Ayarlarsınız.**
    <a:tik3:858295143677034507> \`f!küfür-engel aç/kapat\`  **Küfür Engel Sistemini Ayarlarsınız.**
    <a:tik3:858295143677034507> \`f!caps-engel aç/kapat\`   **Caps Engel Sistemini Ayarlarsınız.** 
    <a:tik3:858295143677034507> \`f!emoji-koruma aç/kapat\` **Emoji Koruma Sistemini Ayarlarsınız.**
    <a:tik3:858295143677034507> \`f!rol-koruma aç/kapat\`   **Rol Koruma Sistemini Ayarlarsınız.**
    <a:tik3:858295143677034507> \`f!kanal-koruma *aç/kapat\`**Kanal Koruma Sistemini Ayarlarsınız.**
    <a:tik3:858295143677034507> \`f!anti-raid aç/kapat\`    **Anti Raid Sistemini Ayarlarsınız[Bot Koruma].**
    <a:tik3:858295143677034507> \`f!tag-taraması aç/kapat\` **Tag Taraması Ayarlarsınız.**
    <a:tik3:858295143677034507> \`f!reklam-taraması aç/kapat\` **Reklam Taraması Ayarlarsınız.**  
    `)
    .addField(`**Diğer Komutlar**`, `
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    <a:tik3:858295143677034507> \`f!koruma aç/kapat #logkanal\` **Tüm sistemleri açar veya kapatır.**
    <a:tik3:858295143677034507> \`f!rolekle @rol\` **Koruma sistemlerinden etkilenmeyecek rolü ayarlar.**
    <a:tik3:858295143677034507> \`f!sistemlog #kanal\` **Koruma mesajlarının gönderileceği kanal.**
    <a:tik3:858295143677034507> \`f!koruma-bilgi\` **Koruma Hakkında Bilgi Alırsınız.**
    `)
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
name: "koruma-yardım"
};