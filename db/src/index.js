require('dotenv').config();
const express = require('express')
const app = express()
const mdb = require('./models');
const api = require('./api');

const { PORT } = process.env;
const port = PORT ? PORT : 4000;

mdb.connect();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
})

const router = express.Router();
router.use('/api', api);

app.use(router);

app.listen(port, () => {
    console.log(`server is running at port: ${port}`)
});