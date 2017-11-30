var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL:', request.url);

    if(request.url === '/') {
        fs.readFile('templates/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/torah') {
        fs.readFile('templates/torah.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/stylesheets/style.css") {
        fs.readFile("stylesheets/style.css", "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    else{
        response.writeHead(404);
        response.end('File not found! Now, go fly a kite, elsewhere.');
    }
});
server.listen(7707);
console.log("Running in locahost at port 67707");