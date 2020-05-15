"use strict";
exports.__esModule = true;
var path_1 = require("path");
var rootPath = process.cwd();
exports["default"] = (function () { return ({
    // Automatically resolve extensions for js, jsx, ts and tsx files.
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // Alias the build folder to get access to it directly, without relying on were
    // the node_module folder is. Useful for things like import "build/client-stats.json".
    alias: {
        build: path_1.resolve(rootPath, "build"),
        // Force lodash to be the esModule version to support tree-shaking.
        lodash: "lodash-es",
        // Force ramda to be the esModule version to support tree-shaking.
        "ramda/src": "ramda/es",
        // Avoid dynamic imports with Koa require.
        "any-promise": "promise-monofill"
    }
}); });
