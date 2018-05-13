const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    });

bot.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "add") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }

  if (command === "say") {
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }

  if (command === "ping") {
    message.channel.sendMessage("pong!").catch(console.error);
  } else

  if (command === "foo") {
    let modRole = message.guild.roles.find("name", "Mods");
    if(message.member.roles.has(modRole.id)) {
      message.channel.sendMessage("bar!").catch(console.error);
    } else {
      message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
    }
  }

  if (command === "kick") {
    let modRole = message.guild.roles.find("name", "Mods");
    if(!message.member.roles.has(modRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
    }
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to kick").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
      return message.reply("That user does not seem valid");
    }
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
      return message.reply("I don't have the permissions (KICK_MEMBER) to do this.").catch(console.error);
    }
    kickMember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`).catch(console.error);
    }).catch(console.error)
  }

  if (command === "eval") {
    if(message.author.id !== "139412744439988224") return;
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch(err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

});

client.on('message', message => {
    if (message.content === '.help') {
      message.reply('');
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
