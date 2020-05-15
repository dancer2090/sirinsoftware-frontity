"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports["default"] = (function (_a) {
    var target = _a.target;
    return (__assign({}, (target === "server"
        ? {
            maxEntrypointSize: 3000000,
            maxAssetSize: 3000000
        }
        : {
            maxEntrypointSize: 300000,
            maxAssetSize: 300000
        })));
});
