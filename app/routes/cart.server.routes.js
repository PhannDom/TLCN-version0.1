module.exports = (app) => {
    var cart = require('../controllers/cart.server.controller');

    app.route('/cart')
        .get(cart.render)
        .post(cart.update)
};