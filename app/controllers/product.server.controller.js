
var Product = require('mongoose').model('Product');
exports.render = (req, res) => {
    res.render('../views/product');
};
exports.create = (req, res) => {
    var product = new Product(req.body);
    product.save((err,product) => {
        if (err) {
            res.json({err:err.message});
        } else {
            res.json(product);
        }
    });
};
exports.list = (req, res, next) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.log('Could NOT listing product: ', err);
            return next(err);
        } else {
            res.json(products);
        }
    });
};
exports.checkname = (req,res, next) => {
    Product.findOne({ 'name': new RegExp('^'+req.body.name+'$', "i")}, function (err, product) {
        if (err)
            res.status(400).send({ message: err.message });
        if (product) {
            res.status(200).send({ message: 'Product is already exist' });
        } else {
            res.status(200).send({message: 'Product valid'})
        }
    });
} 
exports.listName = function listName(req,res,next){
    Product.find({ $text: {$search: req.body.name   }}, (err, products) => {
        if (err) {
            res.status(400).send({message:err.message})
            return next(err);
        } else {
            res.status(200).send(products);
            } 
    });
}
exports.listPrice = function listPrice(req,res,next){
    Product.find({price:{$gt:req.body.min,$lt:req.body.max}}, (err, products) => {
        if (err) {
            res.status(400).send({message:err.message})
            return next(err);
        } else {
            res.status(200).send(products);
            }        
    });
}