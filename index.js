const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); WPiPbsFveeSGVt3f-DIk4gQ_yPnr9xwl
const token = process.env.token WPiPbsFveeSGVt3f-DIk4gQ_yPnr9xwl
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de kingsandu' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("coucou")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(cfg.token); WPiPbsFveeSGVt3f-DIk4gQ_yPnr9xwl
bot.login(token); WPiPbsFveeSGVt3f-DIk4gQ_yPnr9xwl
