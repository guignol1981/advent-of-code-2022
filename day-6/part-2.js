const imputConverter = require('../input-converter');

const solve = async (puzzle) => {
    const datastreamBuffer = await imputConverter(
        './input.txt',
        (x) => x,
        (x) => x[puzzle]
    );

    const START_OF_MESSAGE_MARKER_LENGTH = 14;
    let startOfMessageMarker = '';
    let cursor = -1;

    while (
        Array.from(new Set(startOfMessageMarker.split(''))).length !==
        START_OF_MESSAGE_MARKER_LENGTH
    ) {
        cursor++;
        startOfMessageMarker = datastreamBuffer.substring(
            cursor,
            cursor + START_OF_MESSAGE_MARKER_LENGTH
        );
    }

    console.log(cursor + START_OF_MESSAGE_MARKER_LENGTH);
};

solve(0);
