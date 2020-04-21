const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix


exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Omalısın.")
  if(!args[0]) {
    message.channel.send(`Koruma Sistemini Aktifleştirmek İçin **${prefix}koruma aç**`)
  }
  
  if (args[0] == 'aç') {
    if(db.has(`korumaacik_${message.guild.id}`)) return message.reply(`Koruma Sistemi Zaten Açık. Kapatmak İçn **${prefix}koruma kapat**`)
    message.channel.send(`Koruma Sistemi Aktifleştirildi!. Kapatmak için **${prefix}koruma kapat**`)
    db.set(`korumaacik_${message.guild.id}`, 'acik')
  }
  if(args[0] == 'kapat') {
    if(!db.has(`korumaacik_${message.guild.id}`)) return message.reply(`Koruma Sistemi Zaten Kapalı. Açmak İçin **${prefix}koruma aç**`)
    message.channel.send(`Koruma Sistemi Kapatıldı. Açmak için **${prefix}koruma aç**`)
    db.delete(`korumaacik_${message.guild.id}`)
    
  } else if(args[0] == "kanal") {
    if(!db.has(`korumaacik_${message.guild.id}`)) return message.reply("Koruma Sistemi Kapalıyken Kanal Ayarlayamazsın");  
    let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name.replace("-" , " ").toLowerCase().includes(args[1])) || message.guild.channels.get(args[1]) || message.guild.channels.id();
    if(!kanal) return message.reply("Koruma Kanalını Ayarlamam İçin Bir Kanal Girmeniz Gereklidir. Kanalı Etiketleyebilir Veya İsmini Girebilirsiniz."); else {
      await db.set(`korumalog_${message.guild.id}`, kanal.id);
      message.reply("Koruma Kanalı Başarıyla " + kanal + " Olarak ayarlandı.");
    }
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'koruma'
}