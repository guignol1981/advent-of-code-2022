const imputConverter = require('../input-converter');

const solve = async () => {
    const LOST = 0;
    const DRAW = 3;
    const WIN = 6;

    const battleMap = new Map();
    battleMap.set('rock', { score: 1, beat: 'scissors' });
    battleMap.set('paper', { score: 2, beat: 'rock' });
    battleMap.set('scissors', { score: 3, beat: 'paper' });

    const rounds = await imputConverter(
        './input.txt',
        (x) => x.split(' '),
        (x) =>
            x.map((r) =>
                r.map((s) =>
                    ['A', 'X'].includes(s)
                        ? 'rock'
                        : ['B', 'Y'].includes(s)
                        ? 'paper'
                        : 'scissors'
                )
            )
    );

    const score = rounds.reduce((acc, [them, me]) => {
        acc += battleMap.get(me).score;

        if (battleMap.get(me).beat === them) {
            acc += WIN;
        } else if (them === me) {
            acc += DRAW;
        }

        return acc;
    }, 0);

    console.log(score);
};

solve();
