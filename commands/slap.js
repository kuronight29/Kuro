const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const gifs = [
    'https://cdn.nekos.life/slap/slap_011.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
  ];


module.exports = {
    data: new SlashCommandBuilder()
        .setName('slap')
        .setDescription('Tát một ai đó')
        .addUserOption(option => option.setName('user').setDescription('Tát ai đó')),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');
        if (!user) return interaction.reply('Bạn chưa chọn người nào để tát');
        const gif = gifs[Math.floor(Math.random() * gifs.length)];
        await interaction.reply({
            embeds: [
             new EmbedBuilder()
                .setDescription(`${interaction.user.username} tát ${user.username}`)
                .setColor(0x0099FF)
                .setImage(gif)
            ],
            ephemeral: false
        })
    }
}