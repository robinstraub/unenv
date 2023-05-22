import type asyncHooks from "node:async_hooks";
export declare class AsyncLocalStorage<T> implements asyncHooks.AsyncLocalStorage<T> {
    _currentStore: undefined | T;
    _enterStore: undefined | T;
    _enabled: boolean;
    getStore(): T | undefined;
    disable(): void;
    enable(): void;
    enterWith(store: any): void;
    run<R, TArgs extends any[]>(store: any, callback: (...args: TArgs) => R, ...args: TArgs): R;
    exit<R, TArgs extends any[]>(callback: (...args: TArgs) => R, ...args: TArgs): R;
}
