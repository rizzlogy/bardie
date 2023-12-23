"use strict";
#!/usr/bin/env node

const { hideBin } = require('yargs/helpers');
const { argv } = require('yargs');
const cheerio = require("cheerio");
const Bardie = require('./lib/bardie');
const promptSync = require('prompt-sync');
const Markdown = require('markdown-it');
const chalk = require("chalk");

const prompt = promptSync({
    autocomplete: getAutoComplete(['!exit']),
});

function getAutoComplete(commands) {
    return function (partial) {
        return commands.filter((c) => c.startsWith(partial));
    };
}

async function htmlToCommandLine(html) {
    const $ = cheerio.load(html);
    const elements = $('body').children();
    const styledElements = [];

    elements.each(function (i, element) {
        let styledElement;

        switch (element.name) {
            case 'p':
                styledElement = chalk.bold($(element).text());
                break;
            case 'ul':
                const $listItems = $(element).find('li');
                styledElement = $listItems
                    .map((i, li) => chalk.yellow(`- ${$(li).text()}`))
                    .get()
                    .join('\n');
                break;
            case 'pre':
                styledElement = chalk.gray($(element).find('code').text());
                break;
            case 'code':
                styledElement = chalk.gray($(element).text());
                break;
            default:
                styledElement = $(element).text();
        }

        styledElements.push(styledElement);
    });

    return styledElements.join('\n\n');
}


const markdown = new Markdown();

(async function () {
    console.log(`
    Bardie - A command-line interface to Google's Bard Server
    Docs: https://bard.rizzy.eu.org
    NPM: https://www.npmjs.com/package/bardie
  
    Enter Ctrl+C or type "!exit" to quit.
  `);
    
    const bard = new Bardie();

    try {
        while (true) {
            const userPrompt = prompt('You: ');

            if (userPrompt === '!exit' || userPrompt === null || userPrompt === undefined || userPrompt === '') {
                console.log('Exiting...');
                break;
            }

            const response = await bard.question({ ask: userPrompt });
            console.log('Bardie : ', await htmlToCommandLine(markdown.render(response.content)) + '\n\n');
        }
    } catch (error) {
        console.error(error.message);
        console.log('Exiting...');
    }
})();
