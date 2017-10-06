var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt, channelID) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.sendMessage({
      to: channelID,
      message: 'Oh shit here come dat boi!'
    })
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var cmd2 = args[1];
        var cmd3 = args[2];
       args = args.splice(1);

        switch(cmd) {

            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            case 'sum':
                test_func(bot, channelID, cmd2, cmd3)
            break;
         }
     }
});

function test_func(obj, channelID, input1, input2)
{
  console.log('test')
  var sum = parseInt(input1) + parseInt(input2)

  obj.sendMessage({
    to: channelID,
    message: sum
  })

}
