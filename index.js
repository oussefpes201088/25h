const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1265825059692609587')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('my life "M" ♡⁩')
    .setName('lamine 3mk')
    .setDetails(`ادعوا ل امي بلرحمه`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1294559336969801742/1295100925366505532/discord-nitro-file-1a7f05a3.png.webp?ex=670d6c3a&is=670c1aba&hm=f949f39348832c1bf46a2c58f3ca06081933554d8d0c67c44b07ea3c55f1f74f&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1294559336969801742/1295101424924885165/Screenshot_-2.png?ex=670d6cb1&is=670c1b31&hm=60e58a7b1a95ec2cfc60d6164e8ad11f925a5ac1b63eced1ca78dca4ba6b891b&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('My Facebook ', 'https://www.facebook.com/profile.php?id=61550234356710&mibextid=ZbWKwL');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
