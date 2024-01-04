const { getPositionCardinal, getPositionCardinalValue, moveLeftCardinal, moveRightCardinal } = require("../datasets/cardinal-circular-row");
const { moveRover, getInstruction, removeInstruction, validateMoveInstruction } = require("../datasets/move-rover")

/**
 * 
 * @param {object} limits los rovers solo pueden operar dentro de los limites
 * @param {array} rovers todos los rovers que van a realizar operaciones
 * @returns rovers con operaciones terminadas
 * @author Ali Cuchallo Gabriel Fernando
 * @created date 2023-01-03
 * @email gabrielfernandoali@gmail.com
 */
const roversOperations = (limits, rovers) => {

    const roversOperationsFinish = rovers.map((rover, index) => {
        while (rover.instructions.length >= 1) {

            const instruction = getInstruction(rover.instructions);
            rover.instructions = removeInstruction(rover.instructions);

            //move rover or change orientation
            if (instruction == 'M') {
                let newPositions = moveRover(rover.positionInX, rover.positionInY, rover.Orientation);

                if (validateMoveInstruction({ ...newPositions, ...limits })) {
                    rover.positionInX = newPositions.positionInX;
                    rover.positionInY = newPositions.positionInY;
                } else {
                    console.log(`the rover ${index + 1} cannot execute the operation:
                        (${newPositions.positionInX}, ${newPositions.positionInY},${rover.Orientation})`)
                }
            } else {
                let positionOrientation = getPositionCardinal(rover.Orientation);

                if (instruction == 'L') {
                    positionOrientation = moveLeftCardinal(positionOrientation);
                } else {
                    positionOrientation = moveRightCardinal(positionOrientation);
                }

                rover.Orientation = getPositionCardinalValue(positionOrientation);
            }
        }
        return rover;
    });
    return roversOperationsFinish;
}

module.exports = {
    roversOperations
}