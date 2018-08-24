const User = require('models/User');
const passport = require('passport');

exports.checkName = async (req, res) => {
    const {
        name
    } = req.params;

    if (!name) {
        req.status = 400;
        return;
    }

    try {
        const account = await User.findByUserName(name);
        res.send({
            exists: !!account
        });
        return;
    } catch (e) {
        console.log(e);
        res.status(500, e).json(e);
    }
};

exports.register = async (req, res) => {
    const { body } = req;
    const { username, password, role } = body;
    try{
        let error = {};
        if(password.length < 8){
            error.status = 400;
            error.name = 'ValidationError';
            error.errors={
                msg: 'Password is too short',
            }
            throw error;
        }

        const exists = await User.findByUserName(username);
        if(exists){
            error.status = 409;
            error.name = 'ConflictError';
            error.errors={
                msg: 'username conflicts',
            }
            throw error;
        }
        
        let user = new User({username, role});
        user.validateSync();
        user = await User.register(
            user,
            password
        );
        
        res.status(201).json({
            username,
            _id: user._id
        });
    } catch (err) {
        if(err.name == 'ValidationError'){
            for (field in err.errors) {
                console.log(`Validation : ${err.errors[field]}`)
            }
            res.status(400).json({err});
        }
        if(err.name == 'ConflictError'){
            for (field in err.errors) {
                console.log(`ConflictError : ${err.errors[field]}`)
            }
            res.status(409).json({err});
        }
        else{
            console.log(err);
            res.status(err.status || 500).json({err});
        }
    }
}

exports.login = async (req, res) => {
    try{
        req.session.save((err)=>{
            if(err) throw(err);
            res.status(200).send('OK');
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({e});
    }
}

exports.logout = async (req, res, next) => {
    req.logout();
    return res.redirect('/');
}

exports.myInfo = async (req, res) => {
    try {
        const { user } = req;
        res.status(200).json({user});
    } catch(e){
        console.log(e);
        res.status(500).json({e});
    }
}