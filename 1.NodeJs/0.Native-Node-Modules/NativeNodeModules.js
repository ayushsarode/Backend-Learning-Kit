// 1: Native Node Modules 

//FILE SYSTEM
// `fs` module 


// const fs = require("fs")

// fs.writeFile("message.txt", "Hello from nodejs", (err) => {
//     if (err) throw ("Corrupt");
//     console.log("The file has been saved");
// });


const file = require('fs');

// Intentionally providing an invalid file path to trigger an error
// file.writeFile("invalid/message.css", "Hello from Node.js", (errrrr) => {
//     if (errrrr) {
//         console.error("Error occurred:", errrrr + 9707);
//         // You might want to handle the error in a more graceful way in a real-world scenario.
//     } else {
//         console.log("The file has been saved");
//     }
// });


// read file

const fs = require('fs');

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})

//output : <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 6e 6f 64 65 6a 73>
// if no encoding is specified, then the raw buffer is returned
// to solve this use "utf8" a second parameter