const imputConverter = require('../input-converter');

const letterToPriority = (letter) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.concat(alphabet.toUpperCase()).indexOf(letter) + 1;
};

const GROUP_SIZE = 3;

const solve = async () => {
    const input = await imputConverter('./input.txt', (x) => x.split(''));

    let groups = [];

    for (let index = 0; index < input.length / GROUP_SIZE; index++) {
        groups.push(
            input.slice(index * GROUP_SIZE, index * GROUP_SIZE + GROUP_SIZE)
        );
    }

    const badges = groups.map((g) => {
        return g[0].find((e) => g[1].includes(e) && g[2].includes(e));
    });
\
    const badgesSum = badges.reduce(
        (acc, cur) => (acc += letterToPriority(cur)),
        0
    );

    console.log(badgesSum);
};

solve();
