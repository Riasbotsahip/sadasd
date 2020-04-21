const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle("Pax | Jail Komutları.  <a:payidar:700335013937414145>")
      .addField('**<a:phoenx:700335033340264508>    k!jail**', '**Şüpheli Kullanıcıyı Cezaevine Atarsınız.**')
      .addField('**<a:phoenx:700335033340264508>    k!jailkanal ayarla**', '**Şüphelilerin Log Kanalıdır Kim Ne Zaman Tahliye Edildi Gibisinden Her Bilgiyi O Seçilen Kanala Atar.** ')
      .addField('**<a:phoenx:700335033340264508>    k!jailrol ayarla**', '**Şüphelilerin Cezalı Rolünü Ayarlar.**')
      .addField('**<a:phoenx:700335033340264508>    k!jailyetkilisi ayarla**', '**Şüphelileri Cezaevine Atıcak Rolü Ayarlarsınız.**')
      .addField('**<a:phoenx:700335033340264508>    k!ban @kişi**', '**Etiketlediğiniz Kişiyi Sunucudan Yasaklarsınız.**')
      .addField(`» Linkler` , `[Web Sitemiz](https://bot.paxofficial.tk)`)
    
  )
    }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-yardım',
}