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

    if (message.substring(0, 1) == ';') {
        var ans = message.substring(1).toLowerCase(); //Question answer vars
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

       if(on == false){
       switch(cmd){
          case 'start':
            get_Question(channelID);
          break;
        }
      }
      else{
        answer_Question(question_choice, channelID)
        on = false
      }
    }//end if (message....)
});// end function

function answer_Question(question_choice, channelID)
{
  if(question_choice == 1){
     if(ans === 'pony express'){
        bot.sendMessage({
          to: channelID,
          message: "Correct!"
        })
        on = false;
      }

     else{
        bot.sendMessage({
          to: channelID,
          message: "Wrong!"
        })
        on = false;
      }
    }

    else if(question_choice == 2){
      if(ans === 'camel'){
          bot.sendMessage({
            to: channelID,
            message: "Correct!"
          })
          on = false;
        }

        else{
          bot.sendMessage({
            to: channelID,
            message: "Wrong!"
          })
          on = false;
        }
      }

      else if(question_choice == 3){
        if(ans === 'vincent van gogh'){
            bot.sendMessage({
              to: channelID,
              message: "Correct!"
            })
            on = false;
          }

          else{
            bot.sendMessage({
              to: channelID,
              message: "Wrong!"
            })
            on = false;
          }
        }

        else if(question_choice == 4){
          if(ans === '1990'){
              bot.sendMessage({
                to: channelID,
                message: "Correct!"
              })
              on = false;
            }

            else{
              bot.sendMessage({
                to: channelID,
                message: "Wrong!"
              })
              on = false;
            }
          }

          else if(question_choice == 5){
            if(ans === 'liquid crystal display'){
                bot.sendMessage({
                  to: channelID,
                  message: "Correct!"
                })
                on = false;
              }

            else{
                bot.sendMessage({
                  to: channelID,
                  message: "Wrong!"
                })
                on = false;
              }
            }

            else if(question_choice == 6){
              if(ans === 'read only memory'){
                  bot.sendMessage({
                    to: channelID,
                    message: "Correct!"
                  })
                  on = false;
                }

               else{
                  bot.sendMessage({
                    to: channelID,
                    message: "Wrong!"
                  })
                  on = false;
                }
              }

              else if(question_choice == 7){
                if(ans === 'kodak'){
                    bot.sendMessage({
                      to: channelID,
                      message: "Correct!"
                    })
                    on = false;
                  }

                else{
                    bot.sendMessage({
                      to: channelID,
                      message: "Wrong!"
                    })
                    on = false;
                  }
                }

                else if(question_choice == 8){
                  if(ans === '1993'){
                      bot.sendMessage({
                        to: channelID,
                        message: "Correct!"
                      })
                      on = false;
                  }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      })
                      on = false;
                    }
                  }
                  else if(question_choice == 9){
                    if(ans === '1976'){
                        bot.sendMessage({
                          to: channelID,
                          message: "Correct!"
                        })
                        on = false;
                    }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      })
                      on = false;
                    }
                  }
                }

function get_Question(channelID){
  question_choice = getRandomInt(1,11)
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


  case 6:
    bot.sendMessage({
      to: channelID,
      message: 'When talking about computer memory, what does the acronym ROM stand for?'
    });
  break;

  case 7:
    bot.sendMessage({
      to: channelID,
      message: 'In 1975 an engineer created the first electronic camera while working for what company?'
    });
  break;

  case 8:
    bot.sendMessage({
      to: channelID,
      message: 'The first person shooter video game Doom was first released in what year?'
    });
  break;


case 9:
  bot.sendMessage({
    to: channelID,
    message: 'In what year was the first Apple computer released?'
  });
break;

  on = true
  return question_choice;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
