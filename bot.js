const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    });

client.on('message', message => {
    if (message.content === '.clear') {
      message.reply('D?purge 10');
    }

    });

client.on('message', message => {
    if (message.content === '.owner') {
      message.reply('The owner of the server are Caul and Poof and Dont forget Syco');
    }

    });

client.on('message', message => {
    if (message.content === '.report') {
      message.reply('Go to #report to seek help from the staff');
    }

    });

client.on('message', message => {
    if (message.content === '.donate') {
      message.reply('Go to our buycraft store to help donate and help the owners keep the server up and make more features!');
    }

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
