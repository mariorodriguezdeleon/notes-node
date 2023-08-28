const fs = require ('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const validator = require('validator');
const lodash = require('lodash' );

//const command = process.argv[2]; Don't need!

// Customize yargs version 
yargs.version('17.7.2')

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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
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
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

// Create list notes command
yargs.command({
    command: 'list',
    describe: 'Retrieves all Notes',
    handler() {
        notes.listNotes()
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Returns body of note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Create get command - retrives note by title
// not connected
yargs.command({
    command: 'get',
    describe: 'Retrives note by title',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.getNotes(argv.title);
    }
})

yargs.parse();

// console.log(process.argv);