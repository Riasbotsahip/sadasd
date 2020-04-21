const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`❌ **Bu Komutu Kullana Bilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!**`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`✅ ** Capslock Engelleme Sistemi Kapatılmıştır.**`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`✅  **Capslock Engelleme Sistemi Aktif Oldu!**`)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel','caps-lock'],
  permLevel: 3
};
exports.help = {
  name: 'capslock-engel',
  category: '',
  description: 'capslock kullanımını engeller.',
  usage: 'capslock-engeli'
};