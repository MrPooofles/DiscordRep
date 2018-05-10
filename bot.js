const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    });

client.on('message', message => {
    if (message.content === '.server') {
    	message.reply('!**Not yet realeased**!');
  	}
    
    });

client.on('message', message => {
    if (message.content === '.staffapplication') {
    	message.reply('Ask Mr.Poof and the Caul for staff applications');
  	}
    
    });

client.on('message', message => {
    if (message.content === '.owner') {
    	message.reply('Mr.Poof is my Owner!');
  	}
    
});

client.on('message', message => {
    if (message.content === '.ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === '.bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
