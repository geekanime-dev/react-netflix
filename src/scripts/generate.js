const readline = require("readline");
const fs = require('fs');
const generateContainer = require('./generateContainer');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the name of your Container? ", function(name) {
    if(fs.existsSync(`src/containers/${name}`)){
        throw new Error("Container Already Exists")
    } else {
        rl.question("Styled Container? (Y/N)", function(withStyle) {
            if(withStyle.toUpperCase() === 'Y' || withStyle.toUpperCase() === 'N') {
                rl.question("With Saga Container? (Y/N)", function(withSaga) {
                    generateContainer(name, withSaga, withStyle)
                });
            } else {
                throw new Error("User Input Not Valid")
            }
        });
    }
});