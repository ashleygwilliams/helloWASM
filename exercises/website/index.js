const js = import("./node_modules/hello-wasm-bcnrust/hello_wasm.js");
js.then(js => {
  const callWasm = function() {
    let name = window.prompt("Hello! What is your name?", "wasm");
    js.greet(name);
  }

  const button = document.getElementById("clickme");
  button.onclick = callWasm;

  callWasm();
});

