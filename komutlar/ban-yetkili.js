const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <a:dogruland:700335061584838667>', '**SÜPER!** <a:dogruland:700335061584838667>', '**NASIL YAPTIN BUNU?!** <a:dogruland:700335061584838667>', '**MÜKEMMEL!** <a:dogruland:700335061584838667>', '**SEVDİM BUNU!** <a:dogruland:700335061584838667>', '**ŞİMDİ OLDU!** <a:dogruland:700335061584838667>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:carpi:700350152958804098>', '**OLMADI BU!** <:carpi:700350152958804098>', '**HAY AKSİ!** <:carpi:700350152958804098>', '**HADİ ORADAN!** <:carpi:700350152958804098>', '**OLMADI YA!** <:carpi:700350152958804098>', '**BÖYLE OLMAZ?!** <:carpi:700350152958804098>', '**HADİ YA!** <:carpi:700350152958804098>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}ban-yetkilisi** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
    if (!args[0]) return message.reply(`Sistemi kullanabilmek için, k!ban-rol ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım ban-yetkilisi`)
    if (args[0] == 'ayarla') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol)     return message.channel.send(x2 + ` Bir rol etiketle.`)
  else newRole = message.mentions.roles.first().id
  let id = message.mentions.roles.first().id  
    db.set(`banyetkilisi_${message.guild.id}`, id)
  let banrol = await db.set(`banyetkilisi_${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)) return message.channel.send(x2 + ` Etiketlediğin rolü bulamadım. Silinmiş olabilir, bi' kontrol et.`)
    message.channel.send(x + ` Ban yetkilisi <@&${newRole}> olarak ayarlandı.`)
  } 

  if (args[0] == 'sıfırla') {
    
    
    db.delete(`banyetkilisi_${message.guild.id}`)

    message.channel.send(x + ` Ban yetkilisi başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['banyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'ban-yetkilisi',
 description: '+ban komutunu hangi role sahip olanların kullanacağını ayarlarsınız.',
 usage: 'ban-yetkilisi ayarla @rol',
 kategori: '**AYARLAR**',
 permLvl: '**SUNUCUYU YÖNET**'
};