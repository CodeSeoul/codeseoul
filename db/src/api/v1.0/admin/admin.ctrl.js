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
        ctx.throw(e, 500);
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
        res.status(500).json({error: e});
    }
}