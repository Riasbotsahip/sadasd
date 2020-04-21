const Discord = require('discord.js')
const db = require('quick.db');

const moment = require('moment');
require('moment-duration-format');
exports.run = (client, message, args, msg) => {

   
 
   const yardım = new Discord.RichEmbed()
      .setColor('#000000')
      .addField(`** Pax **`, client.ping)
      .setImage('https://www.neoldu.com/d/other/internet-hizini-arttirma.gif')
     return message.channel.sendEmbed(yardım);

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ping'
}