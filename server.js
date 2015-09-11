/**
 * Created by yan on 15-9-10.
 */

var oneapm = require('oneapm');
var redis = require('redis');

var redisOptions = {};

if (process.env.REDIS_PASSWORD) {
    redisOptions.auth_pass = REDIS_PASSWORD;
}

var client = redis.createClient(process.env.REDIS_PORT_6379_TCP_PORT, process.env.REDIS_PORT_6379_TCP_ADDR, redisOptions);
var express = require('express');
var app = express();
var path = require('path');
var components = require(path.join(__dirname, 'public', 'components'));
var os = require('os');

var handler = function (name) {
    return function (req, res) {
        client.incr(name, function (err, count) {
            if (err) {
                console.error(arguments);
                res.end();
            } else {
                res.json({
                    name: name,
                    count: count
                });
            }
        });
    };
};

components.forEach(function (c) {
    app.get('/' + c, handler(c));
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