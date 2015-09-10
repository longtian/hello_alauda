/**
 * Created by yan on 15-9-10.
 */

var oneapm = require('oneapm');
var express = require('express');
var app = express();
var path = require('path');
var components = require(path.join(__dirname, 'public', 'components'));

var handler = function (req, res) {
    res.end('oks');
};
components.forEach(function (c) {
    app.get('/' + c, handler);
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8888);