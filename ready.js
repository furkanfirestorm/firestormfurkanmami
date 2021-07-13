const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
  var oyun = [
    "📞 f!canlı-destek - Bir Sorunla Karşılaştığınızda Destek Alırsınız.",
    "🔔 f!davet - FireStorm Botunu Davet Et!",
    "✔️ f!bug-bildir Botla İlgili Bir Hata Bulduğunuzda O Hatayı Bildirebilirsiniz."
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};
