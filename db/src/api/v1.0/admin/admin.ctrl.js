const Admin = require('models/Admin');
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
        const account = await Admin.findByUserName(name);
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
            error.name = 'ValidationError';
            error.errors={
                msg: 'Password is too short',
            }
            throw error;
        }

        const exists = await Admin.findByUserName(username);
        if(exists){
            res.status(409).json({conflict:'username', username});
            return;
        }
        
        let admin = new Admin({username, role});
        admin.validateSync();
        admin = await Admin.register(
            admin,
            password
        );
        
        res.status(201).json({
            username,
            _id: admin._id
        });
    } catch (err) {
        if(err.name == 'ValidationError'){
            for (field in err.errors) {
                console.log(`Validation error : ${err.errors[field]}`)
            }
            res.status(400).json({error: err});
        }
        else{
            console.log(err);
            res.status(500).json({error: err});
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
        res.status(500).json({error: e});
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
        res.status(500).json({error: e});
    }
}