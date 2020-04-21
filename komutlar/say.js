const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setThumbnail(`https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif`)
        .addField(`<a:kebelek:700335060473085952> **__Sunucudaki Toplam Üye Sayısı__**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(`<a:kebelek:700335060473085952> **__Toplam Çevrimiçi Üye Sayısı__**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
        .addField(`<a:kebelek:700335060473085952> **__Seslideki Üye Sayısı__**`,`**\`\`\`${count}\`\`\`**`)
        .addField(`<a:phoenx:700335033340264508>  **__Yazı Kanalları__**`, `» **${textChannels}**`)
        .addField(`<a:phoenx:700335033340264508>  **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)
        .addField(`<a:phoenx:700335033340264508>  **__Roller__**`,`»  **${message.guild.roles.size}**`)
        .addField(`<a:phoenx:700335033340264508>  **__Emojiler__**`,`»  **${message.guild.emojis.size}**`)
        .addField(`<a:kebelek:700335060473085952> **__Kullanıcılar__**`, ` <:acikbey:701368246129131600> Çevrimiçi : **${message.guild.members.filter(o => o.presence.status === 'online').size}** \n <:rahatsizbey:701368245629878333> Rahatsız Etmeyin : **${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** \n <:idlebey:701368245734604851> Boşta: **${message.guild.members.filter(i => i.presence.status === 'idle').size}** \n <:kapalibey:701368245617164337> Görünmez/Çevrimdışı : **${message.guild.members.filter(off => off.presence.status === 'offline').size}** \n <:bot2:701369603569221662> Botlar : **${botlar}**`, true)
        .setTitle(`<a:payidar:700335013937414145> ${message.author.tag} - Tarafından istendi.`)
        .setFooter(`Pax Tüm Hakları Saklıdır.`, client.user.avatarURL)
    message.channel.send(embed);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 2
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}