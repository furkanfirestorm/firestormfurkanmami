const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const db = require('quick.db')
const qdb = require('quick.db')
const express = require("express")
const http = require("http");
require("./util/eventLoader.js")(client);
const path = require("path");
const prefix = ayarlar.prefix;
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const fs = require("fs");
const chalk = require('chalk')
const moment = require('moment')
const app = express()
app.get("/foo", (req, res, next) => {
    const foo = JSON.parse(req.body.jsonString)
})

client.on('message', async msg => {
  if (msg.content === `<@!856200669346005002>`) return msg.channel.send(`Prefixim ${ayarlar.prefix}`);
});

client.on('message', async msg => {
});


 const log = message => {
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
 };
 client.commands = new Discord.Collection();
 client.aliases = new Discord.Collection();
 fs.readdir("./komutlar/", (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
  fs.readdir(`./komutlar/${f}/`, (err, filess) => {
    if (err) console.error(err);
    log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
    filess.forEach(fs => {
      let props = require(`./komutlar/${f}/${fs}`);
      log(`${props.help.name}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
     });
    });
   });
  });

client.login(process.env.token);

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};




//deneme
client.on("guildMemberAdd", member => {       
    var ronney = qdb.fetch(`otorolrolu_${member.guild.id}`);
  var rol = member.guild.roles.cache.get(ronney)
 if(!rol) return; //Eğer sunucudaki rol silinirse otorol ayarı silinir
   member.roles.add(rol.id)
//-----Rol(ÜST)Yazı(ALT)-----\\
var ales = qdb.fetch(`otorolkanali_${member.guild.id}`);
var kanal = member.guild.channels.cache.get(ales)
if(!kanal) return;
 const embed = new Discord.MessageEmbed().setDescription(
`**<a:Redtik:811509179193884682> <@${member.id}> kişisi sunucuya katıldı, başarıyla ${rol} rolü verildi**`)
kanal.send(embed)
});



//deneme
client.on("guildMemberAdd", async member => {
  let ozelhosgeldin = await db.fetch(`ozelhosgeldin_${member.guild.id}`);
  if (!ozelhosgeldin) return;

  member.send(
    ozelhosgeldin
      ? ozelhosgeldin
          .replace("-sunucu-", `\`${member.guild.name}\``)
          .replace("-kullanıcı-", `\`${member.user.tag}\``)
      : ``
  );
});

client.on("guildMemberRemove", async member => {
  let ozelgorusuruz = await db.fetch(`ozelgorusuruz_${member.guild.id}`);
  if (!ozelgorusuruz) return;

  member.send(
    ozelgorusuruz
              ? ozelgorusuruz
          .replace("-sunucu-", `\`${member.guild.name}\``)
          .replace("-kullanıcı-", `\`${member.user.tag}\``)
      : ``
  );
});



client.on("message", async msg => {
  const gereksiz = await db.fetch(`saas_${msg.guild.id}`);
  if (gereksiz === "aktif") {
    if (
      msg.content.toLowerCase() == "selam" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "selamm" ||
      msg.content.toLowerCase() == "saa" ||
      msg.content.toLowerCase() == "saaa"
    )
        return msg.reply("<a:Hi:811509182237900830> **Aleyküm Selam, Hoşgeldin**"); 

                
        } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});

client.on('guildDelete', guild => {

let plasmic = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Kicklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('851389515310170112').send(plasmic);
 
});

//--------------------------------------------------------//

client.on('guildCreate', guild => {

let plasmicc = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('851389515310170112').send(plasmicc);

}); 
client.on("message", msg => {
 let e = db.fetch(`reklamengel_${msg.guild.id}`)
if(e === "aktif"){  
      const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         const batusuyar = new Discord.MessageEmbed()
.setColor('RED')
.setTitle("**Reklam Engel Filtresi**")
.setDescription(`<a:no2:830005541220253726>**Bu Sunucuda Reklam Engel Filtresi Açık Reklam Yapamazsın <@${msg.author.id}>**`)
                         
    
                    return msg.channel.send(batusuyar).then(msg => msg.delete(3000));
   
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }}
else return;
    });




client.on("messageDelete", async (message) => {

  if (message.author.bot || message.channel.type == "dm") return;

  let log = message.guild.channels.cache.get(await db.fetch(`mesajlog_${message.guild.id}`));

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "")

  log.send(embed)

})

client.on("messageUpdate", async (oldMessage, newMessage) => {

  let modlog = await db.fetch(`mesajlog_${oldMessage.guild.id}`);

  if (!modlog) return;

  let embed = new Discord.MessageEmbed()

  .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())

  .addField("**Eylem**", "Mesaj Düzenleme")

  .addField("**Mesajın sahibi**", `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`)

  .addField("**Eski Mesajı**", `${oldMessage.content}`)

  .addField("**Yeni Mesajı**", `${newMessage.content}`)

  .setTimestamp()

  .setColor("RANDOM")

  .setFooter(`Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`, oldMessage.guild.iconURL())

  .setThumbnail(oldMessage.guild.iconURL)

  client.channels.cache.get(modlog).send(embed)

});
client.on('message', async message => {
if (message.content === 'mb!fakekatıl') { // . yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
client.on('message', async message => {
if (message.content === 'mb!fakeayrıl') { // . yerine prefixi yaz
  client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
});


client.on("messageDelete", async message => {
  let engin = db.fetch(`mesajlog_${message.guild.id}`)
  if(!engin) return;
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Bir mesaj silindi!')
  .setDescription(`__**Kişi Bilgileri**__ \n Silen kişi: <@${message.author.id}> \n Silen kişinin idi: ${message.author.id} \n \n __**Kanal Bilgileri**__ \n Silinen Kanal: <#${message.channel.id}> \n Silinen Kanalın idi: ${message.channel.id} \n \n __**Mesaj Bilgileri**__ \n Silinen mesaj: ${message.content} \n Silinen Mesajın İdi: ${message.id}`)
  .setColor('RANDOM')
 client.channels.cache.get(engin).send(embed2)
})


client.on('message', async msg => {
  let prefix = ayarlar.prefix 
  if(msg.content == `<@!845707898231324743>`) return msg.channel.send(`prefix : s!`);
});


client.on('message', async msg => {
    try {
       if (!await db.get(`${msg.guild.id}.kfrengel`)) return;
        const küfür_liste = ["aMK","oç","Oç","Öç","öç","AMK","Amk", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq","Amk","OÇ","ÖÇ","oç","amk", "ananı sikiyim", "piç", "orospu çocuğu", "orospu", "kahbe", "kahpe", "ebeni sikim", "anneni sikeyim", "göt", "o.ç", "annen"];
        if (küfür_liste.some(küfür => msg.content.includes(küfür))) {
            try {
                if (!msg.member.hasPermission("BAN_MEMBERS")) {
                    msg.delete();
                    return await msg.channel.send(`${msg.author}, **Hey dostum, bu sunucuda küfür edemezsin!**`).catch(() => {})
                        .then(msg => msg.delete({ timeout: 9000 })).catch(() => {});
                }
            } catch (err) {
                console.error(err);
            }
        }
    } catch (h) {
        console.error(h);
    };
});

client.on('messageUpdate', async (eski, yeni) => {
    try {
      if (!await db.get(`${yeni.guild.id}.kfrengel`)) return;
        const küfür_liste = ["aMK","oç","Oç","Öç","öç","amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq","Amk","OÇ","ÖÇ","oç","amk", "ananı sikiyim", "piç", "orospu çocuğu", "orospu", "kahbe", "kahpe", "ebeni sikim", "anneni sikeyim", "göt", "o.ç", "annen"];
        if (küfür_liste.some(küfür => yeni.content.includes(küfür))) {
            try {
                if (!yeni.member.hasPermission("BAN_MEMBERS")) {
                    yeni.delete();
                    return await yeni.channel.send(`${yeni.author}, **Hey dostum, mesajını düzenlesen de bu sunucuda küfür edemezsin!**`).catch(() => {})
                        .then(msg => msg.delete({ timeout: 9000 })).catch(() => {});
                }
            } catch (err) {
                console.error(err);
            }
        }
    } catch (h) {
        console.error(h);
    };
});


//deneme
client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)     
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
   
  }
  
});  






//sw

client.on('guildMemberAdd', async (member) => {
  var teyitci = qdb.fetch(`teyitci_${member.guild.id}`)
  var rol = `<@&${teyitci}>`
  var gelen = `<@${member.id}>`
  var rolMesaj = `→ ${rol} Rolundekiler Senle En Kısa Zamanda İlgilenicek`
  if(!teyitci) {
  var rol = ""
  var gelen = ""
  var rolMesaj = "<a:boost:831254352411754507> → Sunucumuza Boost basarak özel avantajların sahibi olabilirsin!"
  }
  var kanal = qdb.fetch(`hgbbkanali_${member.guild.id}`)
  if(!kanal) return;
  var tag = qdb.fetch(`tag_${member.guild.id}`)
  var tagMesaj = `<a:Tac:823442697796321302> → Ayrıca Tagımızı Alarak Bize Destek Olabilirsin "${tag}"`
  if(!tag){
    var tag = ""
    var tagMesaj = ""
  }
    let viruskanal = member.guild.channels.cache.get(kanal)
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id)
  const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değil!'
  if (virushesapkurulus > 1296000000) viruj = ' Güvenilir!'
    const hgembed = new Discord.MessageEmbed()
    .setDescription(`
    
     <a:Hi:811509182237900830> → Aramıza Hoşgeldin **${virususer.username}** !
  
    <a:Heart:821043123354206269> → Seninle Birlikte **${member.guild.memberCount}** Kişiyiz
  
     ${rolMesaj}

  <:zaman:841007802608517120> → Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
  
    <a:Zil:823447228169322537> → Hesabın Güvenlik Durumu: **${viruj}**
    
     ${tagMesaj}
    
    `)
    .setColor("#2f3136")
    .setTitle("Aramıza Yeni Birisi Katıldı !")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setFooter(`${member.guild.name} hg mesaj sistemi`)
    viruskanal.send(`${rol} ${gelen}`, hgembed) ;
  })
