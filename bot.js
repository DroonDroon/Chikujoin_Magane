
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
   
// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();



client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});



client.on("message", async message => {

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var str = "";
        var num = Math.floor((Math.random() * 6) + 1);


        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'lie':
                client.sendMessage({
                    to: channelID,
                    message: 'Uso no uso, sore wa kururi to uragaeru!'
                });
            break;
            // Just add any case commands if you want to..
           case 'ayy':
           client.sendMessage({
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
              client.sendMessage({
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
           client.sendMessage({
            to: channelID,
            message: '!lie, !magane, !ayy'
            

           });
           break;
         }
     }
});

client.login(proecess.env.BOT_TOKEN);
