/**
 * Created by yan on 15-9-10.
 */

try {
    require('oneapm');
} catch (e) {

}

var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8888);