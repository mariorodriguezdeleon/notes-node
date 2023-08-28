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

//Add Note functionality
const addNote = (title, body) => {

    //get notes
    const notes = loadNotes();
    
    // Check to see if note title is already in use
    const duplicateNotes = notes.find( (note) => note.title === title);
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

//Removes Note Funtionality
const removeNote = (title) => {

    //get notes
    const notes = loadNotes();
    //filter out note to remove, rebuild notes json to be saved
    const notesToKeep = notes.filter( (notes) => {return notes.title !== title});
    //simple check to see if the note was removed by checking json lengths
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        cconsole.log(chalk.green.inverse('Note Removed'));
    } else {
        console.log(chalk.red.inverse('No note found'));
    }

}

// List Notes
const listNotes = () => {
    
    //get notes
    const notes = loadNotes();

    console.log(chalk.magenta.bold('Available Notes: '))
    //list available notes
    notes.forEach( (note) =>{
        console.log(` - ${note.title}`);
    });
}

// Read Notes
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

// Get Notes
const getNotes = () => {
    
    //getNotes
    const notes = loadNotes();
    console.log(chalk.blue.bold('Available Notes: '))

    notes.forEach( (note) => {
        console.log(` - ${note.title}` `\n-Body ${note.body}`);
    });
}

module.exports = {
    
    listNotes: listNotes,
    readNote: readNote,
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote

}