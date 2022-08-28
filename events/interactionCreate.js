module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} đã kích hoạt một interaction.`);
	},
};