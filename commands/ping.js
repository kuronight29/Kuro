const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Xem độ chậm trễ của bot'),
	async execute(interaction) {
		await interaction.reply(`🏓Pong! ${client.ws.ping}`);
	},
};