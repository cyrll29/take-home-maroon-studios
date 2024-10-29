// Initialize server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Connect to server
app.listen(port, () => console.log(`Listening to port ${port}`));

//Initailize SwaggerUI
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: 'Maroon Studios Take-home Assignment',
            version: '1.0.0',
            description: 'An API endpoint with a POST method having two parameters'
        },
        servers: [
            {
                url: `http://localhost:${port}`
            },
        ]
    },
    apis: ['server.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
console.log(swaggerDocs)

// '/calculate-change' POST endpoint and Swagger documentation

/**
 * @swagger
 * /calculate-change:
 *  post:
 *      summary: calculate-change endpoint
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          bill:
 *                              type: integer
 *                              desccription: Bill given
 *                              example: 1000
 *                          owed:
 *                              type: integer
 *                              description: Amount owed
 *                              example: 458
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          status:
 *                              type: integer
 *                          message:
 *                              type: string
 *                          data:
 *                              type: object
 */
app.post('/calculate-change', (req, res) => {
    console.log("The /calculate-change endpoint is called")

    const currency = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
    let change = parseInt(req.body.bill) - parseInt(req.body.owed);
    let result = {};

    for (let i = 0; i < currency.length; i++) {
        let curr = currency[i];
        let count = Math.floor(change / curr);
        
        // If there is a count in current currency, subtract that amount to the change and set currency denomination
        if (count > 0) {
            result[curr] = count;
            change = (change - count * curr).toFixed(2) // To avoid int and float issues
        }
    }

    // If bill and owed is an invalid input, send an error
    if (isNaN(req.body.bill) || isNaN(req.body.owed)) {
        return res.status(400).json({ "status": 400, "message": "Invalid Input or Number" });
    }

    // Response
    res.status(200).json({
        "status": 200,
        "message": "Fetching is Successful",
        "data": {
            "change": result
        }
    })
})