const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Lấy URL hình đại diện của người dùng đã chọn hoặc hình đại diện của chính bạn.')
		.addUserOption(option => option.setName('target').setDescription('Lấy avatar của ai')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL()}`);
	},
};