const js = import("./node_modules/@ag_dubs/hello_wasm/hello_wasm.js");
js.then(js => {
  js.greet("wasm");
});
