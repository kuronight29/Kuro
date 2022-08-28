const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Lấy URL hình đại diện của người dùng đã chọn hoặc hình đại diện của chính bạn.')
		.addUserOption(option => option.setName('target').setDescription('Lấy avatar của ai')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (!user) return interaction.reply("Bạn chưa chọn người để lấy avatar");
		await interaction.reply({
            embeds: [
             new EmbedBuilder()
                .setDescription(`Avatar của ${user.toString()}`)
                .setColor(0x0099FF)
                .setImage(`${user.displayAvatarURL({ dynamic: true})}`)
            ],
            ephemeral: false
        })
	},
};
