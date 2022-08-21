const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		return interaction.reply(`**Tên**: ${interaction.user.username}\n**ID**: ${interaction.user.id}`);
	},
};