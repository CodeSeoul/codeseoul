const express = require('express')
const app = express()
const mdb = require('./models');
const api = require('./api');
const passport = require('passport');
const Admin = require('models/Admin');
const session = require('express-session');

let config = require('config');

const { PORT } = config;
const port = PORT ? PORT : 4000;

app.use(express.json());
app.use(session({
    secret: config.HASH_SECRET_KEY, 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: false } 
}));
app.use(passport.initialize());

passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('hello world');
})

const router = express.Router();
router.use('/api', api);

app.use(router);

mdb.connect();

if(process.env.NODE_ENV != 'test'){
    app.listen(port, () => {
        console.log(`server is running at port: ${port}`)
    });
}

module.exports = app;