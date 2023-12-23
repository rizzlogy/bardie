#!/usr/bin/env node

const { hideBin } = require('yargs/helpers');
const { argv } = require('yargs');
const cheerio = require("cheerio");
const ChatBot = require('./src/ChatBot.js');
const promptSync = require('prompt-sync');
const Markdown = require('markdown-it');

const prompt = promptSync({
    autocomplete: getAutoComplete(['!exit']),
});

function getAutoComplete(commands) {
    return function (partial) {
        return commands.filter((c) => c.startsWith(partial));
    };
}

const markdown = new Markdown();

(async function () {
    console.log(`
    Bardie - A command-line interface to Google's Bard Server
    Docs: https://bard.rizzy.eu.org
    NPM: https://www.npmjs.com/package/bardie
  
    Enter Ctrl+C or type "!exit" to quit.
  `);
    const chatbot = new ChatBot(session);

    try {
        while (true) {
            const userPrompt = prompt('You: > ');

            if (userPrompt === '!exit' || userPrompt === null || userPrompt === undefined || userPrompt === '') {
                console.log('Exiting...');
                break;
            }

            const response = await chatbot.ask(userPrompt);
            console.log('Bardie :', ChatBot.htmlToCommandLine(markdown.render(response.content)) + '\n\n');
        }
    } catch (error) {
        console.error(error.message);
        console.log('Exiting...');
    }
})();
