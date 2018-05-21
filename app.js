console.log("starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log(notes.add(3, 5));

// newFunction();
// function newFunction() {
//     var res = notes.addNote();
//     console.log(res);
// }

// var user = os.userInfo();
// var userName = user.username;

// console.log(user);

// fs.appendFile("greetings.txt", `\n Hellow there, ${userName}!. You are ${notes.age} old.`, err => {
//     if (err) throw err;
//     console.log("data was appended to file");
// });