const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Pax | Davet Menüsü",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": "https://images-ext-2.discordapp.net/external/AQdYBTA3BtQrOv-YlOfgvIuarg4qZx7wcSeJL1WlvXc/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/672428141544865792/99e2fc7eba3659708b21a18aa09faf2c.png?width=80&height=80"
			},
            title: "**Davet Menüsü**",
            description: "<a:saasbaba:700335033252053002> [Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=672428141544865792&scope=bot&permissions=2146958847) <a:saasbaba:700335033252053002>",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "Pax"
            }
          }
        });  

}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
