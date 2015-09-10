/**
 * Created by yan on 15-9-10.
 */

var oneapm = require('oneapm');
var express = require('express');
var app = express();
var path = require('path');
var components = require(path.join(__dirname, 'public', 'components'));
var os = require('os');

var handler = function (req, res) {
    res.end('oks');
};

components.forEach(function (c) {
    app.get('/' + c, handler);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/brief', function (req, res) {

    var result = {};
    result.version = process.version;
    result.versions = process.versions;
    result.arch = process.arch;
    result.platform = process.platform;
    result.pid = process.pid;
    result.uptime = process.uptime();
    result.hostname = os.hostname();
    result.loadavg = os.loadavg();
    result.networkInterfaces = os.networkInterfaces();
    result.cpus = os.cpus();
    result.release = os.release();

    res.json(result);
});


app.listen(8888);