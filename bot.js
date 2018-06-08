const Discord =  require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
});


client.on('message', message => {
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

