const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Danh sách lệnh của bot'),
    async execute(interaction, client) {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle('Danh sách lệnh')
                .setDescription(`prefix của em là \`/\` ,có thắc mắc gì vui lòng liên hệ Long Vũ#1640
                                **🙎‍♀️ User**
                                \`avatar\` \`user-info\` 
                                **😀 Fun**
                                \`kiss\` \`hug\` \`slap\` \`waifu\`
                                **🔧 Utility**
                                \`ping\` \`server\` \`clear\` \`help\` 
                                 **🔒 Moderation** 
                                \`kick\`
                                  `)
                .setColor(0x0099FF)
                .setTimestamp()
                .setThumbnail('https://i.pinimg.com/originals/9a/5c/e0/9a5ce09d29976b8a0591e66fd57192ba.gif')
                .setImage('https://steamuserimages-a.akamaihd.net/ugc/97231695406824434/300AEADC0181C01CA822306A9F86E9DDD2A5DDE9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
              ],
        })
    }
}