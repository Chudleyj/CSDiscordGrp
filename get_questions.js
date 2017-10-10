var q = {

 get_Question:  function (channelID){
    question_choice = getRandomInt(1,14)
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

  case 10:
    bot.sendMessage({
      to: channelID,
      message: 'In a website browser address bar what does "www" stand for?'
    });
  break;

  case 11:
    bot.sendMessage({
      to: channelID,
      message: 'In what year did Nintendo release its first game console in North America?'
    });
  break;

  case 12:
    bot.sendMessage({
      to: channelID,
      message: 'What is the farthest human-made object from planet Earth?'
    });
  break;

  case 13:
    bot.sendMessage({
      to: channelID,
      message: 'Who developed and patented the electrical telegraph in the United States in 1837?'
    });
  break;



    on = true;
    return question_choice;
    }
  }
}
exports.data = q;
