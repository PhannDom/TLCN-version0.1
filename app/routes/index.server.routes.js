module.exports = (app) => {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};