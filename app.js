var util = require('util'),
    path = require('path'),
    i18n=require("i18n-express"),
    express = require('express'),
    partials = require('express-partials'),
    app = express(),

    port = 16000;

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.cookieParser());
app.use(express.session({secret: '123456789abcdefg'}));
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '/public')));

app.use(i18n({
    translationsPath: path.join(__dirname, 'translations'),
    siteLangs: ["zh-tw", "zh-cn", "zh-hk", "en"]
}));

// development only
if ('development' === app.get('env')) {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
}

app.get('/', function(req, res){res.render('index')});
app.get('/api-open', function(req, res){res.render('api-open')});
app.get('/api-verification', function(req, res){res.render('api-verification')});
app.get('/must-read', function(req, res){res.render('must-read')});
//web api
app.get('/webapi-init', function(req, res){res.render('webapi-init')});
app.get('/webapi-user', function(req, res){res.render('webapi-user')});
app.get('/webapi-pay', function(req, res){res.render('webapi-pay')});
app.get('/webapi-analytics', function(req, res){res.render('webapi-analytics')});
//java
app.get('/java-init', function(req, res){res.render('java-init')});
app.get('/java-user', function(req, res){res.render('java-user')});
app.get('/java-pay', function(req, res){res.render('java-pay')});
app.get('/java-analytics', function(req, res){res.render('java-analytics')});
//swift
app.get('/swift-init', function(req, res){res.render('swift-init')});
app.get('/swift-user', function(req, res){res.render('swift-user')});
app.get('/swift-pay', function(req, res){res.render('swift-pay')});
app.get('/swift-analytics', function(req, res){res.render('swift-analytics')});

app.listen(port);
console.log('Express server listening on port ' + port);