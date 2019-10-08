const Item = require('../models/item');

exports.getItems = (req, res, next) => {
    return Item.find({}).then(data => {
        //res.status(200).json(data);
        console.log('test get data', data);
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
    console.log('test get item id');
    const id = req.params.id;
    return Item.find({_id: id}).then(data => {
        //res.status(200).json(data);
        console.log('test get data', data);
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
    console.log('test get item id');
    const id = req.params.id;
    return Item.findOneAndUpdate({_id: id}, function (err, item) {
        item.amount = item.amount - req.body.amount;
        doc.save();
    }).then(data => {
        //res.status(200).json(data);
        console.log('test get data', data);
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
