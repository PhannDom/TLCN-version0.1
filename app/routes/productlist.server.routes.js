    module.exports = (app) => {
    var productlist = require('../controllers/productlist.server.controller');

    app.route('/productlist')
        .get(productlist.render)
        .post(productlist.getproduct);
    
};