const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')

require('dotenv').config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express()
app.use(express.json())
app.use(cors())

//register routes
app.use('/api/auth', authRoutes)

const server = http.createServer(app);


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        });
    })
    .catch(err => {
        console.log("Database connection faild")
        console.log(err)
    })