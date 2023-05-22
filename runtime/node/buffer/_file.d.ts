import type buffer from "node:buffer";
export declare class File extends Blob implements buffer.File {
    size: number;
    type: any;
    name: string;
    lastModified: number;
    constructor(...args: any[]);
    arrayBuffer(): Promise<ArrayBuffer>;
    slice(): any;
    text(): any;
    stream(): any;
}
