exports.render = (req, res) => {
    var Product = require('mongoose').model('Product');
    var search="", min='',max='';
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    search=req.query.name;
    min=req.query.min;
    max=req.query.max;
    var type=req.query.type;
    function listAll()
    {
        Product.find({}, (err, products) => {
            if (err) {
                console.log('Could NOT listing product: ', err);
                return next(err);
            } else {
                res.render('../views/productlist', {
                    data: products
                }
                )
            }
        })
    }
    function listName(){
        Product.find({name:new RegExp('^'+search+'$', "i")}, (err, products) => {
            if (err) {
                console.log('Could NOT listing product: ', err);
                return next(err);
            } else {
                res.render('../views/productlist', {
                    data: products
                }
                )
            }
        });
    }
    function listPrice(){
        Product.find({price:{$gt:min,$lt:max}}, (err, products) => {
            if (err) {
                console.log('Could NOT listing product: ', err);
                return next(err);
            } else {
                res.render('../views/productlist', {
                    data: products
                }
                )
            }
        });
    }

    switch (type){
        case '':
            listAll();
            break;
        case 'name':
            if (search!=='') listName(); else listAll();
            break;
        default:
            listAll();
            break;
        case 'price':
            if (min==='') min=Number.MIN_VALUE;
            if (max==='') max=Number.MAX_VALUE;
            listPrice();
    }
}
exports.getproduct = (req, res) => {
    req.session.product = req.body.product;
    return res.redirect('/cart');
}