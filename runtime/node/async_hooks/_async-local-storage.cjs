"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncLocalStorage = void 0;
class AsyncLocalStorage {
  constructor() {
    this._enabled = true;
  }
  getStore() {
    return this._currentStore ?? this._enterStore;
  }
  disable() {
    this._enabled = false;
  }
  enable() {
    this._enabled = true;
  }
  enterWith(store) {
    this._enterStore = store;
  }
  run(store, callback, ...args) {
    this._currentStore = store;
    const res = callback(...args);
    this._currentStore = void 0;
    return res;
  }
  exit(callback, ...args) {
    const _previousStore = this._currentStore;
    this._currentStore = void 0;
    const res = callback(...args);
    this._currentStore = _previousStore;
    return res;
  }
}
exports.AsyncLocalStorage = AsyncLocalStorage;