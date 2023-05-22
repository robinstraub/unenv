import { Buffer } from "../buffer/index.mjs";
const MAX_BYTES = 65536;
const webcrypto = globalThis.crypto;
export const subtle = webcrypto.subtle;
export const randomUUID = () => {
  return webcrypto.randomUUID();
};
export const getRandomValues = (array) => {
  return webcrypto.getRandomValues(array);
};
export const randomBytes = (size, cb) => {
  const bytes = Buffer.allocUnsafe(size);
  for (let generated = 0; generated < size; generated += MAX_BYTES) {
    getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
  }
  if (typeof cb === "function") {
    return process.nextTick(function() {
      cb(null, bytes);
    });
  }
  return bytes;
};
export default {
  randomUUID,
  getRandomValues,
  randomBytes,
  subtle,
  webcrypto
};
