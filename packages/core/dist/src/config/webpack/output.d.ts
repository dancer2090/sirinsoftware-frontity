import { Configuration } from "webpack";
import { Target, Mode } from "../../../types";
declare const _default: ({ target, mode, outDir, }: {
    target: Target;
    mode: Mode;
    outDir: string;
}) => Configuration["output"];
export default _default;