client.on('guildMemberRemove', async (member) => {
  var gelen = `<@${member.id}>`
  var kanal = qdb.fetch(`hgbbkanali_${member.guild.id}`)
  if(!kanal) return;
    var viruskanal = member.guild.channels.cache.get(kanal)
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id)
  const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değildi...'
  if (virushesapkurulus > 1296000000) viruj = ' Güvenilirdi...'
    const hgembed = new Discord.MessageEmbed()
    .setDescription(`
    
   <a:Sad:821861959259258940> → **${virususer.username}** Aramızdan Ayrıldı
  
    <a:Pepehmm:824225416750301194> → Sensiz **${member.guild.memberCount}** Kişiyiz

    <a:loding:821287624723005441> → Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
  
    <:zaman:841007802608517120> → Hesabın Güvenlik Durumu: **${viruj}**
    
    `)
    .setColor("#2f3136")
    .setTitle("Birisi aramızdan ayrıldı :(")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setFooter(`${member.guild.name} Kayıt Sistemi`)
    viruskanal.send(hgembed) ;
  })
  




client.on("guildMemberAdd", async member => {
  const Discord = require('discord.js')
  const Canvas = require('canvas')
  const db = require('quick.db')

   const canvas = Canvas.createCanvas(640, 360);
  const rctx = canvas.getContext('2d');
  const background = await Canvas.loadImage(`
 https://cdn.discordapp.com/attachments/832252656205955113/832253724176547900/devhg.png`);

 
  rctx.drawImage(background, 0, 0, canvas.width, canvas.height); 
  rctx.font = '38px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`${member.user.username}` , 200, 255);
rctx.font = '36px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`#${member.guild.memberCount}. Kişi!` , 15, 75);
rctx.font = '35px Helvetica';
    rctx.fillStyle = '#000000';
    rctx.fillText(`SonerGameX` , 30, 30);
            
  rctx.beginPath()
  rctx.arc(310, 125, 85, 0, Math.PI * 2, true)
  rctx.closePath();
  rctx.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: "jpg" }))
    rctx.drawImage(avatar, 210, 25, 200, 200);
  
  
 const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'devilscode-hg.png');
  const kanal = db.fetch(`devcanvas_${member.guild.id}`)
  var rzm = member.guild.channels.cache.get(kanal)
  if(!rzm) return;
  rzm.send(attachment)
})


