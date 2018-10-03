const http = require('http');
const fs = require('fs');
const static = require('./module')


server = http.createServer(function (request, response) {
    static(request, response);
});

server.listen(8000);
console.log("Running in localhost at port 8000");