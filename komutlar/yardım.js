const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://topg.org/image/461120/412323.gif', 'https://topg.org/image/461120/412323.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Clarisa Ana Menüsüne Hoş Geldin Dostum :innocent:
${client.user} Kullanırken \`@Clarisa\` rolünü en yukarıda tutunuz.**
**
🐝 \`${client.ayarlar.prefix}kayıt-içerik\`

> Kayıt, Kutulu \`&\` Kutusuz, Diğer, Tag rol,
> Koruma, Say, Aktiflik, Mesaj tag

🆙 \`${client.ayarlar.prefix}seviye-sistem\`

> Basit Seviye, Seviye sıralaması & büyük 
> depolama alan

🦋 \`${client.ayarlar.prefix}yardım2\` Menüsün de neler var?

> Mute, Karantina, Ban, Toplu rol, Sayaç \`&\` Oto 
> rol, Kısıtlamalar

🔥 \`${client.ayarlar.prefix}yardım3\` Menüsün de neler var?

> Yasak tag, Oto isim, Komut mesaj, Fake hesap, 
> Sunucu tema, Kanal arındır \`&\` Rol arındır

💸 İninal Barkod NO: \`Yakında\`
💸 Papara Hesap NO: \`Yakında\`


💐 Clarisa Bot :)
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/759022175444926514/773963799978967080/350kb_1.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};