client.on("guildMemberRemove", async member => {
  const Discord = require('discord.js')
  const Canvas = require('canvas')
  const db = require('quick.db')

   const canvas = Canvas.createCanvas(640, 360);
    const rctx = canvas.getContext('2d');
  const background = await Canvas.loadImage(`
 https://cdn.discordapp.com/attachments/832252656205955113/832253730296430592/devbb.png`);

rctx.strokeStyle = "#f0f0f0";
rctx.strokeRect(0, 0, canvas.width, canvas.height);
  rctx.drawImage(background, 0, 0, canvas.width, canvas.height); 
  rctx.font = '38px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`${member.user.username}` , 200, 255);
rctx.font = '32px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`#${member.guild.memberCount} Kişi kaldık!` , 9, 75);
rctx.font = '35px Helvetica';
    rctx.fillStyle = '#000000';
    rctx.fillText(`SonerGameX` , 30, 30);
            
  rctx.beginPath()
  rctx.arc(310, 125, 85, 0, Math.PI * 2, true)
  rctx.closePath();
  rctx.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: "jpg" }))
    rctx.drawImage(avatar, 210, 25, 200, 200);
  
 const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'devilscode-bb.png');
  const kanal = db.fetch(`devcanvas_${member.guild.id}`)
  var rzm = member.guild.channels.cache.get(kanal)
  if(!rzm) return;
  rzm.send(attachment)
})





