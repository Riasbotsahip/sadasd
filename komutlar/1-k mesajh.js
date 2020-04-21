const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = async(client, message, args) => {
  
  for(let i = 0; i < 999; i++) {
      
      
      message.channel.bulkDelete(100)
    
    return message.channel.send("1.000 Mesaj başarıyla silindi.")
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: '1k-msg-sil',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};