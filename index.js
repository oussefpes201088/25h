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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1296209977274535946/1296253196024418334/DiscordNitro.webp?ex=67119d5d&is=67104bdd&hm=689119b2756f95886cbfc085546d68693e0a402a278dfb7e8c658b96abafec9e&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1296209977274535946/1296253195743531008/Screenshot_-2.png?ex=67119d5d&is=67104bdd&hm=3a8d0af647d8fb14e5bb1075f79e60d4c9802ca12fe8b53282eda54009e70f41&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('My Server', 'https://discord.gg/hypers');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
