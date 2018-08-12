const express = require('express')
const app = express()
const mdb = require('./models');
const api = require('./api');
const passport = require('passport');
const Admin = require('models/Admin');

passport.use(Admin.createStrategy());

let config = require('config'); //we load the db location from the JSON files

const { PORT } = config;
const port = PORT ? PORT : 4000;

app.use(express.json());
app.use(passport.initialize());


app.get('/', (req, res) => {
    res.send('hello world');
})

const router = express.Router();
router.use('/api', api);

app.use(router);

mdb.connect();
app.listen(port, () => {
    console.log(`server is running at port: ${port}`)
}); app.listen(port, () => {
        console.log(`server is running at port: ${port}`)
    });
}

module.exports = app;