const fs = require('fs');
const chalk = require('chalk')

// helper function - loads notes if file exists or returns an empty array otherwise
const loadNotes = () => {

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
const saveNotes = (newNote) => {

    const dataJSON = JSON.stringify (newNote);
    fs.writeFileSync('notes.json', dataJSON);

}

// Add Notes function
const addNote = (title, body) => {

    // Add note functionality
    // Check to see if note title is already in use
    const notes = loadNotes();
    const duplicateNotes = notes.find( (note) => note.title === title);
    
    debugger


    if (!duplicateNotes) {
        
        notes.push({
            title: title,
            body: body
        });
        
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));

    } else {
        console.log(chalk.red.inverse('Title taken!'));
    }
    
}

//removes note based on title
const removeNote = (title) => {
    
    //remove note
    const notes = loadNotes();
    const notesToKeep = notes.find( (note) => note.title !== title)
    
    
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        cconsole.log(chalk.green.inverse('Note Removed'));
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}

const listNotes = () => {
    //return list of notes
    const notes = loadNotes();
    console.log(chalk.magenta.bold('Available Notes: '))

    notes.forEach( (note) =>{
        console.log(` - ${note.title}`);
    });
}

const readNote = (title) => {
    //read note
    const notes = loadNotes();
    const note = notes.find( (note) => note.title === title);
    
    if (note) {
        
        console.log(chalk.inverse(`Note: ${note.title}`));
        console.log(`\nBody: ${note.body}`)

    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
}

const getNotes = () => {
    //getNotes
    //return notes
    const notes = loadNotes();
    console.log(chalk.blue.bold('Available Notes: '))

    notes.forEach( (note) =>{
        console.log(` - ${note.title}` `\n-Body ${note.body}`);
    });
}

module.exports = {
    
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    getNotes: getNotes

}