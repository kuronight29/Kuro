const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const gifs = [
    'https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif',
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
  ];


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Ôm một ai đó')
        .addUserOption(option => option.setName('user').setDescription('ôm ai đó')),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');
        if (!user) return interaction.reply('Bạn chưa chọn người nào để ôm');
        const gif = gifs[Math.floor(Math.random() * gifs.length)];
        await interaction.reply({
            embeds: [
             new EmbedBuilder()
                .setDescription(`${interaction.user.toString()} đã ôm ${user.toString()}`)
                .setColor(0x0099FF)
                .setImage(gif)
            ],
            ephemeral: false
        })
    }
}