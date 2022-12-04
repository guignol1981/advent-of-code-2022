const imputConverter = require('../input-converter');

const getPriority = (letter) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    return alphabet.concat(alphabet.toUpperCase()).indexOf(letter) + 1;
};

const solve = async () => {
    const input = await imputConverter('./input.txt', (x) => x.split(''));

    const splited = input.map((line) => [
        line.slice(0, line.length / 2),
        line.slice(line.length / 2),
    ]);

    let shared = splited.map((e) => e[0].find((c) => e[1].includes(c)));

    const prioritiesSum = shared.reduce(
        (acc, cur) => (acc += getPriority(cur)),
        0
    );

    console.log(prioritiesSum);
};

solve();
