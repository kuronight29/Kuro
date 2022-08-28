const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const gifs = [
    'https://media.giphy.com/media/MQVpBqASxSlFu/giphy.gif',
    'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif',
    'https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif',
  ];


module.exports = {
    data: new SlashCommandBuilder()
        .setName('kiss')
        .setDescription('Hôn một ai đó')
        .addUserOption(option => option.setName('user').setDescription('hôn ai đó')),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');
        if (!user) return interaction.reply('Bạn chưa chọn người nào để hôn');
        const gif = gifs[Math.floor(Math.random() * gifs.length)];
        await interaction.reply({
            embeds: [
             new EmbedBuilder()
                .setDescription(`${interaction.user.toString()} đã hôn ${user.toString()}`)
                .setColor(0x0099FF)
                .setImage(gif)
            ],
            ephemeral: false
        })
    }
}