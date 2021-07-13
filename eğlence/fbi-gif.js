const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const fbi = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
  .setTitle("Fbi open the door")
  message.channel.send("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
}
 

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['fbi-gif'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: "fbi-gif",
  description: "FBi gif atar",
  usage:"n!fbi-gif"
}