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
//var bot = new Discord.Client({
 //  token: auth.token,
//   autorun: true
//});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {

    
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var str = "";
        var num = Math.floor((Math.random() * 6) + 1);


        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'lie':
                bot.sendMessage({
                    to: channelID,
                    message: 'Uso no uso, sore wa kururi to uragaeru!'
                });
            break;
            // Just add any case commands if you want to..
           case 'ayy':
           bot.sendMessage({
            to: channelID,
            message: 'LMAO'
           });
           break;
          /* case 'send':
           bot.sendMessage({
            to: channelID,
            message: "https://giffiles.alphacoders.com/109/109720.gif"
            

           });
           break; */


           case 'magane':
                         if (num===1) {str+= "https://giffiles.alphacoders.com/109/109692.gif" } 
           else if (num===2){ str+= "https://giffiles.alphacoders.com/109/109695.gif"}
           else if (num===3){ str+= "https://giffiles.alphacoders.com/109/109690.gif"  }
           else if (num===4){ str+= "https://giffiles.alphacoders.com/109/109649.gif"  }
           else if (num===5){ str+= "https://giffiles.alphacoders.com/109/109638.gif"}
           else if (num===6){ str+= "https://78.media.tumblr.com/592d567c4f2e228995698c4a95564595/tumblr_opzb35kw1p1uzwbyjo1_500.gif"}
              bot.sendMessage({
               to: channelID,
               message: str

            /*switch(num) {
            case 1
            str+= "https://giffiles.alphacoders.com/109/109720.gif"

            break;
            case 2
            str+= "https://i.imgur.com/6UAbJfi.gif"
            break
            case 3
            str+= "https://data.whicdn.com/images/290025439/original.gif"
            break
            case 4
            str+= "http://steamusercontent-a.akamaihd.net/ugc/858353866568341659/CBF54D2AF75162950864855FD181C4BDE7A519DB/"
            break
            case 5
            str+= "https://vignette.wikia.nocookie.net/recreators/images/6/6a/Magane_001.gif/revision/latest?cb=20170821174925"
            break*/
           
            

           });
           break;
            case 'help':
           bot.sendMessage({
            to: channelID,
            message: '!lie, !magane, !ayy'
            

           });
           break;
         }
     }
});
bot.login(process.env.BOT_TOKEN);
