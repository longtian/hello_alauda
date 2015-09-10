/**
 * Created by yan on 15-9-10.
 */

(function () {

    var components = [
        'leg',
        'shoe',
        'glove',
        'arm',
        'mouth',
        'goggle-frame',
        'dungarees-pocket',
        'hair'
    ];

    if (typeof exports === 'object') {
        module.exports = components;

    } else if (typeof define === 'function' && define.amd) {
        define(components);

    } else {
        window.components = components;
    }

})()
