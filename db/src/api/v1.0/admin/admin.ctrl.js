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
        const account = await Admin.findByName(name);
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
    const { name } = body;

    try{
        const exists = await Admin.findByName(name);
        if(exists){
            res.status(409).json({conflict:'name', name});
            return;
        }

        const admin = await Admin.register({
            name
        });

        res.status(201).json({
            name,
            _id: admin._id
        });
    } catch (e) {
        res.status(500).json({error: e});
    }
}