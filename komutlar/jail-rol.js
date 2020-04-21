const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <a:dogruland:700335061584838667>', '**SÜPER!** <a:dogruland:700335061584838667>', '**NASIL YAPTIN BUNU?!** <a:dogruland:700335061584838667>', '**MÜKEMMEL!** <a:dogruland:700335061584838667>', '**SEVDİM BUNU!** <a:dogruland:700335061584838667>', '**ŞİMDİ OLDU!** <a:dogruland:700335061584838667>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:carpi:700350152958804098>', '**OLMADI BU!** <:carpi:700350152958804098>', '**HAY AKSİ!** <:carpi:700350152958804098>', '**HADİ ORADAN!** <:carpi:700350152958804098>', '**OLMADI YA!** <:carpi:700350152958804098>', '**BÖYLE OLMAZ?!** <:carpi:700350152958804098>', '**HADİ YA!** <:carpi:700350152958804098>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-rol ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, k!jail-rol ayarla/sıfırla @rol yazmalısın.`)
   
  
  if (args[0] == 'ayarla') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(x + ` Jail rolü ${rol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(x + ` Jail rolü başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailrol'],
 permLevel: 3
};

exports.help = {
 name: 'jail-rol',
 description: 'Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız.',
 usage: 'jail-rol ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};