////--------------------GUVENLIK----------------////
client.on("guildMemberAdd", async member => {
  var rahzamgvnl = `<@${member.id}>`
  var rahzam = await db.fetch(`hggvnl_${member.guild.id}`)
  let user = client.users.cache.get(member.id);
  let kullanıcı = client.users.cache.get(member.id)
  const hesapkk = new Date().getTime()- kullanıcı.createdAt.getTime();
  const tmbb = new Date().getTime()- kullanıcı.createdAt.getTime();
    let durum;
  if (hesapkk < 1296000000) durum = 'Şüpheli!'
  if (hesapkk > 1296000000) durum = 'Güvenli!'
  if(!rahzam) return;
  let tmb;
  if (tmbb < 1296000000) tmb = 'https://cdn.discordapp.com/attachments/831129091519414272/831133013248442438/carp.png'
  if (tmbb > 1296000000) tmb = 'https://cdn.discordapp.com/attachments/831129091519414272/831133016024940554/tik.png'
  if(!rahzam) return;
    const embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setThumbnail(tmb)
    .setDescription(`
    
    
      ${rahzamgvnl} Sunucuya Katıldı!
      
      Güvenlik Durumu : **${durum}**
    
      Hesabının Kuruluş Tarihi:   ${moment(member.user.createdAt).format("**DD MMMM YYYY**") }
    
    
    `)
  

    client.channels.cache.get(rahzam).send(embed);
  })


