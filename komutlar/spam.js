const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  



   const yardım = new Discord.RichEmbed()
      .setColor('RED')
   .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTszv9xogJwu3nue_89PBJwDC_aCUOfeZ9fDAvtmtWQw8BZNtzn&usqp=CAU`)
      .addField(`**Pax Botun Sunucunuzu Böyle Koruması İçin YÖNETİCİ Yetkisi Olmalı Ve Sonrasında Kendiliğinden Saldırıları Önler.**`, 'Spam Koruması')
     return message.channel.sendEmbed(yardım);
  };

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['spambotkoruması','spambot-koruması'], 
  permLevel: 0
};

exports.help = {
  name: 'spambotkorumasi',
  description: 'sayaç', 
  usage: 'sayaç'
};
