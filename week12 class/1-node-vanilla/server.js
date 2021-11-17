const http = require("http");

const hostname = "localhost";
const port = 8001;

// Create HTTP server
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   console.log(req);
   // Send the response body
   res.end('Hello Class \n');
});

// Logs once the server starts listening
server.listen(port, hostname, () => {
   console.log(`NODE Server running at http://${hostname}:${port}/`);
})
