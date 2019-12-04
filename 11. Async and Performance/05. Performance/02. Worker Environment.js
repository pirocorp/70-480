// inside the Worker
importScripts("foo.js", "bar.js");

// `foo` is a `Uint8Array` for instance
postMessage(foo.buffer, [foo.buffer]);