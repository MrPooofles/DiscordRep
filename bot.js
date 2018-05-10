const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    });

client.on('message', message => {
    if (message.content === '.helpme') {
    	message.reply('commands that i know: .server(will show you the ip and port of every server!) .report(will help you to report someone that did not follow the rules!)');
  	}
    
    });

client.on('message', message => {
    if (message.content === '.info') {
    	message.reply('I have no complex commands! But i can give you information. Do .helpme for help');
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
