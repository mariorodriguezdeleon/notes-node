const fs = require ('fs');
const notes = require('./notes.js');
const validator = require('validator');
const lodash = require('lodash');
const chalk = require('chalk');
const yargs = require('yargs');


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
        // console.log(`\nTitle: ${chalk.blue(argv.title)} \nBody: ${chalk.green(argv.body)}`);
    },
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
});

// Create list notes command
yargs.command({
    command: 'list',
    describe: 'Lists all commands',
    handler: function () {
        console.log('Listing out all notes');
    }
});

yargs.parse();