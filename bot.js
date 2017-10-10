var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var questions_file = require('./get_questions.js');
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

var on = false;
var question_choice;
var obj = new questions_file.get_questions()
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == ';') {
        var ans = message.substring(1).toLowerCase(); //Question answer vars
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

       if(on == false){
       switch(cmd){
          case 'start':
            q.get_Question(channelID);
            console.log(question_choice);
          return;
          break;
        }
      }
        answer_Question(question_choice, channelID, ans);
    }//end if (message....)
});// end function

function answer_Question(question_choice, channelID, ans)
{
  console.log('ANSWER QUESTION')
  if(question_choice === 1){
     if(ans === 'pony express'){
        bot.sendMessage({
          to: channelID,
          message: "Correct!"
        });
        on = false;
      }

     else{
        bot.sendMessage({
          to: channelID,
          message: "Wrong!"
        });
        on = false;
      }
    }

    else if(question_choice === 2){
      if(ans === 'camel'){
          bot.sendMessage({
            to: channelID,
            message: "Correct!"
          });
          on = false;
        }

        else{
          bot.sendMessage({
            to: channelID,
            message: "Wrong!"
          });
          on = false;
        }
      }

      else if(question_choice === 3){
        if(ans === 'vincent van gogh'){
            bot.sendMessage({
              to: channelID,
              message: "Correct!"
            });
            on = false;
          }

          else{
            bot.sendMessage({
              to: channelID,
              message: "Wrong!"
            });
            on = false;
          }
        }

        else if(question_choice === 4){
          if(ans === '1990'){
              bot.sendMessage({
                to: channelID,
                message: "Correct!"
              });
              on = false;
            }

            else{
              bot.sendMessage({
                to: channelID,
                message: "Wrong!"
              });
              on = false;
            }
          }

          else if(question_choice === 5){
            if(ans === 'liquid crystal display'){
                bot.sendMessage({
                  to: channelID,
                  message: "Correct!"
                });
                on = false;
              }

            else{
                bot.sendMessage({
                  to: channelID,
                  message: "Wrong!"
                });
                on = false;
              }
            }

            else if(question_choice === 6){
              if(ans === 'read only memory'){
                  bot.sendMessage({
                    to: channelID,
                    message: "Correct!"
                  });
                  on = false;
                }

               else{
                  bot.sendMessage({
                    to: channelID,
                    message: "Wrong!"
                  });
                  on = false;
                }
              }

              else if(question_choice === 7){
                if(ans === 'kodak'){
                    bot.sendMessage({
                      to: channelID,
                      message: "Correct!"
                    });
                    on = false;
                  }

                else{
                    bot.sendMessage({
                      to: channelID,
                      message: "Wrong!"
                    });
                    on = false;
                  }
                }

                else if(question_choice === 8){
                  if(ans === '1993'){
                      bot.sendMessage({
                        to: channelID,
                        message: "Correct!"
                      });
                      on = false;
                  }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      });
                      on = false;
                    }
                  }
                  else if(question_choice === 9){
                    if(ans === '1976'){
                        bot.sendMessage({
                          to: channelID,
                          message: "Correct!"
                        });
                        on = false;
                    }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      });
                      on = false;
                    }
                  }

                  else if(question_choice === 10){
                    if(ans === 'world wide web'){
                        bot.sendMessage({
                          to: channelID,
                          message: "Correct!"
                        });
                        on = false;
                    }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      });
                      on = false;
                    }
                  }

                  else if(question_choice === 11){
                    if(ans === '1985'){
                        bot.sendMessage({
                          to: channelID,
                          message: "Correct!"
                        });
                        on = false;
                    }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      });
                      on = false;
                    }
                  }

                  else if(question_choice === 12){
                    if(ans === 'Voyager 1'){
                        bot.sendMessage({
                          to: channelID,
                          message: "Correct!"
                        });
                        on = false;
                    }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      });
                      on = false;
                    }
                  }

                  else if(question_choice === 13){
                    if(ans === 'Samuel Morse'){
                        bot.sendMessage({
                          to: channelID,
                          message: "Correct!"
                        });
                        on = false;
                    }

                  else{
                      bot.sendMessage({
                        to: channelID,
                        message: "Wrong!"
                      });
                      on = false;
                    }
                  }
                }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
