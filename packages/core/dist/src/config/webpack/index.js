"use strict";
exports.__esModule = true;
var name_1 = require("./name");
var targets_1 = require("./targets");
var devtool_1 = require("./devtool");
var entry_1 = require("./entry");
var output_1 = require("./output");
var modules_1 = require("./modules");
var resolve_1 = require("./resolve");
var externals_1 = require("./externals");
var plugins_1 = require("./plugins");
var performance_1 = require("./performance");
exports["default"] = (function (_a) {
    var mode = _a.mode, babel = _a.babel, frontity = _a.frontity, entryPoints = _a.entryPoints;
    var getConfig = function (target) { return ({
        mode: mode,
        name: name_1["default"]({ target: target }),
        target: targets_1["default"]({ target: target }),
        devtool: devtool_1["default"]({ mode: mode }),
        entry: entry_1["default"]({ target: target, mode: mode, entryPoints: entryPoints }),
        output: output_1["default"]({ target: target, mode: mode, outDir: frontity.outDir }),
        module: modules_1["default"]({ target: target, babel: babel, mode: mode }),
        resolve: resolve_1["default"](),
        externals: externals_1["default"]({ target: target }),
        plugins: plugins_1["default"]({ target: target, mode: mode, outDir: frontity.outDir }),
        performance: performance_1["default"]({ target: target })
    }); };
    return {
        module: getConfig("module"),
        es5: getConfig("es5"),
        server: getConfig("server")
    };
});
