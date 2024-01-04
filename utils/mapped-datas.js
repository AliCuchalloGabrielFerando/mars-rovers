/**
limits = {
    limitX: 5,
    limitY: 5
}
rovers = [
    {
        positionInX: 1,
        positionInY: 2,
        Orientation: 'N',
        instructions: 'LMLMLMLMM'
    },
    {
        positionInX: 3,
        positionInY: 3,
        Orientation: 'E',
        instructions: 'MMRMMRMRRM'
    }
]

 * @param {string} datos los datos recibidos del req.body
 * @returns {object} compuesto por @limits y @rovers
 * @author Ali Cuchallo Gabriel Fernando
 * @created date 2023-01-03
 * @email gabrielfernandoali@gmail.com
 */
const mappedDatas = (datos) => {
    datos = datos.split('\n')

    let preLimits = datos[0].split(' ')
    const limits = {
        limitX: Number(preLimits[0]),
        limitY: Number(preLimits[1])
    }
    const rovers = [];
    datos.shift()

    for (let index = 0; index < datos.length; index += 2) {
        let positions = datos[index].split(' ')
        let rover = {
            positionInX: Number(positions[0]),
            positionInY: Number(positions[1]),
            Orientation: positions[2],
            instructions: datos[index + 1]
        };
        rovers.push(rover)
    }

    return { limits, rovers }
}

module.exports = {
    mappedDatas
}