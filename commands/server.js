const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Hiển thị thông tin về server."),
  async execute(interaction) {
    return interaction.reply(
      `**Tên Server:** ${interaction.guild.name}\n**ID Server:** ${interaction.guild.id}\n**Tổng members**: ${interaction.guild.memberCount}\n**Tổng channels:** ${interaction.guild.channels.cache.size}\n**Tổng roles:** ${interaction.guild.roles.cache.size}\n**Tổng emojis:** ${interaction.guild.emojis.cache.size}`
    );
  },
};
