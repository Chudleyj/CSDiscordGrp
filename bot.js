var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const fs = require("fs");


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


bot.on('ready', function () {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

// Load tracker
let points = JSON.parse(fs.readFileSync("./tracker.json", "utf8"));

// Time vars
const startTime = new Date(); // Server start time
const spawnTime = new Date();

spawnTime.setMinutes(startTime.getMinutes() + 2); // 2 minutes after server launch

const offset = 1; // Notification will be sent this many minutes before the target time
var stop = false;
var spawned = false;

setInterval(function() {
    if (!stop)
    {
        if (!spawned)
        {
            var d = new Date();
            if (d.getMinutes() < spawnTime.getMinutes() - offset) return;
            if (d.getMinutes() === spawnTime.getMinutes() - offset)
            {
                bot.sendMessage({
                    to: '365929907655802882',
                    message: 'An egg will appear in ' + offset + ' minute!'
                });
            } else if (d.getMinutes() === spawnTime.getMinutes()) {
                bot.sendMessage({ to: '365929907655802882', message: 'An egg has spawned!' });    
                spawned = true;    
            }
        }
    }
}, 60 * 1000); // Check every minute

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !take
            case 'take':
                if (spawned)
                {
                    addPoints(userID, 1);
                    bot.sendMessage({
                        to: '365929907655802882',
                        message: "You snag the golden egg! You now have 1 egg."
                    });
                    spawnTime.setMinutes(d.getMinutes() + 2);  
                } else {
                    bot.sendMessage({
                        to: '365929907655802882',
                        message: 'You stare into thin air, no prize awaits you.'
                    });
                }
                break;
            case 'time':
                var d = new Date();
                var t = spawnTime.getMinutes() - d.getMinutes();
                bot.sendMessage({
                    to: '365929907655802882',
                    message: `${t} minutes until spawn. It will spawn at ${spawnTime.getMinutes()} Currently at ${d.getMinutes()}`
                });
                break;
            /*case 'stop':
                stop = !stop;
                bot.sendMessage({
                    to: '365929907655802882',
                    message: `stop =  ${stop}`
                });
                break;*/
            case 'points':
                checkPoints(userID);
                bot.sendMessage({
                    to: channelID,
                    message: `${userID} you have ${points[userID].points} points`
                });
            case 'gain':
                addPoints(userID, 1);
                break;
         }
     }
});

function checkPoints(usr) {
    if (!points[usr])
    {
        points[usr] = {points: 0};
        updateJSON();
    }
}

function addPoints(user, amnt) {
    checkPoints(user);
    points[user].points += amnt;
    updateJSON();
}

function updateJSON() {
    // Save to JSON
    fs.writeFile("./tracker.json", JSON.stringify(points), (err) => {
        if (err) console.error(err)
    });
}