const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Connect to server
app.listen(port, () => console.log(`Listening to port ${port}`));