"use strict";
exports.__esModule = true;
// Remove some characters present in the npm package name to
// turn it into a variable name.
exports["default"] = (function (pkg, mode) {
    return (pkg
        .replace(/^@/, "")
        .replace(/-/g, "_")
        .replace(/\//g, "__")
        .replace(/\./g, "___") + ("_" + mode));
});
