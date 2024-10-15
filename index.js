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
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1293701323891408947/1295611500106485832/Screenshot_-2.png?ex=670f47bc&is=670df63c&hm=20a00c0de8808e9ea3578a0fe8a3b570bb72f7e142cd2e63eec292362e610146&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('My Facebook ', 'https://www.facebook.com/profile.php?id=61550234356710&mibextid=ZbWKwL');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
