const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(`**${message.author.username}, Üzgünüm \`MUTE_MEMBERS\` Yetkisine sahip olman gerekiyor**!`).then(msg=>msg.delete(7000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Üzgünüm \`mute\` command to work: \`MANAGE_ROLES\`**`).then(msg=>msg.delete(7000));

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(`**${message.author.username}, Üzgünüm muteleyemem**!`);
    
    let muterole = message.guild.roles.find(x => x.name === 'Muteli');
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: 'Muteli',
                color: '#000000',
                permission: [] 
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                  
                });
            });
        } catch(e) {
            console.log(e.message);
        }
    };

    if (member.roles.has(muterole.id)) return message.channel.send(`**${member.user.username}** **Başarıyla Tamamlandı**.`)
    await (member.addRole(muterole.id));
    message.channel.send(`**${member.user.username}, Başarıyla Mutelendi!**`);
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "mute"
}
