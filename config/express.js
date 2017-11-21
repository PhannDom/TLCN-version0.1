var express = require('express'),
    config = require('./config'),
    ejs = require('ejs'),
    cors = require('cors'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
module.exports = () => {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors());
    app.set('views', './app/views');
    console.log(__dirname);
    app.use(express.static(__dirname + '/public'));
    app.set('view engine', 'ejs');
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(session({
        saveUninitialized: true,
        resave: false,
        cookie: {maxAge: 2592000000}, 
        secret: config.sessionSecret
        }));
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/product.server.routes.js')(app);
    require('../app/routes/productlist.server.routes.js')(app);
    require('../app/routes/cart.server.routes.js')(app);
    return app;
};