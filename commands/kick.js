const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Chọn một thành viên và kick họ.')
		.addUserOption(option => option.setName('user').setDescription('chọn người để kick')),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		return interaction.reply({ content: `Bạn đã kick: ${member.username}`, ephemeral: true });
	},
};