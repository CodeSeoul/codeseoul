require('dotenv').config();
const express = require('express')
const app = express()

const { PORT } = process.env;
const port = PORT ? PORT : 4000;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
});