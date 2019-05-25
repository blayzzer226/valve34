const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Правила")
    .setColor('#ff0000')
    .addField("1.Правила не оскорблять участников групы и администрацию и т д [Mute: 1200s]")
    .addField("2.Пиар в лс[Ban: Permament]")
    .addField("3.Оск админов[Mute: 1000-2000s]")
    .addField("4.Неодыкватное[Mute: 1500s]")
    .addField("5.Правило Если у вас посторонний шум то сделайте пожалуйста по нажатию[Mute: 200s]")
    .addField("6.Если вы отходите то вас через 5мин перемещяет в Канал AFK")
    .addField("7.Правила После 3 Придупреждений [kick/mute:10000s]")

    bot.send(embed);

};
module.exports.help = {
    name: "fedweeffw22"
};