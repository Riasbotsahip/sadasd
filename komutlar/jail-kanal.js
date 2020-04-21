const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <a:dogruland:700335061584838667>', '**SÜPER!** <a:dogruland:700335061584838667>', '**NASIL YAPTIN BUNU?!** <a:dogruland:700335061584838667>', '**MÜKEMMEL!** <a:dogruland:700335061584838667>', '**SEVDİM BUNU!** <a:dogruland:700335061584838667>', '**ŞİMDİ OLDU!** <a:dogruland:700335061584838667>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:carpi:700350152958804098>', '**OLMADI BU!** <:carpi:700350152958804098>', '**HAY AKSİ!** <:carpi:700350152958804098>', '**HADİ ORADAN!** <:carpi:700350152958804098>', '**OLMADI YA!** <:carpi:700350152958804098>', '**BÖYLE OLMAZ?!** <:carpi:700350152958804098>', '**HADİ YA!** <:carpi:700350152958804098>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, k!jail-yetkilisi ayarla/sıfırla @rol yazmalısın.`)
   
  
  if (args[0] == 'ayarla') {
  
  let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[1].join('-'))
  if (!kanal) return message.channel.send(x2 + ` Bir kanal etiketle.`)
  
  db.set(`jailkanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + ` Jail logunun tutulacağı kanal ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailkanal_${message.guild.id}`)
    message.channel.send(x + ` Jail logunun tutulduğu kanal başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailkanal'],
 permLevel: 0
};

exports.help = {
 name: 'jail-kanal',
 description: 'Birisi jaile atılınca hangi kanala mesaj atılacağını ayarlarsınız.',
 usage: 'jail-kanal ayarla/sıfırla #kanal',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};