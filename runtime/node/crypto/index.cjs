"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subtle = exports.randomUUID = exports.randomBytes = exports.getRandomValues = exports.default = void 0;
var _buffer = require("../buffer/index.cjs");
const MAX_BYTES = 65536;
const webcrypto = globalThis.crypto;
const subtle = webcrypto.subtle;
exports.subtle = subtle;
const randomUUID = () => {
  return webcrypto.randomUUID();
};
exports.randomUUID = randomUUID;
const getRandomValues = array => {
  return webcrypto.getRandomValues(array);
};
exports.getRandomValues = getRandomValues;
const randomBytes = (size, cb) => {
  const bytes = _buffer.Buffer.allocUnsafe(size);
  for (let generated = 0; generated < size; generated += MAX_BYTES) {
    getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
  }
  if (typeof cb === "function") {
    return process.nextTick(function () {
      cb(null, bytes);
    });
  }
  return bytes;
};
exports.randomBytes = randomBytes;
var _default = {
  randomUUID,
  getRandomValues,
  randomBytes,
  subtle,
  webcrypto
};
module.exports = _default;