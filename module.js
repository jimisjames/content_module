const http = require('http');
const fs = require('fs');

module.exports = function (request, response){

    console.log('Request', request.url);
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else if (/\/\S+.html/.test(request.url)) {
        fs.readFile('views'+request.url, 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else if (/\/\S+.css/.test(request.url)) {
        fs.readFile('stylesheets'+request.url, 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    } else if (/\/\S+.jpg/.test(request.url)) {
        fs.readFile('images'+request.url, function (errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    } else {
        response.end('File not found!!!');
    }
};