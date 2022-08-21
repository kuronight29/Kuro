const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Xem thông tin của bạn.'),
	async execute(interaction) {
		return interaction.reply(`**Tên**: ${interaction.user.username}\n**ID**: ${interaction.user.id}`);
	},
};