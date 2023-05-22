import type stream from "node:stream";
export { Readable } from "./readable";
export { Writable } from "./writable";
export { Duplex } from "./duplex";
export { Transform } from "./transform";
export declare const Stream: stream.Stream;
export declare const PassThrough: stream.PassThrough;
export declare const pipeline: typeof stream.pipeline;
export declare const finished: typeof stream.finished;
export declare const addAbortSignal: typeof stream.addAbortSignal;
export declare const isDisturbed: () => any;
export declare const isReadable: () => any;
export declare const compose: () => any;
export declare const isErrored: () => any;
export declare const destroy: () => any;
export declare const _isUint8Array: () => any;
export declare const _uint8ArrayToBuffer: () => any;
declare const _default: any;
export default _default;
