module.exports = (req, res, next) => {
    const { user } = req;
    if(!user){
        return res.status(401).json({ error:'User is not authenticated' });
    }
    return next();
}