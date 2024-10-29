const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Connect to server
app.listen(port, () => console.log(`Listening to port ${port}`));

// '/calculate-change' POST endpoint
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