// Exists only so babel-jest can transpile the ESM-only dependencies that jest
// cannot require - @puppeteer/browsers 3.x and puppeteer. Nothing in lib/ is
// affected at runtime; this is a test-time transform only.
//
// sourceType matters here. The default ("module") would treat the CommonJS
// test files as ES modules too, which puts them in strict mode and makes
// top-level `this` undefined - and these tests hang state off `this` in
// beforeEach (`this.onSuccess = jest.fn()`), so they fail with
// "Cannot set properties of undefined". "unambiguous" asks babel to decide per
// file: anything using import/export is a module, everything else stays a
// script and keeps CommonJS `this` semantics.
module.exports = {
  sourceType: 'unambiguous',
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
};
