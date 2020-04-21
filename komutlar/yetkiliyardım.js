const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#ff0000')

      .setTitle("Pax | Yetkili , Admin Komutları.  <a:payidar:700335013937414145>")
      .setDescription('**Yetkili Dışında Normal Kullanıcı Bu Komutları Kullanamaz!**')
      .addField('**<a:phoenx:700335033340264508>    x!sunucupanel**', '**Sunucunun Panelini Ayarlar.**')
      .addField('**<a:phoenx:700335033340264508>    x!sunucupanel sil**', '**Sunucunun Panelini Ayarlar.**')
      .addField('**<a:phoenx:700335033340264508>    x!ban-kanal ayarla/sıfırla**', '**Ban Logunu Ayarlarsınız.**')
      .addField('**<a:phoenx:700335033340264508>    x!ban-rol ayarla/sıfırla**', '**Ban Atacak Kişinin Rolünü Ayarlarsınız.**')
      .addField('**<a:phoenx:700335033340264508>    x!ban @kişi**', '**Etiketlediğiniz Kişiyi Sunucudan Yasaklarsınız.**')
      .addField('**<a:phoenx:700335033340264508>    x!sayaç sayı #kanal**', '**Sunucuya Sayaç Ayarlar.**')
    .addField('**<a:phoenx:700335033340264508>      x!sayaç sıfırla**', '**Sunucuya Ayarlanan Sayacı Sıfırlar.**')
      .addField('**<a:phoenx:700335033340264508>    x!say**', '**Sunucu İstatistiğini Gösterir.**')
      .addField('**<a:phoenx:700335033340264508>    x!prefix Prefix**', '**Sunucuya Özel Prefix Ayarlar.**')
      .addField('**<a:phoenx:700335033340264508>    x!prefix sıfırla**', '**Sunucuya Özel Ayarladığınız Prefixi Sıfırlar.**')
      .addField('**<a:phoenx:700335033340264508>    x!sa-as aç/kapat**', '**Sunucuya Özel Ayarladığınız Prefixi Sıfırlar.**')
      .addField('**<a:phoenx:700335033340264508>    x!koruma aç/kapat**', '**Rol Ve Kanal Koruma Sistemini Aktif Eder.**')
      .addField('**<a:phoenx:700335033340264508>    x!koruma kanal #kanal**', '**Koruma Logunu Ayarlar**')
      .addField('**<a:phoenx:700335033340264508>    x!temizle-üye @kullanıcı**', '**Etiketlediğiniz Kullanıcının Mesajlarını Siler [SAYI ZORUNLU].**')
      .addField('**<a:phoenx:700335033340264508>    x!spambotkorumasi**', '**Spam Korumasını Açar.**')  
     .addField('**<a:phoenx:700335033340264508>     x!unban**', '**Banladığınız Kişinin Banını Açar.**') 
     .addField('**<a:phoenx:700335033340264508>     x!1k-msg-sil**', '**1.000 Tane Mesaj Siler.**') 
     .addField('**<a:phoenx:700335033340264508>     x!sil**', '**1/100 Arası Mesaj Siler.**') 
     .addField('**<a:phoenx:700335033340264508>     x!otorol @rol #kanal**', '**Otorolü Ayarlar.**') 
     .addField('**<a:phoenx:700335033340264508>     x!otorol-mesaj-kapat**', '**Otorolün Mesajını Kapatır.**') 
     .addField('**<a:phoenx:700335033340264508>     x!otorol-kapat**', '**Otorolü Kapatır.**')
     .addField('**<a:phoenx:700335033340264508>     x!caps-lock **', '**Sunucuda Büyük Harf Kullanımını Engeller. [Kapatmak İçin Komudu Tekrar Kullanınız.]**')
    .addField('**<a:phoenx:700335033340264508>     x!mute @kişi**', '**Etiketlediğiniz Kişiyi Susturur.**')
     .addField('**<a:phoenx:700335033340264508>     x!unmute @kişi**', '**Etiketlediğiniz Kişiyi Sustururmasını Kaldırır.**')
      .addField(`» Linkler`, `[Web Sitemiz](https://bot.paxofficial.tk)`)
)   
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
  
} 
  
exports.help = {
  name: 'yetkili',
}