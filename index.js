// Import classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// New instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`Server started at ${Date.now()}`)
})