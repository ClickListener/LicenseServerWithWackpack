/**
 * Created by zhangxu on 2017/6/30.
 */

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const userService = require('./router/userService');
const licenseService = require('./router/licenseService');

const bodyParser = require('body-parser');

const expressSession = require('express-session');

const passport = require('./authenticate/passport-config');

const cookieParser = require('cookie-parser');





const app = express();

const uri = 'mongodb://localhost/mongoose-server';
mongoose.connect(uri);

/**
 * Contains key-value pairs of data submitted in the request body. By default, it is undefined,
 * and is populated when you use body-parsing middleware such as body-parser and multer.
 */
app.use(bodyParser.json()); // for parsing application/json

app.use(cookieParser());


app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());




app.use(express.static('dist'))



app.use('/user',userService);
app.use('/license',licenseService);


const server = app.listen(3000,'0.0.0.0',() => {
    let host = server.address().address;
    const port = server.address().port;
    console.log('The server listening at http://%s:%s', host, port);
});