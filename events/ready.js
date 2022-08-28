const { ActivityType } = require('discord.js')

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
			activities: [{ name: `discord.js v14`, type: ActivityType.Competing }],
			status: 'dnd',
		  });
	},
};