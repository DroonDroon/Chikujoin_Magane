const Discord =  require('discord.js');
const client = new Discord.Client();

client.om('ready', () => {
    console.log('I am ready!');
    
});


client.on('message', message => {

});
client.login(proecess.env.BOT_TOKEN);