client.on("guildMemberRemove", async member => {
  var rahzamgvnl = `<@${member.id}>`
  var rahzam = await db.fetch(`bbgvnl_${member.guild.id}`)
  let user = client.users.cache.get(member.id);
  let kullanıcı = client.users.cache.get(member.id)
  const hesapkk = new Date().getTime()- kullanıcı.createdAt.getTime();
  const tmbb = new Date().getTime()- kullanıcı.createdAt.getTime();
    let durum;
  if (hesapkk < 1296000000) durum = 'Şüpheliydi!'
  if (hesapkk > 1296000000) durum = 'Güvenliydi!'
  if(!rahzam) return;

  let tmb;
  if (tmbb < 1296000000) tmb = 'https://cdn.discordapp.com/attachments/831129091519414272/831133013248442438/carp.png'
  if (tmbb > 1296000000) tmb = 'https://cdn.discordapp.com/attachments/831129091519414272/831133016024940554/tik.png'
  if(!rahzam) return;
    const embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setThumbnail(tmb)
    .setDescription(`
    
    
      ${rahzamgvnl} Sunucudan Ayrıldı!
      
      Güvenlik Durumu : **${durum}**
    
      Hesabının Kuruluş Tarihi:   ${moment(member.user.createdAt).format("**DD MMMM YYYY**") }
    
    
    `)
  
    client.channels.cache.get(rahzam).send(embed);
  })
////-------------------GUVENLIK----------------////


//MESAJ LOG
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type === "dm") return;
  if (newMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`modlogkanaly_${newMessage.guild.id}`);
  let scbul = newMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL())
    .addField("Kullanıcı", newMessage.author)
    .addField("Eski Mesaj", "```" + oldMessage.content + "```")
    .addField("Yeni Mesaj", "```" + newMessage.content + "```")
    .addField("Kanal Adı", newMessage.channel.name)
    .addField("Mesaj ID", newMessage.id)
    .addField("Kullanıcı ID", newMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours() +
        3}:${newMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on("messageDelete", async deletedMessage => {
  if (deletedMessage.author.bot || deletedMessage.channel.type === "dm") return;
  if (deletedMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`modlogkanaly_${deletedMessage.guild.id}`);
  let scbul = deletedMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Silindi`, deletedMessage.author.avatarURL())
    .addField("Kullanıcı", deletedMessage.author)
    .addField("Silinen Mesaj", "```" + deletedMessage.content + "```")
    .addField("Kanal Adı", deletedMessage.channel.name)
    .addField("Mesaj ID", deletedMessage.id)
    .addField("Kullanıcı ID", deletedMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${deletedMessage.createdAt.getHours() +
        3}:${deletedMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on('roleDelete', async role => {
const data = await require('quick.db').fetch(`carl-mute-role.${role.guild.id}`);
if(data && data === role.id) require('quick.db').delete(`carl-mute-role.${role.guild.id}`); 
});

client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`**<a:konfeti:831482282832560239> Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!**`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**<a:Cikis:823495390694473728> ${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**<a:katld:840196514323103754>** ${member}** Sunucuya Katıldı ! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!**`);
});



client.on("guildMemberAdd", member => {
  var tag = require('quick.db').fetch(`ototag_${member.guild.id}`)
  if(!tag) return;
  member.setNickname(`${tag}${member.user.username}`)
  })



client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucu boost seviyesi atladı!')
  .setDescription(`Sunucumuz ${guild.name} artık ${newLevel} boost seviyesinde tebrikler!`)
client.channels.cache.get(log).send(embed)
});
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucu boost seviyesi düştü!')
  .setDescription(`Sunucumuz ${guild.name} artık ${newLevel} boost seviyesinde üzdü :(`)
client.channels.cache.get(log).send(embed)
});
client.on("guildMemberBoost", (member) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${member.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuza boost basıldı!')
  .setDescription(`<@${member.id}> adlı kullanıcı sunucumuza boost bastı teşekkürler!`)
client.channels.cache.get(log).send(embed)
});
client.on("guildMemberUnboost", (member) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${member.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuzdan boost çekildi!')
  .setDescription(`<@${member.id}> adlı kullanıcı sunucumuzdan boostunu çekti üzdü :(`)
client.channels.cache.get(log).send(embed)
})