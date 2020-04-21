const Discord = require('discord.js');

exports.run = (client,message,args) => {
	const yağmurumm = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(">>NSFW 🔞 İÇERİKLERİ")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setThumbnail(`https://image.shutterstock.com/image-vector/nsfw-red-stamp-260nw-1168478428.jpg`)
	.setTimestamp()
	.addField("``🔞x!nsfw-4k``","4k Fotoğraflar atar.")
	.addField("``🔞x!anal``","Anal Fotoğraflar atar.")
	.addField("``🔞x!ass``","Ass türü fotoğraflar atar.")
	.addField("``🔞x!nsfw-gif``","nsfw Giffleri atar.")
	.addField("``🔞x!hentai_anal``","Hentai anal icerikleri atar.")
  .addField("``🔞x!hentai``","Hentai icerikleri atar.")
	.addField("``🔞x!pussy``","Pussy türü fotoğraflar atar.")
  	.addField("``🔞x!hass``","hass türü fotoğraflar atar.")
  .addField("``🔞x!thigh``","thigh türü fotoğraflar atar.")
   .addField("``🔞x!hkitsune``","hkitsune türü fotoğraflar atar.")
  .addField("``🔞x!hneko``","hneko türü fotoğraflar atar.")
  .addField("``🔞x!hanal``","hanal türü fotoğraflar atar.")
  .addField("``🔞x!hmidriff``","hmidriff türü fotoğraflar atar.")
   .addField("``🔞x!gonewild``","karışık nsfw türü fotoğraflar atar.")
	return message.channel.send(yağmurumm);

};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};

exports.help = {
	name: 'nsfw-yardım',
	description: '',
	usage: ''
};