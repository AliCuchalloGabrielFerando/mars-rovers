const express = require("express");
const bodyParser = require('body-parser');
const { mappedDatas } = require("../utils/mapped-datas");
const { roversOperations } = require("../rover_operations/operations")
const app = express();

app.use(bodyParser.text());

app.post('/capturar-datos', (req, res) => {
    let { limits, rovers } = mappedDatas(req.body);
    rovers = roversOperations(limits, rovers);
    let result = "OUTPUT: "

    rovers.forEach((rover, index) => {
        let roverOuput = `Rover ${index + 1}, x:${rover.positionInX}, y:${rover.positionInY}, ${rover.Orientation}`
        result = result.concat("\n", roverOuput)
    })
    res.send(result);
});

module.exports = {
    app
}

