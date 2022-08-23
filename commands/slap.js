const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const gifs = [
    'https://media.giphy.com/media/u8maN0dMhVWPS/giphy.gif',
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
    const embed = {
        color: 0x00AE86,
        title: 'Tát',
        description: `${interaction.user.username} tát ${user.username}`,
        image: {
            url: gif,
        },
        footer: { text: 'Slap' },
    }
        return interaction.reply({ embed : [embed] });
    }
}