"use strict";
exports.__esModule = true;
exports.webpackAsync = void 0;
var webpack_1 = require("webpack");
// This is the same as running webpack() but async.
exports.webpackAsync = function (config) {
    return new Promise(function (resolve, reject) {
        var compiler = webpack_1["default"](config);
        compiler.run(function (err) {
            if (err)
                reject(err);
            else
                resolve(compiler);
        });
    });
};
