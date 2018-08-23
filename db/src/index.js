const express = require('express')
const app = express()
const mdb = require('./models');
const api = require('./api');
const passport = require('passport');
const User = require('models/User');
const session = require('express-session');
const cookieParser = require('cookie-parser');

let config = require('config');

const { PORT } = config;
const port = PORT ? PORT : 4000;

app.use(express.json());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: config.HASH_SECRET_KEY, 
    resave: false, 
    saveUninitialized: false, 
    cookie: { secure: false } 
}));
app.use(cookieParser());
app.use(passport.initialize());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.session());

if(config.ENV == 'development'){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-timebase, Link');
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
        res.header('Access-Control-Expose-Headers', 'Link');
        next();
    });
}
  
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