const path = require('path');
const fs = require('fs');
const readline = require('readline');

const imputConverter = (inputPath, lineFn = (x) => x, inputFn = (x) => x) => {
    return new Promise((res) => {
        const readlineInterface = readline.createInterface({
            input: fs.createReadStream(path.join(inputPath), {
                encoding: 'utf-8',
            }),
        });

        const input = [];

        readlineInterface
            .on('line', (line) => {
                input.push(lineFn(line));
            })
            .on('close', () => {
                res(inputFn(input));
            });
    });
};

module.exports = imputConverter;
