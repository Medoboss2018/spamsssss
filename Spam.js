const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var ServerID = "526697815678648331"; 
var ChannelID = "526697919542460416";

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 0.5000);

client.on('message', msg => {
  if (msg.content === '#Cre') {
    msg.reply('#credit');
  }
});

client.on('message', msg => {
  if (msg.content === '#Cres') {
    msg.reply('#credit <@<@439393453332234243> 10000');
  }
});

client.on('message', msg => {
  if (msg.content === '#Cress') {
    msg.reply('#daily');
  }
});

client.login(process.env.BOT_TOKEN);
