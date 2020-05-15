import "./utils/envs";
import { Mode } from "../../types";
declare const _default: ({ isHttps, mode, port, target, openBrowser, }: {
    port: number;
    isHttps: boolean;
    mode: Mode;
    target: "es5" | "module";
    openBrowser?: boolean;
}) => Promise<void>;
export default _default;
