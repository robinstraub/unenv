declare const NodeBuiltinModules: string[];
declare function mapArrToVal(val: any, arr: any[]): any;

interface Environment {
    alias: {
        [key: string]: string;
    };
    inject: {
        [key: string]: string | string[];
    };
    polyfill: string[];
    external: string[];
}
interface Preset extends Partial<Environment> {
}

declare const _default: Preset;

declare const nodeless: Preset & {
    alias: Map<string, string>;
};

declare function env(...presets: Preset[]): Environment;

export { Environment, NodeBuiltinModules, Preset, env, mapArrToVal, _default as node, nodeless };
