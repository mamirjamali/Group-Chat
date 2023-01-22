const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express()
app.use(express.json())
app.use(cors())

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});