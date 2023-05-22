import { executionAsyncId } from "./_async-hook.mjs";
let _asyncIdCounter = 100;
export class AsyncResource {
  constructor(type, triggerAsyncId = executionAsyncId()) {
    this.type = type;
    this._asyncId = -1 * _asyncIdCounter++;
    this._triggerAsyncId = typeof triggerAsyncId === "number" ? triggerAsyncId : triggerAsyncId?.triggerAsyncId;
  }
  static bind(fn, type, thisArg) {
    const resource = new AsyncResource(type ?? "anonymous");
    return resource.bind(fn, thisArg);
  }
  bind(fn, thisArg) {
    const binded = (...args) => this.runInAsyncScope(fn, thisArg, ...args);
    binded.asyncResource = this;
    return binded;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    const result = fn.apply(thisArg, args);
    return result;
  }
  emitDestroy() {
    return this;
  }
  asyncId() {
    return this._asyncId;
  }
  triggerAsyncId() {
    return this._triggerAsyncId;
  }
}
