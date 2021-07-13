const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
module.exports = message => {
    var client = message.client;
    let prefix = ayarlar.prefix
  
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0].slice(prefix.length);
    let params = message.content.split(" ").slice(1);
    let perms = client.elevation(message);
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
  if (cmd) {
  if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("__**Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın.<a:Onay3:858295144481685504>**__")
    cmd.run(client, message, params, perms);
  }
};