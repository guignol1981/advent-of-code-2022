const imputConverter = require('../input-converter');

const solve = async () => {
    const [crates, instructions] = await imputConverter(
        './input.txt',
        (x) => x.split(''),
        (x) => {
            const cratesRows = x.filter((e) => e.includes('['));

            const cratesStackRow = x
                .find((e) => !e.includes('['))
                .map((e) => parseInt(e));

            const crates = cratesRows.reduce((acc, cur) => {
                while (true) {
                    const crateIndex = cur.findIndex((e, i) =>
                        e.match(/[A-Z]/)
                    );

                    if (crateIndex === -1) break;

                    const crateStack = cratesStackRow[crateIndex];

                    acc[crateStack] = acc[crateStack] || [];
                    acc[crateStack].push(cur[crateIndex]);

                    cur.splice(crateIndex, 1, 'treated');
                }
                return acc;
            }, {});

            const instructions = x
                .filter((e) => e[0] === 'm')
                .map((e) => e.join(''))
                .map((e) =>
                    e
                        .split(' ')
                        .map((e) => parseInt(e))
                        .filter((e) => !isNaN(e))
                );

            return [crates, instructions];
        }
    );

    instructions.forEach(([count, fromStack, toStack]) => {
        const payload = crates[fromStack].splice(0, count);

        crates[toStack].splice(0, 0, ...payload.reverse());
    });

    const topCrates = Object.keys(crates).reduce(
        (acc, cur) => (acc += crates[cur][0]),
        ''
    );

    console.log(topCrates);
};

solve();
