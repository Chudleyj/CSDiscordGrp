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
});

var on = false
var question_choice
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var ans = message.substring(1);
       args = args.splice(1);

       if(on == false){
       switch(cmd){
          case 'start':
            get_Question(channelID);
          break;
        }
      }

      else if(question_choice == 1){
        switch(ans){
            case 'Pony Express':
            case 'Pony express':
            case 'pony express':
            case 'pony Express':
            bot.sendMessage({
              to: channelID,
              message: "Correct!"
            })
            on = false;
            break;


            default:
            bot.sendMessage({
              to: channelID,
              message: "Wrong!"
            })
            on = false;
            break;
          }
        }

        else if(question_choice == 2){
          switch(cmd){
              case 'Camel':
              case 'camel':
              bot.sendMessage({
                to: channelID,
                message: "Correct!"
              })
              on = false;
              break;

              default:
              bot.sendMessage({
                to: channelID,
                message: "Wrong!"
              })
              on = false;
              break;
            }
          }

          else if(question_choice == 3){
            switch(cmd){
                case 'Vincent Van Gogh':
                case 'Vincent Van gogh':
                case 'Vincent van gogh':
                case 'Vincent van Gogh':
                case 'vincent van gogh':
                bot.sendMessage({
                  to: channelID,
                  message: "Correct!"
                })
                on = false;
                break;

                default:
                bot.sendMessage({
                  to: channelID,
                  message: "Wrong!"
                })
                on = false;
                break;
              }
            }

            else if(question_choice == 4){
              switch(cmd){
                  case '1990':
                  bot.sendMessage({
                    to: channelID,
                    message: "Correct!"
                  })
                  on = false;
                  break;

                  default:
                  bot.sendMessage({
                    to: channelID,
                    message: "Wrong!"
                  })
                  on = false;
                  break;
                }
              }

              else if(question_choice == 5){
                switch(cmd){
                    case 'Liquid Crystal Display':
                    case 'Liquid crystal display':
                    case 'Liquid Crystal display':
                    case 'Liquid crystal Display':
                    case 'liquid Crystal Display':
                    case 'liquid crystal Display':
                    case 'liquid crystal display':
                    bot.sendMessage({
                      to: channelID,
                      message: "Correct!"
                    })
                    on = false;
                    break;

                    default:
                    bot.sendMessage({
                      to: channelID,
                      message: "Wrong!"
                    })
                    on = false;
                    break;
                  }
                }
    }//end if (message....)

});// end function

function get_Question(channelID){
  question_choice = getRandomInt(1,5)
  switch(question_choice){
    case 1:
      bot.sendMessage({
        to: channelID,
        message: 'What was the name of the U.S. mail service, started in 1860, that used horses and riders?'
      });
    break;

    case 2:
      bot.sendMessage({
        to: channelID,
        message: 'What type of animal is known as the ship of the desert?'
      });
    break;

    case 3:
      bot.sendMessage({
        to: channelID,
        message: 'The Starry Night is an oil on canvas painted by which post-impressionist painter?'
      });
    break;

    case 4:
      bot.sendMessage({
        to: channelID,
        message: 'CERN launched the very first website in what year?'
      });
    break;

    case 5:
      bot.sendMessage({
        to: channelID,
        message: 'When referring to a computer monitor, what does the acronym LCD stand for?'
      });
    break;
  }
  on = true
  return question_choice;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
