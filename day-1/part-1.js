const imputConverter = require('../input-converter');

const solve = async () => {
    const input = await imputConverter(
        './input.txt',
        (x) => parseInt(x),
        (x) =>
            x.reduce((a, c) => {
                if (isNaN(c)) {
                    a.push([]);
                    return a;
                } else if (!a.length) a.push([]);

                a.at(-1).push(c);

                return a;
            }, [])
    );

    const sums = input.flatMap((e) => e.reduce((a, c) => (a += c)));
    console.log(Math.max(...sums));
};

solve();
