const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors());
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());

// const authRouter = require('./auth');
// app.use('/auth', authRouter);

const homeRouter = require('./home'); 
app.use('/home', homeRouter);

app.listen(process.env.NODE_DOCKER_PORT || 3001, () => console.log("App avaiable on http://localhost:3001"))