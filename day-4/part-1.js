const imputConverter = require('../input-converter');

const isBetween = (x, min, max) => {
    return x >= min && x <= max;
};

const solve = async () => {
    const pairs = await imputConverter('./input.txt', (x) =>
        x.split(',').map((e) => e.split('-').map((e) => Number(e)))
    );

    const containsCount = pairs.reduce((acc, [elf1, elf2]) => {
        if (
            (isBetween(elf1[0], ...elf2) && isBetween(elf1[1], ...elf2)) ||
            (isBetween(elf2[0], ...elf1) && isBetween(elf2[1], ...elf1))
        ) {
            acc++;
        }

        return acc;
    }, 0);

    console.log(containsCount);
};

solve();
