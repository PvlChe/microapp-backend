const Item = require('../models/item');

exports.getItems = (req, res, next) => {
    return Item.find({}).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('Item couldnt be found!');
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

exports.getItem = (req, res, next) => {
    const id = req.params.id;
    return Item.find({_id: id}).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('Item couldnt be found!');
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

exports.updateItem = (req, res, next) => {
    const id = req.params.id;
    return Item.findOneAndUpdate({_id: id}, {amount: req.body.amount}).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('Item couldnt be found!');
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

