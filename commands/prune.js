const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prune')
		.setDescription('Xóa lên đến 99 tin nhắn.')
		.addIntegerOption(option => option.setName('amount').setDescription('Số lượng tin nhắn cần xóa')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		if (amount < 1 || amount > 99) {
			return interaction.reply({ content: 'Bạn cần nhập một số từ 1 đến 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Đã xảy ra lỗi khi xóa tin nhắn trong kênh này!', ephemeral: true });
		});

		return interaction.reply({ content: `Successfully \`${amount}\` messages.`, ephemeral: true });
	},
};