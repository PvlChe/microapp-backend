const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    return User.find({}).then(data => {
        //res.status(200).json(data);
        console.log('test get data', data);
        if (!data || data.length === 0) {
            const error = new Error('User couldnt be found!');
            error.statusCode = 401;
            throw error;
        }
        res.status(200);
        res.locals.items = data;
        res.locals.processed = true;
        next();
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
    next();
};

exports.getUser = (req, res, next) => {
    console.log('test get item id');
    const id = req.params.id;
    return User.find({_id: id}).then(data => {
        //res.status(200).json(data);
        console.log('test get data', data);
        if (!data || data.length === 0) {
            const error = new Error('User couldnt be found!');
            error.statusCode = 401;
            throw error;
        }
        res.status(200);
        res.locals.items = data;
        res.locals.processed = true;
        next();
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
    next();
};
