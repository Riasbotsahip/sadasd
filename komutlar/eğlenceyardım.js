const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle("Pax | Eğlence , Eğlence Komutları.  <a:payidar:700335013937414145>")
      .addField('**<a:phoenx:700335033340264508>   x!sinirliefekt**', '**Profil Fotoğrafınıza Sinir Efekti Yapar.**')
    .addField('**<a:phoenx:700335033340264508>   x!tabutçunigga**', '**Tabutçu Niggaları Gösterir.**')
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
  name: 'eğlence',
}
