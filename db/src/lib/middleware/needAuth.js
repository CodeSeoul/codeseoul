module.exports = (req, res, next) => {
    const { user } = req.session;
    if(!user){
        return res.status(401).json({ error:'User not authenticated' });
    }
    return next();
}