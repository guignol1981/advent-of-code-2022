const imputConverter = require('../input-converter');

const solve = async (puzzle) => {
    const datastreamBuffer = await imputConverter(
        './input.txt',
        (x) => x,
        (x) => x[puzzle]
    );

    const START_OF_PACKET_MAKER_LENGTH = 4;
    let startOfPacketMarker = '';
    let cursor = -1;

    while (
        Array.from(new Set(startOfPacketMarker.split(''))).length !==
        START_OF_PACKET_MAKER_LENGTH
    ) {
        cursor++;
        startOfPacketMarker = datastreamBuffer.substring(
            cursor,
            cursor + START_OF_PACKET_MAKER_LENGTH
        );
    }

    console.log(cursor + START_OF_PACKET_MAKER_LENGTH);
};

solve(0);
