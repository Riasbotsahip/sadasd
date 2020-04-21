const Discord = require('discord.js');

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Pax`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬● \n● <a:tikcik:700388236140478485> x!kullanıcı = **KULLANICI KOMUTLARINI GÖSTERİR** \n● <a:tikcik:700388236140478485> x!yetkili = **YETKİLİ KOMUTLARINI GÖSTERTİR** \n● <a:tikcik:700388236140478485> x!nsfw-yardım = **NSFW KOMUTLARINI GÖSTERİR** \n● <a:tikcik:700388236140478485> x!eğlence = **EĞLENCE KOMUTLARINI GÖSTERİR** \n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };