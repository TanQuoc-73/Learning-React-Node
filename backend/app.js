const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})