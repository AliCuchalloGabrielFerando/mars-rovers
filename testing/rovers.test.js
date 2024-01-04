const request = require("supertest");
const { app } = require("../server/app")

describe("------------ ROVERS TEST ----------", () => {
    describe("POST rovers operations", () => {
        test("debe responder con estado 200 y un output", async () => {
            const body =
                `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`
            const response = await request(app).post("/capturar-datos")
                .set('Content-Type', 'text/plain').send(body);
            console.log(response.text)
            expect(response.statusCode).toBe(200)
        })
    })
})