const Admin = require('models/Admin');

exports.checkName = async (ctx, res) => {
    const {
        name
    } = ctx.params;

    if (!name) {
        ctx.status = 400;
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
    const { username, password } = body;
    try{
        const exists = await Admin.findByUserName(username);
        if(exists){
            res.status(409).json({conflict:'username', username});
            return;
        }

        let admin = new Admin({username});
 
        admin = await Admin.register(
            admin,
            password
        );
        
        res.status(201).json({
            username,
            _id: admin._id
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({error: e});
    }
}

exports.login = async (req, res) => {
    const { body } = req;
    const { username, password } = body;
    try{
        const { user } = await Admin.authenticate()(username, password);
        
        if(user){
            req.session.user = user;
            res.status(200).json({
                success:true,
                user
            });
        } else{
            res.status(401).json({success:false});
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({error: e});
    }
}