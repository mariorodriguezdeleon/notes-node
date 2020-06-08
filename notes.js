const fs = require('fs');
const chalk = require('chalk')

// helper function - loads notes if file exists or returns an empty array otherwise
const loadNotes = function () {

    //try to load notes if file exist, catch error (e) and send blank array to begin new note.json file
    try {

        dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return []
    }

}

// helper function - writes note(s) to file
const saveNotes = function (newNote) {

    const dataJSON = JSON.stringify (newNote);
    fs.writeFileSync('notes.json', dataJSON);

}

// Add Notes function
const addNote = function (title, body) {

    // Add note functionality
    // Check to see if note title is already in use
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    });
    
    if (duplicateNotes.length === 0) {
        
        notes.push({
            title: title,
            body: body
        });
        
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));

    } else {
        console.log(chalk.red.inverse('Not title taken'));
    }
    
}

//removes note based on title
const removeNote = function (title) {
    
    //remove note
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })
    
    
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        cconsole.log(chalk.green.inverse('Note Removed'));
    } else {
        console.log(chalk.red.inverse('No note found'));
    }

}

const getNote = function (title) {
    //return notes
}

module.exports = {
    
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote
}