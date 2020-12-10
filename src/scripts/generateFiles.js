const fs = require('fs');
const chalk = require('chalk');
const filesInConstants = require('./constants')

module.exports = (name, filesToGenerate, withStyle) => {
    const promisesArray = [];
    const writeWrite = (fileName) => {
        const promiseToPush = new Promise((resolve,reject) => {
            fs.writeFile(`src/containers/${name}/${fileName}.js`, filesInConstants(name, withStyle)[fileName], writeFileError => {
                if (writeFileError) {
                    reject(writeFileError);
                    return;
                }
                resolve(`${fileName}.js created successfully`)
            });
        });
        promisesArray.push(promiseToPush)
    }
    const printOutput = (filesCreated) => {
        return new Promise((resolve,reject) => {
            filesCreated.map((message) => {
                console.log(chalk.green(message))
            });
            resolve('Container Successfully Created!')
        })
    }

    fs.mkdir(`src/containers/${name}`, (err) => {
        if (err) throw err;
        else {
            filesToGenerate.map((data) => {
                writeWrite(data)
            });
            Promise.all(promisesArray).then((messages) => {
                printOutput(messages).then((finalMessage) => {
                    console.log(chalk.cyan(finalMessage))
                    process.exit(0)
                });
            }).catch((message) => {
                console.log(message)
            })
        }
    });
}
