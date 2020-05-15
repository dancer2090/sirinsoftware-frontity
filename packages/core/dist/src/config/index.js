"use strict";
exports.__esModule = true;
var babel_1 = require("./babel");
var webpack_1 = require("./webpack");
var frontity_1 = require("./frontity");
// This returns our FrontityConfig defaults. In the future,
// we will add here logic to inject the frontity.config.js of each package.
exports["default"] = (function (_a) {
    var mode = _a.mode, entryPoints = _a.entryPoints;
    var frontity = frontity_1["default"]();
    var babel = babel_1["default"]({ mode: mode });
    var webpack = webpack_1["default"]({ mode: mode, babel: babel, frontity: frontity, entryPoints: entryPoints });
    return {
        babel: babel,
        webpack: webpack,
        frontity: frontity
    };
});
