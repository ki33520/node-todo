var app = require("./server/bootstrap");
var listenPort = process.env.LISTEN_PORT || 8000;
app.listen(listenPort, function() {
    console.log("server listening at %d", listenPort);
});