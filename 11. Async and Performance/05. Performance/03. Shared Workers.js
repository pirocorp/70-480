var w1 = new SharedWorker("http://some.url.1/mycoolworker.js");

w1.port.addEventListener("message", handleMessages);

// ..

w1.port.postMessage("something cool");

//Also, the port connection must be initialized, as:
w1.port.start();

// inside the shared Worker
addEventListener("connect", function (evt) {
    // the assigned port for this connection
    var port = evt.ports[0];

    port.addEventListener("message", function (evt) {
        // ..

        port.postMessage( ..);

        // ..
    });

    // initialize the port connection
    port.start();
});