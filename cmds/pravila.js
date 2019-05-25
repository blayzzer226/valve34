const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Правила")
    .setColor('#ff0000')
    .addField("1.Правила- не оскорблять участников групы и администрацию и т.д")
    .addField("2.Пиар в лс[Бан]")
    .addField("3.Оск админов[Mute:300s]")
    .addField("4.Неодыкватное [Mute:200s]")
    .addField("5.Правило Если у вас посторонний шум то сделайте пожалуйста по нажатию")
    .addField("6.Если вы отходите то вас через 5мин перемещяет в Канал AFK")
    .addField("7.Правила После 3 Придупреждений мут на усмотрение адм")
    .setThumbnail(a.avatarURL)

     bot.send(embed);

};
module.exports.help = {
    name: "reefffe3334rfffww"
};