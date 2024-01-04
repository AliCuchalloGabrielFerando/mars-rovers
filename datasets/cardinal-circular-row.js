
const { cardinals } = require("../datas/cardinals");


const getPositionCardinal = (cardinal) => {
    return cardinals.indexOf(cardinal);
}

const getPositionCardinalValue = (position) => {
    return cardinals[position];
}

const moveLeftCardinal = (position) => {
    if (position == 0) {
        return cardinals.length - 1;
    }

    return position - 1;
}

const moveRightCardinal = (position) => {
    if (position == cardinals.length - 1) {
        return 0;
    }

    return position + 1;
}

module.exports = {
    getPositionCardinal,
    getPositionCardinalValue,
    moveLeftCardinal,
    moveRightCardinal
}