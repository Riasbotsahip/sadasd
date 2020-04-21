const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle('**TABUTÇU NİGGALAR**')
      .setDescription(`**https://www.youtube.com/watch?v=bTrokezfTps** \n\n**-TABUTÇU NİGGA NEDİR-**\n\n**-BİR KAÇ DOLAR KARŞILIĞINDA SİZİ ÖLMÜŞ OLARAK GÖRÜRÜRLER , TABUTA KOYARLAR VE DANS ETMEYE BAŞLARLAR.-**`)
      .setThumbnail('')
    
  )
    }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tabutçu-nigga'],
  permLevel: 0
}

exports.help = {
  name: 'tabutçunigga',
}