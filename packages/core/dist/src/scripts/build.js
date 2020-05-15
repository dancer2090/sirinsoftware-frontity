"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("./utils/envs");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var file_settings_1 = require("@frontity/file-settings");
var entry_points_1 = require("./utils/entry-points");
var config_1 = require("../config");
var frontity_1 = require("../config/frontity");
var clean_build_folders_1 = require("./utils/clean-build-folders");
var webpack_1 = require("./utils/webpack");
exports["default"] = (function (_a) {
    var mode = _a.mode, target = _a.target;
    return __awaiter(void 0, void 0, void 0, function () {
        var frontityConfig, outDir, sites, entryPoints, config;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("mode: " + mode + "\n");
                    frontityConfig = frontity_1["default"]();
                    outDir = frontityConfig.outDir;
                    // Create the directories if they don't exist. Clean them if they do.
                    return [4 /*yield*/, clean_build_folders_1["default"]({ outDir: outDir })];
                case 1:
                    // Create the directories if they don't exist. Clean them if they do.
                    _b.sent();
                    return [4 /*yield*/, file_settings_1.getAllSites()];
                case 2:
                    sites = _b.sent();
                    return [4 /*yield*/, entry_points_1["default"]({ sites: sites, outDir: outDir, mode: mode })];
                case 3:
                    entryPoints = _b.sent();
                    config = config_1["default"]({ mode: mode, entryPoints: entryPoints });
                    if (!(target !== "module")) return [3 /*break*/, 5];
                    console.log("Building es5 bundle");
                    return [4 /*yield*/, webpack_1.webpackAsync(config.webpack.es5)];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    if (!(target !== "es5")) return [3 /*break*/, 7];
                    console.log("Building module bundle");
                    return [4 /*yield*/, webpack_1.webpackAsync(config.webpack.module)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    console.log("Building server bundle");
                    return [4 /*yield*/, webpack_1.webpackAsync(config.webpack.server)];
                case 8:
                    _b.sent();
                    console.log();
                    if (!(mode === "production")) return [3 /*break*/, 10];
                    return [4 /*yield*/, fs_extra_1.remove(path_1.join(outDir, "bundling"))];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
});
