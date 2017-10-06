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
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
var math = false
var math_input_first
var math_input_second
var count
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!' && isNaN(message)) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var cmd2;
        args = args.splice(1);

        if(math == false)
        {
        switch(cmd) {

            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            case 'test':
                math = true
            break;
         }
       }
       else if(count == 0)
       {
         math_input_first = cmd
         count = 1
       }
       else
       {
         math_input_second = cmd
         test_func(this, channelID)
       }
     }
});

function test_func(obj, channelID)
{
  console.log('test')
  var term1 = parseInt(math_input_first)
  var term2 = parseInt(math_input_second)

  obj.sendMessage({
    to: channelID,
    message: term1 + term2
  })
  count = 0
  math = false

}
