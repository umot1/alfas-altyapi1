const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://topg.org/image/461120/412323.gif', 'https://topg.org/image/461120/412323.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Yardım 2 Menüsüne Hoş Geldin Dostum 😇**
\`\`\`${client.user.username} Kullanırken @Clarisa rolünü en yukarıda tutunuz.\`\`\`

**\`${client.ayarlar.prefix}mute-sistem\`
Chat ve Seste mute için güzel sistem

\`${client.ayarlar.prefix}jail-sistem\`
Etiketlediğiniz Üyeyi karantina altına al

❌ \`${client.ayarlar.prefix}ban-sistem\`
Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız

🌹 \`${client.ayarlar.prefix}toplu-rol-sistem\`
Toplu rol ile hem alıp hem de verebileceğiniz sistem

🌊 \`${client.ayarlar.prefix}sayaç-sistem\`**
**Giriş Çıkış**, **Sayaç** hem de **otomatik rol** aynı anda çalıştır

🛎️ **\`${client.ayarlar.prefix}kısıtlamalar\`**
**Selam, küfür, reklam, büyük harf,** içerikler vardır
**
💸 İninal Barkod NO: \`123456789123\`
💸 Papara Hesap NO: \`1234567891\`


💐 Clarisa :)
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://topg.org/image/461120/412323.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y2', 'help2'],
  permLevel: 0
}

exports.help = {
  name: 'yardım2'
};