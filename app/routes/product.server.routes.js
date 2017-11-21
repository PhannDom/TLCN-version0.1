module.exports = (app) => {
    var product = require('../controllers/product.server.controller');

    app.route('/product')
        .get(product.list)
        .post(product.create);    
    app.route('/checkname')
    .post(product.checkname);
    app.route('/listname').post(product.listName);
    app.route('/listprice').post(product.listPrice);
};