const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const superagent = require('superagent');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifu')
        .setDescription('waifu của bạn'),
    async execute(interaction, client) {
        const { body } = await superagent.get("https://nekos.life/api/v2/img/waifu");
        await interaction.reply({
            embeds: [
             new EmbedBuilder()
                .setTitle("waifu của bạn")
                .setColor(0x0099FF)
                .setImage(body.url)
            ],
            ephemeral: false
        })
    }
}