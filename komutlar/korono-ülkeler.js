const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle("Pax | Korona Ülke Listesi  <a:payidar:700335013937414145>")
      .setDescription('**Korona Ülkeleri Listesi [DAHA FAZLA ÜLKE EKLENECEK]!**')
      .addField('**<a:phoenx:700335033340264508>    **', '**TR** | **Türkiye.**')
      .addField('**<a:phoenx:700335033340264508>    **', '**CN** | **Çin.**')
      .addField('**<a:phoenx:700335033340264508>    **', '**US** | **Amerika.**')
      .addField('**<a:phoenx:700335033340264508>    **', '**JP** | **Japonya.**')
      .addField('**<a:phoenx:700335033340264508>    **', '**FR** | **Fransa.**')
      .addField('**<a:phoenx:700335033340264508>    **', '**NE** | **Norveç.**')
      .addField('**<a:phoenx:700335033340264508>    **', '**SN** | **İsveç.**')
      .addField(`» Linkler` , `[Web Sitemiz](https://bot.paxofficial.tk)`)
    
  )
    }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['koronaülkeler','koronaülk'],
  permLevel: 0
}

exports.help = {
  name: 'korona-ükleler',
}