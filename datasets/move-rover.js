const { cardinals } = require("../datas/cardinals")

const moveRover = (positionInX, positionInY, Orientation) => {
    switch (Orientation) {
        case cardinals[0]: // N
            positionInY = positionInY + 1;
            break;
        case cardinals[1]: // E
            positionInX = positionInX + 1;
            break;
        case cardinals[2]: // S
            positionInY = positionInY - 1;
            break;
        case cardinals[3]: // W
            positionInX = positionInX - 1;
            break;
    }

    return { positionInX, positionInY };
}

const getInstruction = (instructions) => {
    return instructions.substr(0, 1);
}

const removeInstruction = (instructions) => {
    return instructions.slice(1)
}

const validateMoveInstruction = ({ positionInX, positionInY, limitX, limitY }) => {
    return (positionInX >= 0 && positionInX <= limitX) && (positionInY >= 0 && positionInY <= limitY);
}

module.exports = {
    moveRover,
    getInstruction,
    removeInstruction,
    validateMoveInstruction
}