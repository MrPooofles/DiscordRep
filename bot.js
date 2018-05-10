const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    });

client.on('message', message => {
    if (message.content === '.infopoof') {
    	message.reply('I have no complex commands! But i can give you information. Do .helpme for help');
  	}
    
    });

client.on('message', message => {
    if (message.content === 'owner') {
    	message.reply('Mr.Poof is my Owner!');
  	}
    
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
