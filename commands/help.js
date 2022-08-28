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
                                **🧨Action**
                                \`kiss\` \`hug\` \`slap\` 
                                **🔧Utility**
                                \`ping\` \`server\` \`clear\` \`help\` 
                                 **🔒Moderation** 
                                \`kick\`
                                  `)
                .setColor(0x0099FF)
                .setTimestamp()
                .setThumbnail('https://media.giphy.com/media/a6pzK009rlCak/giphy.gif')
                .setImage('https://media.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif')
              ],
        })
    }
}