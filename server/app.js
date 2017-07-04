/**
 * Created by zhangxu on 2017/6/30.
 */

const express = require('express');
const path = require('path');
const mongodb = require('mongodb');



const app = express();

app.use(express.static('public'));


const server = app.listen(3000,'0.0.0.0',() => {
    let host = server.address().address;
    const port = server.address().port;
    console.log('The server listening at http://%s:%s', host, port);
})