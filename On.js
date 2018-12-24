const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '#Cre') {
    msg.reply('#credit');
  }
});

client.login(process.env.BOT_TOKEN);
