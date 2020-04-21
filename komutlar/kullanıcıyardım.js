const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle("Pax | Kullanıcı , Kullanıcı Komutları.  <a:payidar:700335013937414145>")
      .addField('**<a:phoenx:700335033340264508>   x!afk sebep**', '**AFK Olursunuz (Afklıktan Çıkmak İçin Yazı Yazınız).**')
      .addField('**<a:phoenx:700335033340264508>   x!mcip sunucuip**', '**Minecraft Sunucu İstatistiğini Gösterir.**')
      .addField('**<a:phoenx:700335033340264508>   x!ping**', '**Botun Pingini Gösterir.**')
      .addField('**<a:phoenx:700335033340264508>   x!korona**', '**Korona İstatistiğini Atar.**') 
      .addField('**<a:phoenx:700335033340264508>   x!korona-ülkeler**', '**Korona Olan Ülkelerin Listesini Çıkarır [DAHA FAZLA ÜLKE EKLENECEK.].**')
      .addField('**<a:phoenx:700335033340264508>   x!davet**', '**Botun Davet Linkini Atar.**') 
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
  name: 'kullanıcı',
}
