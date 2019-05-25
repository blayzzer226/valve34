const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("Команды")
    .setColor('#00ff24')
    .addField("1. !ban here")
    .addField("2. !clear 100 (max 100)")
    .addField("3. !create")
    .addField("4. !help")
    .addField("5. !kick here")
    .addField("6. !mute here 300")
    .addField("7. !serverinfo")
    .addField("8. !userinfo")
    .addField("9. !warn here")
    .addField("10.!unmute here")
    .addField("11.!unwarn here")
    .setThumbnail(a.avatarURL)

    bot.send(embed);

};
module.exports.help = {
    name: "help1"
};