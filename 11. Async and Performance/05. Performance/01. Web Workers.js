//From your main JS program (or another Worker), you instantiate a Worker like so:
var w1 = new Worker("http://some.url.1/mycoolworker.js");

//The URL should point to the location of a JS file (not an HTML page!) 
//which is intended to be loaded into a Worker. The browser will then spin
//up a separate thread and let that file run as an independent program 
//in that thread.

//Workers do not share any scope or resources with each other or the main program
//but instead have a basic event messaging mechanism connecting them.

//Here's how to listen for events (actually, the fixed "message" event):
w1.addEventListener("message", function (evt) {
    // evt.data
});

//And you can send the "message" event to the Worker:
w1.postMessage("something cool to say");

//To kill a Worker immediately from the program that created it, call 
w1.terminate();

//Inside the Worker, the messaging is totally symmetrical:
//"mycoolworker.js"

addEventListener("message", function (evt) {
    // evt.data
});

postMessage("a really cool reply");