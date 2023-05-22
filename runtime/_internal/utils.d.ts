import type { HeadersObject } from "./types";
export declare function rawHeaders(headers: HeadersObject): never[];
type Fn = (...args: any[]) => any;
export declare function mergeFns(...functions: Fn[]): (...args: any[]) => void;
export declare function notImplemented(name: string): () => any;
export {};
