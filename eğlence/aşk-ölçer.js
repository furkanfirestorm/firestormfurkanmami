exports.run = async (client, msg, args) => {
  
  let rahzam=[
      ":heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %3",
                    ":heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %6 Gösteriyor",
  ":heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %9 Gösteriyor",
                    ":heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %12 Gösteriyor",
  ":heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %18 Gösteriyor",
                    ":heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %20 Gösteriyor",
  ":heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %23 Gösteriyor",
                    ":heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %26 Gösteriyor",
 ":heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %29 Gösteriyor",
                    ":heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: %30 Gösteriyor",               
 ":heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart: %40 Gösteriyor",
                    ":heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart: %50 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %60 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %70 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %73 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %76 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %79 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %82 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %85 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: %88 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: %90 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: %91 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: %92 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: %93 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: %94 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart: %95 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::heartpulse::heartpulse::black_heart::black_heart: %96 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heart::heartpulse::heartpulse::black_heart::black_heart: %97 Gösteriyor",
 ":heart::heart::heart::heart::heart::heart::heartpulse::heartpulse::heartpulse::black_heart: %98 Gösteriyor",
                    ":heart::heart::heart::heart::heart::heartpulse::heartpulse::heartpulse::heartpulse::black_heart: %99 Gösteriyor",
":heartpulse::heartpulse::heartpulse::heartpulse::heartpulse::heartpulse::heartpulse::heartpulse::heartpulse::heartpulse: %100 Gösteriyor.",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Karşılıksız sevgimi olur, birini etiketlesene evladım')
  }});

    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
description: (`${member} ${rahzam[Math.floor(Math.random() * 30)]}.`)
    }})
    }
  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['aşkölçer'],
    permLevel: 0
   };
  exports.help = {
    name: 'aşk-ölçer',
    description: 'Emojili Aşk Ölçer',
    usage: 'aşkölçer'}