/// <reference types="express-serve-static-core" />
import { MultiCompiler } from "webpack";
import express from "express";
import { Mode } from "../../../types";
declare const _default: ({ mode, port, isHttps, target, openBrowser, }: {
    mode: Mode;
    port: number;
    isHttps: boolean;
    target: "es5" | "module";
    openBrowser?: boolean;
}) => Promise<{
    app: any;
    done: (compiler: MultiCompiler) => void;
}>;
export default _default;
